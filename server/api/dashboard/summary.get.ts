import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { getBusinessDayRange } from "~/server/utils/businessDay";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);

  const company = await prisma.company.findUnique({
    where: { id: user.companyId },
    select: { openTime: true, closeTime: true },
  });
  const companyHours = company ?? { openTime: null, closeTime: null };

  // Business-day-aware "today"/"yesterday" boundaries: a company open past
  // midnight (e.g. 07:00 -> 02:00) still counts a 01:00 sale toward the
  // business day that's still running, not the new calendar day.
  const todayDateStr = new Date().toISOString().slice(0, 10);
  const yesterdayAnchor = new Date(`${todayDateStr}T00:00:00.000`);
  yesterdayAnchor.setDate(yesterdayAnchor.getDate() - 1);
  const yesterdayDateStr = yesterdayAnchor.toISOString().slice(0, 10);

  const { from: startOfDay } = getBusinessDayRange(todayDateStr, companyHours);
  const { from: startOfYesterday } = getBusinessDayRange(yesterdayDateStr, companyHours);
  const storeScope = resolveStoreScope(user);

  const [todaySales, yesterdaySales, lowStockProducts, openSessions, recentSales] = await Promise.all([
    prisma.sale.findMany({
      where: { companyId: user.companyId, ...storeScope, status: "COMPLETED", createdAt: { gte: startOfDay } },
      select: {
        id: true,
        storeId: true,
        total: true,
        createdAt: true,
        payments: { select: { method: true, amount: true } },
        lines: {
          select: {
            label: true,
            total: true,
            product: { select: { category: { select: { name: true } } } },
          },
        },
      },
    }),
    prisma.sale.findMany({
      where: { companyId: user.companyId, ...storeScope, status: "COMPLETED", createdAt: { gte: startOfYesterday, lt: startOfDay } },
      select: { total: true },
    }),
    prisma.product.findMany({
      where: { companyId: user.companyId, ...storeScope, active: true, stockable: true },
      select: { id: true, label: true, quantity: true, alertThreshold: true },
    }),
    prisma.cashSession.findMany({
      where: { status: "OPEN", cashRegister: { companyId: user.companyId, ...storeScope } },
      select: { id: true },
    }),
    prisma.sale.findMany({
      where: { companyId: user.companyId, ...storeScope, status: "COMPLETED" },
      include: { lines: true },
      orderBy: { createdAt: "desc" },
      take: 8,
    }),
  ]);

  const revenueToday = todaySales.reduce((sum, s) => sum + Number(s.total), 0);
  const revenueYesterday = yesterdaySales.reduce((sum, s) => sum + Number(s.total), 0);
  const salesCountToday = todaySales.length;
  const salesCountYesterday = yesterdaySales.length;

  const revenueTrendPct = revenueYesterday > 0 ? ((revenueToday - revenueYesterday) / revenueYesterday) * 100 : null;
  const salesTrendPct =
    salesCountYesterday > 0 ? ((salesCountToday - salesCountYesterday) / salesCountYesterday) * 100 : null;

  const lowStock = lowStockProducts.filter((p) => p.quantity <= p.alertThreshold);

  // Hourly revenue buckets for the "Évolution des ventes" chart. Default to a
  // typical business-day window (08h-19h) but widen it if sales happened
  // outside that range so nothing is silently dropped from the chart.
  const hourlyMap = new Map<number, number>();
  for (const s of todaySales) {
    const h = new Date(s.createdAt).getHours();
    hourlyMap.set(h, (hourlyMap.get(h) ?? 0) + Number(s.total));
  }
  const activeHours = [...hourlyMap.keys()];
  const minHour = activeHours.length ? Math.min(8, ...activeHours) : 8;
  const maxHour = activeHours.length ? Math.max(19, ...activeHours) : 19;
  const hourly: { hour: number; label: string; revenue: number }[] = [];
  for (let h = minHour; h <= maxHour; h++) {
    hourly.push({ hour: h, label: `${String(h).padStart(2, "0")}:00`, revenue: hourlyMap.get(h) ?? 0 });
  }

  // Revenue by product category, for the "Répartition des ventes" donut.
  const categoryMap = new Map<string, number>();
  for (const s of todaySales) {
    for (const line of s.lines) {
      const name = line.product?.category?.name ?? "Autres";
      categoryMap.set(name, (categoryMap.get(name) ?? 0) + Number(line.total));
    }
  }
  const categoryBreakdown = Array.from(categoryMap, ([name, total]) => ({ name, total })).sort(
    (a, b) => b.total - a.total
  );

  // Revenue by payment method, for the "Mode de paiement" card.
  const paymentBreakdown: Record<string, number> = { CASH: 0, CARD: 0, WAVE: 0, ORANGE_MONEY: 0 };
  for (const s of todaySales) {
    for (const p of s.payments) {
      paymentBreakdown[p.method] = (paymentBreakdown[p.method] ?? 0) + Number(p.amount);
    }
  }

  // Direction's aggregate view ("Tous les magasins"): break today's revenue
  // down per store side-by-side, instead of just one blended total that
  // hides which store is actually driving the numbers.
  let storeBreakdown: { storeId: number; storeName: string; revenueToday: number; salesCountToday: number }[] | undefined;
  if (user.role === "OWNER" && !user.activeStoreId) {
    const stores = await prisma.store.findMany({
      where: { companyId: user.companyId, active: true },
      select: { id: true, name: true },
    });
    const byStore = new Map<number, { revenueToday: number; salesCountToday: number }>();
    for (const s of todaySales) {
      const entry = byStore.get(s.storeId) ?? { revenueToday: 0, salesCountToday: 0 };
      entry.revenueToday += Number(s.total);
      entry.salesCountToday += 1;
      byStore.set(s.storeId, entry);
    }
    storeBreakdown = stores
      .map((s) => ({
        storeId: s.id,
        storeName: s.name,
        revenueToday: byStore.get(s.id)?.revenueToday ?? 0,
        salesCountToday: byStore.get(s.id)?.salesCountToday ?? 0,
      }))
      .sort((a, b) => b.revenueToday - a.revenueToday);
  }

  // Flatten the most recent sales into line-item rows for "Dernières ventes".
  const recentSaleLines = recentSales
    .flatMap((s) =>
      s.lines.map((l) => ({
        saleId: s.id,
        label: l.label,
        quantity: l.quantity,
        unitPrice: Number(l.unitPrice),
        total: Number(l.total),
        createdAt: s.createdAt,
      }))
    )
    .slice(0, 8);

  return {
    revenueToday,
    revenueYesterday,
    revenueTrendPct,
    salesCountToday,
    salesCountYesterday,
    salesTrendPct,
    lowStockCount: lowStock.length,
    lowStockProducts: lowStock.slice(0, 10),
    openSessionsCount: openSessions.length,
    hourly,
    categoryBreakdown,
    paymentBreakdown,
    recentSaleLines,
    latestSaleId: recentSales[0]?.id ?? null,
    storeBreakdown,
  };
});

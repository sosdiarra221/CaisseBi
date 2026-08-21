import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { getBusinessDayRange } from "~/server/utils/businessDay";

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "rapports");
  const query = getQuery(event);

  const dateStr = query.date ? String(query.date) : new Date().toISOString().slice(0, 10);
  const company = await prisma.company.findUnique({
    where: { id: user.companyId },
    select: { openTime: true, closeTime: true },
  });
  const { from, to } = getBusinessDayRange(dateStr, company ?? { openTime: null, closeTime: null });

  const [sales, cancelledCount, sessions] = await Promise.all([
    prisma.sale.findMany({
      where: { companyId: user.companyId, status: "COMPLETED", createdAt: { gte: from, lte: to } },
      include: { lines: true, payments: true },
      orderBy: { createdAt: "asc" },
    }),
    prisma.sale.count({
      where: { companyId: user.companyId, status: "CANCELLED", createdAt: { gte: from, lte: to } },
    }),
    // Sessions relevant to this day: opened or closed within the day. Used to
    // surface "Heure de clôture" / "Caissier" — the most recently closed
    // session wins; if none is closed yet we fall back to the latest open
    // one and the UI shows "En cours" instead of fabricating a closing time.
    prisma.cashSession.findMany({
      where: {
        cashRegister: { companyId: user.companyId },
        OR: [{ openedAt: { gte: from, lte: to } }, { closedAt: { gte: from, lte: to } }],
      },
      include: { user: { select: { id: true, name: true } } },
      orderBy: [{ closedAt: "desc" }, { openedAt: "desc" }],
    }),
  ]);

  const revenue = sales.reduce((sum, s) => sum + Number(s.total), 0);
  const salesCount = sales.length;

  let articlesSold = 0;
  const lines: {
    saleNumber: number;
    time: string;
    label: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[] = [];
  const paymentTotals = new Map<string, number>();

  for (const sale of sales) {
    for (const line of sale.lines) {
      articlesSold += line.quantity;
      lines.push({
        saleNumber: sale.number,
        time: sale.createdAt.toISOString(),
        label: line.label,
        quantity: line.quantity,
        unitPrice: Number(line.unitPrice),
        total: Number(line.total),
      });
    }
    for (const payment of sale.payments) {
      paymentTotals.set(payment.method, (paymentTotals.get(payment.method) ?? 0) + Number(payment.amount));
    }
  }

  lines.sort((a, b) => a.time.localeCompare(b.time));

  let dominantPaymentMethod: string | null = null;
  let dominantAmount = -1;
  for (const [method, amount] of paymentTotals) {
    if (amount > dominantAmount) {
      dominantAmount = amount;
      dominantPaymentMethod = method;
    }
  }

  const closedSession = sessions.find((s) => s.status === "CLOSED") ?? null;
  const referenceSession = closedSession ?? sessions[0] ?? null;

  return {
    date: dateStr,
    revenue,
    salesCount,
    articlesSold,
    cancelledCount,
    dominantPaymentMethod,
    cashier: referenceSession?.user?.name ?? null,
    closedAt: closedSession?.closedAt ? closedSession.closedAt.toISOString() : null,
    cashSessionStatus: referenceSession?.status ?? null,
    lines,
  };
});

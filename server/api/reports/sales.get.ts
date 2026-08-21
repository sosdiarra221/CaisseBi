import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { getBusinessDayRange } from "~/server/utils/businessDay";

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "rapports");
  const query = getQuery(event);

  let from: Date;
  let to: Date;
  if (query.from || query.to) {
    // Explicit user-picked range: take it literally, don't shift it onto a
    // business-day boundary.
    from = query.from ? new Date(String(query.from)) : new Date(new Date().setHours(0, 0, 0, 0));
    to = query.to ? new Date(String(query.to)) : new Date();
  } else {
    // Default ("today"): use the company's business-day window so a sale
    // made after midnight but before closing still counts toward the day
    // that's still open, not the next calendar day.
    const company = await prisma.company.findUnique({
      where: { id: user.companyId },
      select: { openTime: true, closeTime: true },
    });
    const dateStr = new Date().toISOString().slice(0, 10);
    ({ from, to } = getBusinessDayRange(dateStr, company ?? { openTime: null, closeTime: null }));
  }

  const sales = await prisma.sale.findMany({
    where: { companyId: user.companyId, status: "COMPLETED", createdAt: { gte: from, lte: to } },
    include: { lines: true, user: { select: { id: true, name: true } } },
  });

  const revenue = sales.reduce((sum, s) => sum + Number(s.total), 0);

  const byCashier = new Map<string, number>();
  const byProduct = new Map<string, number>();
  for (const sale of sales) {
    byCashier.set(sale.user.name, (byCashier.get(sale.user.name) ?? 0) + Number(sale.total));
    for (const line of sale.lines) {
      byProduct.set(line.label, (byProduct.get(line.label) ?? 0) + Number(line.total));
    }
  }

  return {
    from,
    to,
    revenue,
    salesCount: sales.length,
    byCashier: Array.from(byCashier, ([name, total]) => ({ name, total })),
    byProduct: Array.from(byProduct, ([label, total]) => ({ label, total })).sort(
      (a, b) => b.total - a.total
    ),
  };
});

import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { getBusinessDayRange } from "~/server/utils/businessDay";
import { resolveStoreScope } from "~/server/utils/storeScope";

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

  const storeScope = resolveStoreScope(user);

  const products = await prisma.product.findMany({
    where: { companyId: user.companyId, ...storeScope, active: true, stockable: true },
    select: { id: true, label: true, quantity: true, alertThreshold: true },
    orderBy: { label: "asc" },
  });

  const movements = await prisma.stockMovement.findMany({
    where: { product: { companyId: user.companyId, ...storeScope }, createdAt: { gte: from, lte: to } },
    include: { product: { select: { label: true } } },
  });

  const totals = { IN: 0, OUT: 0, ADJUSTMENT: 0 } as Record<string, number>;
  for (const m of movements) totals[m.type] += m.quantity;

  return {
    from,
    to,
    products,
    lowStock: products.filter((p) => p.quantity <= p.alertThreshold),
    movementTotals: totals,
    movements,
  };
});

import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const id = Number(getRouterParam(event, "id"));

  const session = await prisma.cashSession.findFirst({
    where: { id, cashRegister: { companyId: user.companyId, ...resolveStoreScope(user) } },
    include: {
      cashRegister: true,
      user: { select: { id: true, name: true } },
      sales: {
        where: { status: "COMPLETED" },
        include: { payments: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });
  if (!session) throw createError({ statusCode: 404, statusMessage: "Session introuvable" });

  const totals = { CASH: 0, CARD: 0, MOBILE: 0 } as Record<string, number>;
  let salesTotal = 0;
  for (const sale of session.sales) {
    salesTotal += Number(sale.total);
    for (const payment of sale.payments) {
      totals[payment.method] = (totals[payment.method] ?? 0) + Number(payment.amount);
    }
  }

  return {
    ...session,
    salesTotal,
    salesCount: session.sales.length,
    paymentTotals: totals,
  };
});

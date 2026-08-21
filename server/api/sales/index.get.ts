import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const query = getQuery(event);

  const from = query.from ? new Date(String(query.from)) : undefined;
  const to = query.to ? new Date(String(query.to)) : undefined;
  const cashSessionId = query.cashSessionId ? Number(query.cashSessionId) : undefined;
  const method = typeof query.method === "string" ? query.method : undefined;

  // Cashiers may only ever see their own sales, never the whole company's.
  const userId = user.role === "CASHIER" ? user.id : query.userId ? Number(query.userId) : undefined;

  return prisma.sale.findMany({
    where: {
      companyId: user.companyId,
      userId,
      cashSessionId,
      createdAt: from || to ? { gte: from, lte: to } : undefined,
      payments: method ? { some: { method: method as any } } : undefined,
    },
    include: {
      user: { select: { id: true, name: true } },
      payments: true,
      lines: true,
    },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
});

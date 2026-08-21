import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const query = getQuery(event);
  const productId = query.productId ? Number(query.productId) : undefined;
  const type = typeof query.type === "string" && query.type ? (query.type as "IN" | "OUT" | "ADJUSTMENT") : undefined;
  const from = query.from ? new Date(String(query.from)) : undefined;
  const to = query.to ? new Date(String(query.to)) : undefined;

  return prisma.stockMovement.findMany({
    where: {
      productId,
      type,
      createdAt: from || to ? { gte: from, lte: to } : undefined,
      product: { companyId: user.companyId },
    },
    include: { product: true, user: { select: { id: true, name: true } } },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
});

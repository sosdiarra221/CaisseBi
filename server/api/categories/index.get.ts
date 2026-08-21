import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  return prisma.category.findMany({
    where: { companyId: user.companyId },
    include: { _count: { select: { products: true } } },
    orderBy: { name: "asc" },
  });
});

import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "depenses");
  const query = getQuery(event);

  const category = typeof query.category === "string" && query.category ? query.category : undefined;
  const from = query.from ? new Date(`${String(query.from)}T00:00:00.000`) : undefined;
  const to = query.to ? new Date(`${String(query.to)}T23:59:59.999`) : undefined;

  return prisma.expense.findMany({
    where: {
      companyId: user.companyId,
      ...resolveStoreScope(user),
      category,
      date: from || to ? { gte: from, lte: to } : undefined,
    },
    include: { user: { select: { id: true, name: true } } },
    orderBy: { date: "desc" },
    take: 200,
  });
});

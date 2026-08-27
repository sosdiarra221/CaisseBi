import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const query = getQuery(event);
  const type = typeof query.type === "string" && query.type ? (query.type as "IN" | "OUT") : undefined;

  return prisma.articleMovement.findMany({
    where: {
      companyId: user.companyId,
      ...resolveStoreScope(user),
      type,
    },
    include: {
      user: { select: { id: true, name: true } },
      lines: { include: { article: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
});

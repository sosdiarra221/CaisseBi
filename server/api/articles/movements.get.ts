import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const query = getQuery(event);
  const articleId = query.articleId ? Number(query.articleId) : undefined;
  const type = typeof query.type === "string" && query.type ? (query.type as "IN" | "OUT") : undefined;

  return prisma.articleMovement.findMany({
    where: {
      articleId,
      type,
      article: { companyId: user.companyId, ...resolveStoreScope(user) },
    },
    include: { article: true, user: { select: { id: true, name: true } } },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
});

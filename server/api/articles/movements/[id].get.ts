import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const id = Number(getRouterParam(event, "id"));

  const movement = await prisma.articleMovement.findFirst({
    where: { id, companyId: user.companyId, ...resolveStoreScope(user) },
    include: {
      lines: { include: { article: true } },
      user: { select: { id: true, name: true } },
    },
  });
  if (!movement) throw createError({ statusCode: 404, statusMessage: "Mouvement introuvable" });
  return movement;
});

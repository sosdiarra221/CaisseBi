import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "stock");
  const id = Number(getRouterParam(event, "id"));

  const article = await prisma.article.findFirst({ where: { id, companyId: user.companyId, ...resolveStoreScope(user) } });
  if (!article) throw createError({ statusCode: 404, statusMessage: "Article introuvable" });

  await prisma.article.update({ where: { id }, data: { active: false } });
  return { ok: true };
});

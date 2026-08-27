import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveStoreScope } from "~/server/utils/storeScope";

const bodySchema = z.object({
  designation: z.string().min(1).optional(),
  unit: z.string().min(1).optional(),
  active: z.boolean().optional(),
});

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "stock");
  const id = Number(getRouterParam(event, "id"));
  const data = await readValidatedBody(event, bodySchema.parse);

  const article = await prisma.article.findFirst({ where: { id, companyId: user.companyId, ...resolveStoreScope(user) } });
  if (!article) throw createError({ statusCode: 404, statusMessage: "Article introuvable" });

  return prisma.article.update({ where: { id }, data });
});

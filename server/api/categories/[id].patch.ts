import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveStoreScope } from "~/server/utils/storeScope";

const bodySchema = z.object({
  name: z.string().min(1).optional(),
  parentId: z.number().int().positive().optional().nullable(),
});

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "produits");
  const id = Number(getRouterParam(event, "id"));
  const data = await readValidatedBody(event, bodySchema.parse);

  const category = await prisma.category.findFirst({ where: { id, companyId: user.companyId, ...resolveStoreScope(user) } });
  if (!category) throw createError({ statusCode: 404, statusMessage: "Catégorie introuvable" });

  return prisma.category.update({ where: { id }, data });
});

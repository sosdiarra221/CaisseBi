import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "produits");
  const id = Number(getRouterParam(event, "id"));

  const category = await prisma.category.findFirst({ where: { id, companyId: user.companyId, ...resolveStoreScope(user) } });
  if (!category) throw createError({ statusCode: 404, statusMessage: "Catégorie introuvable" });

  const productCount = await prisma.product.count({ where: { categoryId: id } });
  if (productCount > 0) {
    throw createError({ statusCode: 400, statusMessage: "Catégorie utilisée par des produits" });
  }

  await prisma.category.delete({ where: { id } });
  return { ok: true };
});

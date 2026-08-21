import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "produits");
  const id = Number(getRouterParam(event, "id"));

  const product = await prisma.product.findFirst({ where: { id, companyId: user.companyId } });
  if (!product) throw createError({ statusCode: 404, statusMessage: "Produit introuvable" });

  await prisma.product.update({ where: { id }, data: { active: false } });
  return { ok: true };
});

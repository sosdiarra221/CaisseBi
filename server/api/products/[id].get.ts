import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const id = Number(getRouterParam(event, "id"));

  const product = await prisma.product.findFirst({
    where: { id, companyId: user.companyId },
    include: { category: true },
  });
  if (!product) throw createError({ statusCode: 404, statusMessage: "Produit introuvable" });
  return product;
});

import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { logAudit } from "~/server/utils/audit";

const bodySchema = z.object({
  label: z.string().min(1).optional(),
  categoryId: z.number().int().positive().optional().nullable(),
  type: z.string().min(1).optional(),
  stockable: z.boolean().optional(),
  alertThreshold: z.number().int().min(0).optional(),
  purchasePrice: z.number().min(0).optional(),
  salePrice: z.number().min(0).optional(),
  barcode: z.string().optional().nullable(),
  reference: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  active: z.boolean().optional(),
});

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "produits");
  const id = Number(getRouterParam(event, "id"));
  const data = await readValidatedBody(event, bodySchema.parse);

  const before = await prisma.product.findFirst({ where: { id, companyId: user.companyId } });
  if (!before) throw createError({ statusCode: 404, statusMessage: "Produit introuvable" });

  const product = await prisma.product.update({ where: { id }, data });

  if (
    data.salePrice !== undefined &&
    Number(before.salePrice) !== data.salePrice
  ) {
    await logAudit({
      companyId: user.companyId,
      userId: user.id,
      action: "PRICE_CHANGE",
      entity: "Product",
      entityId: id,
      oldValue: { salePrice: before.salePrice },
      newValue: { salePrice: data.salePrice },
    });
  }

  return product;
});

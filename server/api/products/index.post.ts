import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";

const bodySchema = z.object({
  label: z.string().min(1),
  categoryId: z.number().int().positive().optional().nullable(),
  type: z.string().min(1).default("Produit"),
  stockable: z.boolean().default(true),
  quantity: z.number().int().min(0).default(0),
  alertThreshold: z.number().int().min(0).default(5),
  purchasePrice: z.number().min(0).default(0),
  salePrice: z.number().min(0).default(0),
  barcode: z.string().optional().nullable(),
  reference: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
});

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "produits");
  const data = await readValidatedBody(event, bodySchema.parse);

  return prisma.product.create({
    data: { ...data, companyId: user.companyId },
  });
});

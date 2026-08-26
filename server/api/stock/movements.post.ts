import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { logAudit } from "~/server/utils/audit";
import { getSupervisorUserIds, sendPushToUsers } from "~/server/utils/push";
import { resolveStoreScope } from "~/server/utils/storeScope";

const REASONS = [
  "Réception",
  "Produit gâté",
  "Produit périmé",
  "Produit cassé",
  "Perte",
  "Vol",
  "Utilisation interne",
  "Don",
  "Autre",
] as const;

const bodySchema = z.object({
  productId: z.number().int().positive(),
  type: z.enum(["IN", "OUT"]),
  quantity: z.number().int().positive(),
  reason: z.enum(REASONS),
  observation: z.string().optional().nullable(),
});

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "stock");
  const data = await readValidatedBody(event, bodySchema.parse);

  const product = await prisma.product.findFirst({
    where: { id: data.productId, companyId: user.companyId, ...resolveStoreScope(user) },
  });
  if (!product) throw createError({ statusCode: 404, statusMessage: "Produit introuvable" });
  if (!product.stockable) {
    throw createError({ statusCode: 400, statusMessage: "Ce produit n'est pas stockable" });
  }

  const delta = data.type === "IN" ? data.quantity : -data.quantity;
  if (data.type === "OUT" && product.quantity + delta < 0) {
    throw createError({ statusCode: 400, statusMessage: "Stock insuffisant" });
  }

  const [movement] = await prisma.$transaction([
    prisma.stockMovement.create({
      data: {
        productId: product.id,
        userId: user.id,
        type: data.type,
        quantity: data.quantity,
        reason: data.reason,
        observation: data.observation,
      },
    }),
    prisma.product.update({
      where: { id: product.id },
      data: { quantity: { increment: delta } },
    }),
  ]);

  await logAudit({
    companyId: user.companyId,
    userId: user.id,
    action: "STOCK_MOVEMENT",
    entity: "Product",
    entityId: product.id,
    oldValue: { quantity: product.quantity },
    newValue: { quantity: product.quantity + delta },
  });

  const newQuantity = product.quantity + delta;
  if (data.type === "OUT" && newQuantity <= product.alertThreshold) {
    await sendPushToUsers(await getSupervisorUserIds(user.companyId), {
      title: "Stock faible",
      body: `${product.label} : ${newQuantity} restant(s) (seuil ${product.alertThreshold})`,
      url: "/stock",
    });
  }

  return movement;
});

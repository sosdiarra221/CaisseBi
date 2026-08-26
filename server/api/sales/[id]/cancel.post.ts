import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { logAudit } from "~/server/utils/audit";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "ventes");
  const id = Number(getRouterParam(event, "id"));

  const sale = await prisma.sale.findFirst({
    where: { id, companyId: user.companyId, status: "COMPLETED", ...resolveStoreScope(user) },
    include: { lines: { include: { product: true } } },
  });
  if (!sale) throw createError({ statusCode: 404, statusMessage: "Vente introuvable ou déjà annulée" });

  await prisma.$transaction(async (tx) => {
    await tx.sale.update({ where: { id: sale.id }, data: { status: "CANCELLED" } });

    for (const line of sale.lines) {
      if (!line.product.stockable) continue;
      await tx.product.update({
        where: { id: line.productId },
        data: { quantity: { increment: line.quantity } },
      });
      await tx.stockMovement.create({
        data: {
          productId: line.productId,
          userId: user.id,
          type: "IN",
          quantity: line.quantity,
          reason: "Autre",
          observation: `Annulation vente #${sale.number}`,
        },
      });
    }
  });

  await logAudit({
    companyId: user.companyId,
    userId: user.id,
    action: "SALE_CANCELLED",
    entity: "Sale",
    entityId: sale.id,
  });

  return { ok: true };
});

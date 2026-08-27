import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { logAudit } from "~/server/utils/audit";
import { resolveStoreScope, resolveWriteStoreId } from "~/server/utils/storeScope";

const bodySchema = z.object({
  lines: z
    .array(
      z.object({
        productId: z.number().int().positive(),
        real: z.number().int().min(0),
      })
    )
    .min(1),
});

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "stock");
  const { lines } = await readValidatedBody(event, bodySchema.parse);

  const productIds = lines.map((l) => l.productId);
  const products = await prisma.product.findMany({
    where: { id: { in: productIds }, companyId: user.companyId, ...resolveStoreScope(user) },
  });
  const productMap = new Map(products.map((p) => [p.id, p]));
  const storeId = await resolveWriteStoreId(user);

  const session = await prisma.$transaction(async (tx) => {
    const inventorySession = await tx.inventorySession.create({
      data: {
        companyId: user.companyId,
        storeId,
        userId: user.id,
        status: "VALIDATED",
        validatedAt: new Date(),
      },
    });

    for (const line of lines) {
      const product = productMap.get(line.productId);
      if (!product) continue;
      const gap = line.real - product.quantity;

      await tx.inventoryLine.create({
        data: {
          inventorySessionId: inventorySession.id,
          productId: product.id,
          theoretical: product.quantity,
          real: line.real,
          gap,
        },
      });

      if (gap !== 0) {
        await tx.stockMovement.create({
          data: {
            productId: product.id,
            userId: user.id,
            type: "ADJUSTMENT",
            quantity: Math.abs(gap),
            reason: "Inventaire",
          },
        });
        await tx.product.update({
          where: { id: product.id },
          data: { quantity: line.real },
        });
      }
    }

    return inventorySession;
  });

  await logAudit({
    companyId: user.companyId,
    userId: user.id,
    action: "INVENTORY_VALIDATED",
    entity: "InventorySession",
    entityId: session.id,
  });

  return prisma.inventorySession.findUnique({
    where: { id: session.id },
    include: { lines: { include: { product: true } } },
  });
});

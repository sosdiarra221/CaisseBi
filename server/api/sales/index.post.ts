import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { formatAmount } from "~/lib/format";
import { getOwnerUserIds, getSupervisorUserIds, sendPushToUsers } from "~/server/utils/push";
import { resolveStoreScope } from "~/server/utils/storeScope";

const bodySchema = z.object({
  cashSessionId: z.number().int().positive(),
  lines: z
    .array(
      z.object({
        productId: z.number().int().positive(),
        quantity: z.number().int().positive(),
        discount: z.number().min(0).default(0),
      })
    )
    .min(1),
  payments: z
    .array(
      z.object({
        method: z.enum(["CASH", "CARD", "WAVE", "ORANGE_MONEY"]),
        amount: z.number().min(0),
      })
    )
    .min(1),
});

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const data = await readValidatedBody(event, bodySchema.parse);

  const session = await prisma.cashSession.findFirst({
    where: { id: data.cashSessionId, status: "OPEN", cashRegister: { companyId: user.companyId, ...resolveStoreScope(user) } },
    include: { cashRegister: true },
  });
  if (!session) throw createError({ statusCode: 400, statusMessage: "Aucune session de caisse ouverte" });
  const storeId = session.cashRegister.storeId;

  const canSell = user.role !== "CASHIER" || session.userId === user.id;
  if (!canSell) {
    throw createError({ statusCode: 403, statusMessage: "Cette session appartient à un autre utilisateur" });
  }

  const canDiscount = user.role === "OWNER" || user.role === "MANAGER" || user.role === "GERANT";
  if (!canDiscount && data.lines.some((l) => l.discount > 0)) {
    throw createError({ statusCode: 403, statusMessage: "Vous n'êtes pas autorisé à appliquer une remise" });
  }

  const productIds = data.lines.map((l) => l.productId);
  const products = await prisma.product.findMany({
    where: { id: { in: productIds }, companyId: user.companyId, storeId, active: true },
  });
  const productMap = new Map(products.map((p) => [p.id, p]));

  let total = 0;
  const lineData = data.lines.map((line) => {
    const product = productMap.get(line.productId);
    if (!product) {
      throw createError({ statusCode: 404, statusMessage: `Produit ${line.productId} introuvable` });
    }
    if (product.stockable && product.quantity < line.quantity) {
      throw createError({ statusCode: 400, statusMessage: `Stock insuffisant pour ${product.label}` });
    }
    const unitPrice = Number(product.salePrice);
    const lineTotal = unitPrice * line.quantity - line.discount;
    total += lineTotal;
    return { product, quantity: line.quantity, discount: line.discount, unitPrice, lineTotal };
  });

  const paymentsTotal = data.payments.reduce((sum, p) => sum + p.amount, 0);
  if (Math.abs(paymentsTotal - total) > 0.01) {
    throw createError({ statusCode: 400, statusMessage: "Le montant payé ne correspond pas au total" });
  }

  const sale = await prisma.$transaction(async (tx) => {
    const number = (await tx.sale.count({ where: { companyId: user.companyId } })) + 1;

    const created = await tx.sale.create({
      data: {
        companyId: user.companyId,
        storeId,
        number,
        cashSessionId: session.id,
        userId: user.id,
        total,
        lines: {
          create: lineData.map((l) => ({
            productId: l.product.id,
            label: l.product.label,
            quantity: l.quantity,
            unitPrice: l.unitPrice,
            discount: l.discount,
            total: l.lineTotal,
          })),
        },
        payments: { create: data.payments },
      },
      include: { lines: true, payments: true },
    });

    for (const l of lineData) {
      if (!l.product.stockable) continue;
      await tx.product.update({
        where: { id: l.product.id },
        data: { quantity: { decrement: l.quantity } },
      });
      await tx.stockMovement.create({
        data: {
          productId: l.product.id,
          userId: user.id,
          type: "OUT",
          quantity: l.quantity,
          reason: "Vente",
        },
      });
    }

    return created;
  });

  const company = await prisma.company.findUnique({ where: { id: user.companyId } });
  const currency = company?.currency ?? "";

  await sendPushToUsers(await getOwnerUserIds(user.companyId), {
    title: "Nouvelle vente",
    body: `Vente #${String(sale.number).padStart(6, "0")} — ${formatAmount(total)} ${currency}`,
    url: "/ventes",
  });

  const lowStockLines = lineData.filter(
    (l) => l.product.stockable && l.product.quantity - l.quantity <= l.product.alertThreshold
  );
  if (lowStockLines.length) {
    const supervisorIds = await getSupervisorUserIds(user.companyId);
    for (const l of lowStockLines) {
      await sendPushToUsers(supervisorIds, {
        title: "Stock faible",
        body: `${l.product.label} : ${l.product.quantity - l.quantity} restant(s) (seuil ${l.product.alertThreshold})`,
        url: "/stock",
      });
    }
  }

  return sale;
});

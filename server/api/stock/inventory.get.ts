import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "stock");

  const products = await prisma.product.findMany({
    where: { companyId: user.companyId, active: true, stockable: true },
    orderBy: { label: "asc" },
    select: { id: true, label: true, quantity: true },
  });

  return products.map((p) => ({ productId: p.id, label: p.label, theoretical: p.quantity }));
});

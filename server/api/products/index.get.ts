import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const query = getQuery(event);

  const search = typeof query.search === "string" ? query.search.trim() : "";
  const categoryId = query.categoryId ? Number(query.categoryId) : undefined;
  const barcode = typeof query.barcode === "string" ? query.barcode.trim() : undefined;
  const includeInactive = query.includeInactive === "true";
  const lowStock = query.lowStock === "true";

  const products = await prisma.product.findMany({
    where: {
      companyId: user.companyId,
      ...resolveStoreScope(user),
      active: includeInactive ? undefined : true,
      categoryId,
      barcode: barcode || undefined,
      OR: search
        ? [
            { label: { contains: search } },
            { reference: { contains: search } },
            { barcode: { contains: search } },
          ]
        : undefined,
    },
    include: { category: true },
    orderBy: { label: "asc" },
  });

  const filtered = lowStock
    ? products.filter((p) => p.stockable && p.quantity <= p.alertThreshold)
    : products;

  return filtered;
});

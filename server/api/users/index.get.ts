import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER", "MANAGER", "GERANT"]);

  // MANAGER/GERANT only ever manage their own store's staff (resolveStoreScope
  // locks them to it); OWNER sees everyone, or just the store they've
  // switched to.
  return prisma.user.findMany({
    where: { companyId: user.companyId, ...resolveStoreScope(user) },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      role: true,
      storeId: true,
      store: { select: { name: true } },
      active: true,
      createdAt: true,
    },
    orderBy: { name: "asc" },
  });
});

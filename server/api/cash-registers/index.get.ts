import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  return prisma.cashRegister.findMany({
    where: { companyId: user.companyId, ...resolveStoreScope(user), active: true },
    orderBy: { name: "asc" },
  });
});

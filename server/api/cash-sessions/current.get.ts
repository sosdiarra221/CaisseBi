import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);

  return prisma.cashSession.findFirst({
    where: { status: "OPEN", cashRegister: { companyId: user.companyId, ...resolveStoreScope(user) } },
    include: { cashRegister: true, user: { select: { id: true, name: true } } },
    orderBy: { openedAt: "desc" },
  });
});

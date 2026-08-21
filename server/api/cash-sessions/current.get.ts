import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);

  return prisma.cashSession.findFirst({
    where: { status: "OPEN", cashRegister: { companyId: user.companyId } },
    include: { cashRegister: true, user: { select: { id: true, name: true } } },
    orderBy: { openedAt: "desc" },
  });
});

import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  return prisma.cashRegister.findMany({
    where: { companyId: user.companyId, active: true },
    orderBy: { name: "asc" },
  });
});

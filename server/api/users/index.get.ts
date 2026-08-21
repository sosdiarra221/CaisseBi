import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER", "MANAGER", "GERANT"]);

  return prisma.user.findMany({
    where: { companyId: user.companyId },
    select: { id: true, name: true, email: true, role: true, active: true, createdAt: true },
    orderBy: { name: "asc" },
  });
});

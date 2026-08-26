import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";

// Store management/switching is Direction-only (OWNER) — everyone else is
// permanently locked to their own store and never needs the full list.
export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);
  return prisma.store.findMany({
    where: { companyId: user.companyId },
    orderBy: { name: "asc" },
  });
});

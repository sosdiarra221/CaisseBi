import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";

// Shaped as { MANAGER: string[], CASHIER: string[] } rather than the raw row
// list — the frontend matrix (pages/(admin)/utilisateurs/roles.vue) just
// needs "is this module granted for this role", so this saves it from
// re-deriving the map on every render.
export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);

  const rows = await prisma.rolePermission.findMany({
    where: { companyId: user.companyId },
    select: { role: true, module: true },
  });

  const result: Record<string, string[]> = { MANAGER: [], GERANT: [], CASHIER: [] };
  for (const row of rows) {
    if (!result[row.role]) result[row.role] = [];
    result[row.role].push(row.module);
  }

  return result;
});

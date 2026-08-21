import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { GATEABLE_MODULES } from "~/lib/permissionModules";

// Unlike GET /api/role-permissions (OWNER-only, whole-company matrix), this
// is available to any authenticated user and returns only their own granted
// modules — used by middleware/auth.global.ts to decide whether a CASHIER
// can reach a module's page now that access can be delegated per-role.
export default defineEventHandler(async (event) => {
  const user = await requireUser(event);

  if (user.role === "OWNER") {
    return { modules: [...GATEABLE_MODULES] };
  }

  const rows = await prisma.rolePermission.findMany({
    where: { companyId: user.companyId, role: user.role },
    select: { module: true },
  });

  return { modules: rows.map((r) => r.module) };
});

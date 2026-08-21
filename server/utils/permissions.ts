import type { H3Event } from "h3";
import type { User } from "#auth-utils";
import { prisma } from "./prisma";
import { requireUser } from "./authz";
import { GATEABLE_MODULES, type GateableModule } from "~/lib/permissionModules";

export { GATEABLE_MODULES };
export type { GateableModule };

export async function hasModuleAccess(user: User, module: GateableModule): Promise<boolean> {
  // OWNER always has full access — never needs a RolePermission row.
  if (user.role === "OWNER") return true;

  const row = await prisma.rolePermission.findUnique({
    where: {
      companyId_role_module: {
        companyId: user.companyId,
        role: user.role,
        module,
      },
    },
  });
  return row !== null;
}

export async function requireModuleAccess(event: H3Event, module: GateableModule): Promise<User> {
  const user = await requireUser(event);
  if (!(await hasModuleAccess(user, module))) {
    throw createError({ statusCode: 403, statusMessage: "Accès refusé" });
  }
  return user;
}

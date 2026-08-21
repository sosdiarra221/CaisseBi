import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";
import { logAudit } from "~/server/utils/audit";
import { GATEABLE_MODULES } from "~/server/utils/permissions";

// Single-toggle PATCH: grant or revoke one {role, module} pair at a time.
// Simpler and more reliable than a bulk replace for a checkbox-matrix UI —
// each click is its own atomic, auditable change.
const bodySchema = z.object({
  role: z.enum(["MANAGER", "GERANT", "CASHIER"]),
  module: z.enum(GATEABLE_MODULES),
  granted: z.boolean(),
});

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);
  const { role, module, granted } = await readValidatedBody(event, bodySchema.parse);

  if (granted) {
    await prisma.rolePermission.upsert({
      where: { companyId_role_module: { companyId: user.companyId, role, module } },
      update: {},
      create: { companyId: user.companyId, role, module },
    });
  } else {
    await prisma.rolePermission.deleteMany({
      where: { companyId: user.companyId, role, module },
    });
  }

  await logAudit({
    companyId: user.companyId,
    userId: user.id,
    action: granted ? "ROLE_PERMISSION_GRANTED" : "ROLE_PERMISSION_REVOKED",
    entity: "RolePermission",
    newValue: { role, module, granted },
  });

  return { ok: true };
});

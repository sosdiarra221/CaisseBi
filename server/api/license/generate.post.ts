import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";
import { generateLicenseKey } from "~/server/utils/license";
import { logAudit } from "~/server/utils/audit";

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);

  // Keys are unique across the whole table; retry on the astronomically
  // unlikely chance of a collision.
  let key = generateLicenseKey();
  for (let attempts = 0; attempts < 5; attempts++) {
    const existing = await prisma.license.findUnique({ where: { key } });
    if (!existing) break;
    key = generateLicenseKey();
  }

  const license = await prisma.license.create({
    data: {
      companyId: user.companyId,
      key,
      generatedByUserId: user.id,
    },
  });

  await logAudit({
    companyId: user.companyId,
    userId: user.id,
    action: "GENERATE",
    entity: "License",
    entityId: license.id,
  });

  return { key: license.key };
});

import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";
import { logAudit } from "~/server/utils/audit";

const bodySchema = z.object({
  key: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);
  const { key } = await readValidatedBody(event, bodySchema.parse);

  const normalizedKey = key.trim().toUpperCase();

  const license = await prisma.license.findUnique({ where: { key: normalizedKey } });

  if (!license || license.companyId !== user.companyId) {
    throw createError({ statusCode: 404, statusMessage: "Clé de licence introuvable" });
  }

  if (license.activatedAt) {
    throw createError({ statusCode: 400, statusMessage: "Cette licence a déjà été activée" });
  }

  const activatedAt = new Date();
  const expiresAt = new Date(activatedAt.getTime() + 30 * 24 * 60 * 60 * 1000);

  const updated = await prisma.license.update({
    where: { id: license.id },
    data: { activatedAt, expiresAt },
  });

  await logAudit({
    companyId: user.companyId,
    userId: user.id,
    action: "ACTIVATE",
    entity: "License",
    entityId: updated.id,
  });

  return { expiresAt: updated.expiresAt };
});

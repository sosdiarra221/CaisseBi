import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { logAudit } from "~/server/utils/audit";

const bodySchema = z.object({
  token: z.string().min(1),
  password: z.string().min(6),
});

export default defineEventHandler(async (event) => {
  const { token, password } = await readValidatedBody(event, bodySchema.parse);

  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!resetToken) {
    throw createError({ statusCode: 400, statusMessage: "Lien de réinitialisation invalide" });
  }
  if (resetToken.usedAt) {
    throw createError({ statusCode: 400, statusMessage: "Ce lien a déjà été utilisé" });
  }
  if (resetToken.expiresAt < new Date()) {
    throw createError({ statusCode: 400, statusMessage: "Ce lien a expiré" });
  }

  const hashed = await hashPassword(password);

  await prisma.user.update({
    where: { id: resetToken.userId },
    data: { password: hashed },
  });

  await prisma.passwordResetToken.update({
    where: { id: resetToken.id },
    data: { usedAt: new Date() },
  });

  await logAudit({
    companyId: resetToken.user.companyId,
    userId: resetToken.userId,
    action: "PASSWORD_RESET",
    entity: "User",
    entityId: resetToken.userId,
  });

  return { ok: true };
});

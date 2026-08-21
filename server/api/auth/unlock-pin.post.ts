import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { checkPinLockout, recordPinFailure, recordPinSuccess } from "~/server/utils/pinRateLimit";

const bodySchema = z.object({
  pin: z.string().regex(/^\d{4}$/),
});

export default defineEventHandler(async (event) => {
  // Re-authenticates the already-logged-in session user without touching
  // the session itself, so in-progress state (cart, open drawers...) survives.
  // Mirrors server/api/auth/unlock.post.ts but checks the PIN instead of the
  // full password.
  const sessionUser = await requireUser(event);
  const { pin } = await readValidatedBody(event, bodySchema.parse);

  const lockout = checkPinLockout(sessionUser.id);
  if (lockout.locked) {
    throw createError({
      statusCode: 429,
      statusMessage: `Trop de tentatives. Réessayez dans ${lockout.retryAfterSeconds}s.`,
    });
  }

  const user = await prisma.user.findUnique({ where: { id: sessionUser.id } });
  if (!user || !user.active) {
    throw createError({ statusCode: 401, statusMessage: "Session invalide" });
  }

  if (!user.pinCode) {
    throw createError({ statusCode: 400, statusMessage: "Aucun code PIN configuré" });
  }

  const valid = await verifyPassword(user.pinCode, pin);
  if (!valid) {
    recordPinFailure(sessionUser.id);
    throw createError({ statusCode: 401, statusMessage: "Code PIN incorrect" });
  }

  recordPinSuccess(sessionUser.id);
  return { ok: true };
});

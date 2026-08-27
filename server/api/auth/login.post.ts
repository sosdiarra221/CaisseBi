import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { checkPinLockout, recordPinFailure, recordPinSuccess } from "~/server/utils/pinRateLimit";

const bodySchema = z.object({
  username: z.string().min(1),
  pin: z.string().regex(/^\d{4}$/),
});

export default defineEventHandler(async (event) => {
  const { username, pin } = await readValidatedBody(event, bodySchema.parse);

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user || !user.active) {
    throw createError({ statusCode: 401, statusMessage: "Identifiants invalides" });
  }

  const lockout = checkPinLockout(user.id);
  if (lockout.locked) {
    throw createError({
      statusCode: 429,
      statusMessage: `Trop de tentatives. Réessayez dans ${lockout.retryAfterSeconds}s.`,
    });
  }

  if (!user.pinCode) {
    throw createError({ statusCode: 401, statusMessage: "Identifiants invalides" });
  }

  const valid = await verifyPassword(user.pinCode, pin);
  if (!valid) {
    recordPinFailure(user.id);
    throw createError({ statusCode: 401, statusMessage: "Identifiants invalides" });
  }
  recordPinSuccess(user.id);

  await setUserSession(event, {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      companyId: user.companyId,
      storeId: user.storeId,
      activeStoreId: null,
      locale: user.locale,
    },
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
});

import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";

const bodySchema = z.object({
  password: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  // Re-authenticates the already-logged-in session user without touching
  // the session itself, so in-progress state (cart, open drawers...) survives.
  const sessionUser = await requireUser(event);
  const { password } = await readValidatedBody(event, bodySchema.parse);

  const user = await prisma.user.findUnique({ where: { id: sessionUser.id } });
  if (!user || !user.active) {
    throw createError({ statusCode: 401, statusMessage: "Session invalide" });
  }

  const valid = await verifyPassword(user.password, password);
  if (!valid) {
    throw createError({ statusCode: 401, statusMessage: "Mot de passe incorrect" });
  }

  return { ok: true };
});

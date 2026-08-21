import { z } from "zod";
import { prisma } from "~/server/utils/prisma";

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.active) {
    throw createError({ statusCode: 401, statusMessage: "Identifiants invalides" });
  }

  const valid = await verifyPassword(user.password, password);
  if (!valid) {
    throw createError({ statusCode: 401, statusMessage: "Identifiants invalides" });
  }

  await setUserSession(event, {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      companyId: user.companyId,
    },
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
});

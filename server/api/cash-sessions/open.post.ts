import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

const bodySchema = z.object({
  cashRegisterId: z.number().int().positive(),
  startingFloat: z.number().min(0),
});

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const data = await readValidatedBody(event, bodySchema.parse);

  const register = await prisma.cashRegister.findFirst({
    where: { id: data.cashRegisterId, companyId: user.companyId, ...resolveStoreScope(user) },
  });
  if (!register) throw createError({ statusCode: 404, statusMessage: "Caisse introuvable" });

  const existing = await prisma.cashSession.findFirst({
    where: { cashRegisterId: register.id, status: "OPEN" },
  });
  if (existing) {
    throw createError({ statusCode: 400, statusMessage: "Une session est déjà ouverte sur cette caisse" });
  }

  return prisma.cashSession.create({
    data: {
      cashRegisterId: register.id,
      userId: user.id,
      startingFloat: data.startingFloat,
    },
    include: { cashRegister: true, user: { select: { id: true, name: true } } },
  });
});

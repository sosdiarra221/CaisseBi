import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";

const bodySchema = z.object({
  name: z.string().min(1).optional(),
  role: z.enum(["OWNER", "MANAGER", "GERANT", "CASHIER"]).optional(),
  active: z.boolean().optional(),
  password: z.string().min(6).optional(),
  pinCode: z.string().regex(/^\d{4}$/).optional(),
});

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);
  const id = Number(getRouterParam(event, "id"));
  const data = await readValidatedBody(event, bodySchema.parse);

  const target = await prisma.user.findFirst({ where: { id, companyId: user.companyId } });
  if (!target) throw createError({ statusCode: 404, statusMessage: "Utilisateur introuvable" });

  const { password, pinCode, ...rest } = data;

  return prisma.user.update({
    where: { id },
    data: {
      ...rest,
      password: password ? await hashPassword(password) : undefined,
      pinCode: pinCode ? await hashPassword(pinCode) : undefined,
    },
    select: { id: true, name: true, email: true, role: true, active: true, createdAt: true },
  });
});

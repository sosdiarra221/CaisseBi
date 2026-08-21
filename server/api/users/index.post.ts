import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";

const bodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["OWNER", "MANAGER", "GERANT", "CASHIER"]),
  pinCode: z.string().regex(/^\d{4}$/).optional(),
});

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);
  const data = await readValidatedBody(event, bodySchema.parse);

  const existing = await prisma.user.findUnique({ where: { email: data.email } });
  if (existing) throw createError({ statusCode: 400, statusMessage: "Cet email est déjà utilisé" });

  const hashed = await hashPassword(data.password);

  const created = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashed,
      pinCode: data.pinCode ? await hashPassword(data.pinCode) : undefined,
      role: data.role,
      companyId: user.companyId,
    },
    select: { id: true, name: true, email: true, role: true, active: true, createdAt: true },
  });

  return created;
});

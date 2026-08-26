import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";

const bodySchema = z.object({
  name: z.string().min(1).optional(),
  username: z.string().min(1).optional(),
  role: z.enum(["OWNER", "MANAGER", "GERANT", "CASHIER"]).optional(),
  active: z.boolean().optional(),
  password: z.string().min(6).optional(),
  pinCode: z.string().regex(/^\d{4}$/).optional(),
  storeId: z.number().int().positive().optional().nullable(),
});

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);
  const id = Number(getRouterParam(event, "id"));
  const data = await readValidatedBody(event, bodySchema.parse);

  const target = await prisma.user.findFirst({ where: { id, companyId: user.companyId } });
  if (!target) throw createError({ statusCode: 404, statusMessage: "Utilisateur introuvable" });

  if (data.username) {
    const existingUsername = await prisma.user.findFirst({ where: { username: data.username, NOT: { id } } });
    if (existingUsername) throw createError({ statusCode: 400, statusMessage: "Cet identifiant est déjà utilisé" });
  }

  if (data.storeId) {
    const store = await prisma.store.findFirst({ where: { id: data.storeId, companyId: user.companyId } });
    if (!store) throw createError({ statusCode: 400, statusMessage: "Magasin introuvable" });
  }

  const nextRole = data.role ?? target.role;
  if (nextRole !== "OWNER" && !data.storeId && !target.storeId) {
    throw createError({ statusCode: 400, statusMessage: "Un magasin est requis pour ce rôle" });
  }

  const { password, pinCode, ...rest } = data;

  return prisma.user.update({
    where: { id },
    data: {
      ...rest,
      storeId: nextRole === "OWNER" ? null : (data.storeId ?? undefined),
      password: password ? await hashPassword(password) : undefined,
      pinCode: pinCode ? await hashPassword(pinCode) : undefined,
    },
    select: { id: true, name: true, email: true, username: true, role: true, storeId: true, active: true, createdAt: true },
  });
});

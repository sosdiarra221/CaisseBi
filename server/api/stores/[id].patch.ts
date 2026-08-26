import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";

const bodySchema = z.object({
  name: z.string().min(1).optional(),
  address: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  active: z.boolean().optional(),
});

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);
  const id = Number(getRouterParam(event, "id"));
  const data = await readValidatedBody(event, bodySchema.parse);

  const target = await prisma.store.findFirst({ where: { id, companyId: user.companyId } });
  if (!target) throw createError({ statusCode: 404, statusMessage: "Magasin introuvable" });

  return prisma.store.update({ where: { id }, data });
});

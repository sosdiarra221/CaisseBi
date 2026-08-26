import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";

const bodySchema = z.object({
  name: z.string().min(1),
  address: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
});

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);
  const data = await readValidatedBody(event, bodySchema.parse);

  return prisma.store.create({
    data: { ...data, companyId: user.companyId },
  });
});

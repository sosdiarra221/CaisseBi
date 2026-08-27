import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveWriteStoreId } from "~/server/utils/storeScope";

const bodySchema = z.object({
  name: z.string().min(1),
  parentId: z.number().int().positive().optional().nullable(),
});

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "produits");
  const data = await readValidatedBody(event, bodySchema.parse);

  return prisma.category.create({
    data: { ...data, companyId: user.companyId, storeId: await resolveWriteStoreId(user) },
  });
});

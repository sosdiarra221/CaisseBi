import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveWriteStoreId } from "~/server/utils/storeScope";

const bodySchema = z.object({
  designation: z.string().min(1),
  quantity: z.number().min(0).default(0),
  unit: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "stock");
  const data = await readValidatedBody(event, bodySchema.parse);

  return prisma.article.create({
    data: { ...data, companyId: user.companyId, storeId: resolveWriteStoreId(user) },
  });
});

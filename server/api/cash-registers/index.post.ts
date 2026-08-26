import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";
import { resolveWriteStoreId } from "~/server/utils/storeScope";

const bodySchema = z.object({ name: z.string().min(1) });

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER", "MANAGER", "GERANT"]);
  const data = await readValidatedBody(event, bodySchema.parse);

  return prisma.cashRegister.create({ data: { ...data, companyId: user.companyId, storeId: resolveWriteStoreId(user) } });
});

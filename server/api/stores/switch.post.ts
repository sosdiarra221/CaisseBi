import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";

// storeId: null switches Direction back to the aggregate "all stores" view.
const bodySchema = z.object({
  storeId: z.number().int().positive().nullable(),
});

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);
  const { storeId } = await readValidatedBody(event, bodySchema.parse);

  if (storeId) {
    const store = await prisma.store.findFirst({ where: { id: storeId, companyId: user.companyId, active: true } });
    if (!store) throw createError({ statusCode: 404, statusMessage: "Magasin introuvable" });
  }

  await setUserSession(event, { user: { ...user, activeStoreId: storeId } });

  return { activeStoreId: storeId };
});

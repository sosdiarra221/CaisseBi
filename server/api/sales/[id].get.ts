import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const id = Number(getRouterParam(event, "id"));

  const sale = await prisma.sale.findFirst({
    where: { id, companyId: user.companyId, ...resolveStoreScope(user) },
    include: {
      user: { select: { id: true, name: true } },
      lines: true,
      payments: true,
      company: true,
    },
  });
  if (!sale) throw createError({ statusCode: 404, statusMessage: "Vente introuvable" });
  return sale;
});

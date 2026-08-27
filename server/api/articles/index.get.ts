import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const query = getQuery(event);
  const includeInactive = query.includeInactive === "true";

  return prisma.article.findMany({
    where: {
      companyId: user.companyId,
      ...resolveStoreScope(user),
      active: includeInactive ? undefined : true,
    },
    orderBy: { designation: "asc" },
  });
});

import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { getBusinessDayRange } from "~/server/utils/businessDay";
import { resolveStoreScope } from "~/server/utils/storeScope";

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "rapports");
  const query = getQuery(event);

  let from: Date;
  let to: Date;
  if (query.from || query.to) {
    // Explicit user-picked range: take it literally, don't shift it onto a
    // business-day boundary.
    from = query.from ? new Date(String(query.from)) : new Date(new Date().setHours(0, 0, 0, 0));
    to = query.to ? new Date(String(query.to)) : new Date();
  } else {
    // Default ("today"): use the company's business-day window so a sale
    // made after midnight but before closing still counts toward the day
    // that's still open, not the next calendar day.
    const company = await prisma.company.findUnique({
      where: { id: user.companyId },
      select: { openTime: true, closeTime: true },
    });
    const dateStr = new Date().toISOString().slice(0, 10);
    ({ from, to } = getBusinessDayRange(dateStr, company ?? { openTime: null, closeTime: null }));
  }

  const sessions = await prisma.cashSession.findMany({
    where: {
      cashRegister: { companyId: user.companyId, ...resolveStoreScope(user) },
      openedAt: { gte: from, lte: to },
    },
    include: { cashRegister: true, user: { select: { id: true, name: true } } },
    orderBy: { openedAt: "desc" },
  });

  const totals = sessions.reduce(
    (acc, s) => {
      acc.startingFloat += Number(s.startingFloat);
      acc.theoretical += Number(s.theoreticalAmount ?? 0);
      acc.counted += Number(s.countedAmount ?? 0);
      acc.gap += Number(s.gap ?? 0);
      return acc;
    },
    { startingFloat: 0, theoretical: 0, counted: 0, gap: 0 }
  );

  return { from, to, sessions, totals };
});

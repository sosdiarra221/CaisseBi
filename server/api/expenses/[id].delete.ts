import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { logAudit } from "~/server/utils/audit";

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "depenses");
  const id = Number(getRouterParam(event, "id"));

  const expense = await prisma.expense.findFirst({ where: { id, companyId: user.companyId } });
  if (!expense) throw createError({ statusCode: 404, statusMessage: "Dépense introuvable" });

  await prisma.expense.delete({ where: { id } });

  await logAudit({
    companyId: user.companyId,
    userId: user.id,
    action: "EXPENSE_DELETED",
    entity: "Expense",
    entityId: id,
    oldValue: { amount: Number(expense.amount), category: expense.category, date: expense.date },
  });

  return { ok: true };
});

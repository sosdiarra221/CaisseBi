import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveStoreScope } from "~/server/utils/storeScope";

function firstDayOfMonth(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-01`;
}

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "rapports");
  const query = getQuery(event);

  const fromStr = query.from ? String(query.from) : firstDayOfMonth();
  const toStr = query.to ? String(query.to) : new Date().toISOString().slice(0, 10);
  const from = new Date(`${fromStr}T00:00:00.000`);
  const to = new Date(`${toStr}T23:59:59.999`);

  const storeScope = resolveStoreScope(user);

  const [sales, expenses] = await Promise.all([
    prisma.sale.findMany({
      where: { companyId: user.companyId, ...storeScope, status: "COMPLETED", createdAt: { gte: from, lte: to } },
      select: { id: true, number: true, total: true, createdAt: true },
      orderBy: { createdAt: "asc" },
    }),
    prisma.expense.findMany({
      where: { companyId: user.companyId, ...storeScope, date: { gte: from, lte: to } },
      include: { user: { select: { id: true, name: true } } },
      orderBy: { date: "asc" },
    }),
  ]);

  const revenue = sales.reduce((sum, s) => sum + Number(s.total), 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const byCategory = new Map<string, { category: string; total: number; count: number }>();
  for (const e of expenses) {
    const entry = byCategory.get(e.category) ?? { category: e.category, total: 0, count: 0 };
    entry.total += Number(e.amount);
    entry.count += 1;
    byCategory.set(e.category, entry);
  }
  const expensesByCategory = Array.from(byCategory.values()).sort((a, b) => b.total - a.total);

  return {
    from: fromStr,
    to: toStr,
    revenue,
    salesCount: sales.length,
    totalExpenses,
    expensesCount: expenses.length,
    net: revenue - totalExpenses,
    expensesByCategory,
    expenses: expenses.map((e) => ({
      id: e.id,
      date: e.date.toISOString(),
      amount: Number(e.amount),
      description: e.description,
      category: e.category,
      user: e.user,
    })),
    sales: sales.map((s) => ({
      id: s.id,
      number: s.number,
      total: Number(s.total),
      createdAt: s.createdAt.toISOString(),
    })),
  };
});

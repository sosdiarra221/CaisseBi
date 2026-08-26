import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { logAudit } from "~/server/utils/audit";
import { resolveWriteStoreId } from "~/server/utils/storeScope";

// Categories are a plain string (not a Prisma enum), validated against this
// fixed list on both ends — same approach as StockMovement.reason (see
// pages/(admin)/stock/mouvement.vue's REASONS and
// server/api/stock/movements.post.ts).
export const EXPENSE_CATEGORIES = [
  "Achats",
  "Salaires",
  "Loyer",
  "Transport",
  "Fournitures",
  "Électricité/Eau",
  "Maintenance",
  "Autre",
] as const;

const bodySchema = z.object({
  date: z.string().min(1),
  amount: z.number().positive(),
  description: z.string().trim().optional().nullable(),
  category: z.enum(EXPENSE_CATEGORIES),
});

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "depenses");
  const data = await readValidatedBody(event, bodySchema.parse);

  const expense = await prisma.expense.create({
    data: {
      companyId: user.companyId,
      storeId: resolveWriteStoreId(user),
      date: new Date(`${data.date}T00:00:00.000`),
      amount: data.amount,
      description: data.description || "",
      category: data.category,
      userId: user.id,
    },
    include: { user: { select: { id: true, name: true } } },
  });

  await logAudit({
    companyId: user.companyId,
    userId: user.id,
    action: "EXPENSE_CREATED",
    entity: "Expense",
    entityId: expense.id,
    newValue: { amount: data.amount, category: data.category, date: data.date },
  });

  return expense;
});

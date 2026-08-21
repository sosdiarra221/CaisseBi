import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";
import { logAudit } from "~/server/utils/audit";

const bodySchema = z.object({
  cashSessionId: z.number().int().positive(),
  countedAmount: z.number().min(0),
  cashIn: z.number().min(0).default(0),
  cashOut: z.number().min(0).default(0),
});

export default defineEventHandler(async (event) => {
  // Closing a register is Owner/Manager-only — a Cashier can open their own
  // drawer but must not be able to close it out (the UI hides this option
  // for them; this is the enforcement that actually matters).
  const user = await requireRole(event, ["OWNER", "MANAGER"]);
  const data = await readValidatedBody(event, bodySchema.parse);

  const session = await prisma.cashSession.findFirst({
    where: { id: data.cashSessionId, status: "OPEN", cashRegister: { companyId: user.companyId } },
  });
  if (!session) throw createError({ statusCode: 404, statusMessage: "Session introuvable ou déjà fermée" });

  const canClose = user.role === "OWNER" || user.role === "MANAGER" || user.role === "GERANT" || session.userId === user.id;
  if (!canClose) {
    throw createError({ statusCode: 403, statusMessage: "Vous ne pouvez pas fermer cette caisse" });
  }

  const cashPayments = await prisma.payment.aggregate({
    where: { method: "CASH", sale: { cashSessionId: session.id, status: "COMPLETED" } },
    _sum: { amount: true },
  });
  const cashSales = Number(cashPayments._sum.amount ?? 0);

  const theoreticalAmount =
    Number(session.startingFloat) + cashSales + data.cashIn - data.cashOut;
  const gap = data.countedAmount - theoreticalAmount;

  const updated = await prisma.cashSession.update({
    where: { id: session.id },
    data: {
      status: "CLOSED",
      closedAt: new Date(),
      countedAmount: data.countedAmount,
      theoreticalAmount,
      gap,
      cashIn: data.cashIn,
      cashOut: data.cashOut,
    },
  });

  await logAudit({
    companyId: user.companyId,
    userId: user.id,
    action: "CASH_SESSION_CLOSED",
    entity: "CashSession",
    entityId: session.id,
    newValue: { theoreticalAmount, countedAmount: data.countedAmount, gap },
  });

  return updated;
});

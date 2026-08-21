import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireRole } from "~/server/utils/authz";
import { logAudit } from "~/server/utils/audit";

const bodySchema = z.object({
  name: z.string().min(1).optional(),
  commercialName: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  email: z.preprocess(
    (v) => (v === "" ? null : v),
    z.string().email().optional().nullable()
  ),
  website: z.string().optional().nullable(),
  taxId: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  currency: z.string().min(1).optional(),
  receiptFormat: z.enum(["58mm", "80mm", "A5"]).optional(),
  receiptHeader: z.string().optional().nullable(),
  receiptFooter: z.string().optional().nullable(),
  openTime: z.preprocess(
    (v) => (v === "" ? null : v),
    z.string().optional().nullable()
  ),
  closeTime: z.preprocess(
    (v) => (v === "" ? null : v),
    z.string().optional().nullable()
  ),
});

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ["OWNER"]);
  const data = await readValidatedBody(event, bodySchema.parse);

  const before = await prisma.company.findUniqueOrThrow({ where: { id: user.companyId } });
  const company = await prisma.company.update({ where: { id: user.companyId }, data });

  await logAudit({
    companyId: user.companyId,
    userId: user.id,
    action: "UPDATE",
    entity: "Company",
    entityId: user.companyId,
    oldValue: before,
    newValue: company,
  });

  return company;
});

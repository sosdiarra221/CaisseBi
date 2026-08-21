import { prisma } from "./prisma";

export async function logAudit(params: {
  companyId: number;
  userId?: number;
  action: string;
  entity: string;
  entityId?: number;
  oldValue?: unknown;
  newValue?: unknown;
}) {
  await prisma.auditLog.create({
    data: {
      companyId: params.companyId,
      userId: params.userId,
      action: params.action,
      entity: params.entity,
      entityId: params.entityId,
      oldValue: params.oldValue === undefined ? undefined : (params.oldValue as any),
      newValue: params.newValue === undefined ? undefined : (params.newValue as any),
    },
  });
}

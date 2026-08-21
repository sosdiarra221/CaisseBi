import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { getActiveLicense } from "~/server/utils/license";

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);

  const active = await getActiveLicense(user.companyId);

  // If the caller is the OWNER and there's a key that's been generated but
  // never activated, surface it so the modal can offer to activate it
  // without the OWNER having to remember/re-copy it after a page refresh.
  let generatedUnactivatedKey: string | undefined;
  if (user.role === "OWNER") {
    const pending = await prisma.license.findFirst({
      where: { companyId: user.companyId, activatedAt: null },
      orderBy: { createdAt: "desc" },
      select: { key: true },
    });
    generatedUnactivatedKey = pending?.key;
  }

  return {
    active: !!active,
    expiresAt: active?.expiresAt ?? null,
    daysRemaining: active?.daysRemaining ?? null,
    generatedUnactivatedKey,
  };
});

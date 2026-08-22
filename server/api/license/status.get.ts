import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";
import { getActiveLicense } from "~/server/utils/license";
import { getOwnerUserIds, sendPushToUsers } from "~/server/utils/push";

// A license nearing expiry should nudge the OWNER once, not on every single
// status poll while it sits in this window — see the expiryNotifiedAt guard
// below.
const EXPIRY_WARNING_DAYS = 7;

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);

  const active = await getActiveLicense(user.companyId);

  if (active && active.daysRemaining <= EXPIRY_WARNING_DAYS) {
    const license = await prisma.license.findUnique({ where: { id: active.id } });
    if (license && !license.expiryNotifiedAt) {
      await sendPushToUsers(await getOwnerUserIds(user.companyId), {
        title: "Licence bientôt expirée",
        body:
          active.daysRemaining === 0
            ? "Votre licence expire aujourd'hui."
            : `Votre licence expire dans ${active.daysRemaining} jour${active.daysRemaining > 1 ? "s" : ""}.`,
        url: "/parametres",
      });
      await prisma.license.update({ where: { id: active.id }, data: { expiryNotifiedAt: new Date() } });
    }
  }

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

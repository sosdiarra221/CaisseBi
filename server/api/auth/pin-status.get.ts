import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";

// Reveals only whether the session user has a PIN configured — never the
// hash or any other detail — so page-pin-lock.vue can decide whether to show
// the keypad or route straight to the password fallback.
export default defineEventHandler(async (event) => {
  const sessionUser = await requireUser(event);
  const user = await prisma.user.findUnique({
    where: { id: sessionUser.id },
    select: { pinCode: true },
  });

  return { hasPin: !!user?.pinCode };
});

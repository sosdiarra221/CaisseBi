import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";

const bodySchema = z.object({
  locale: z.enum(["fr", "ar"]),
});

// Per-account language preference (not company-wide) — updates both the DB
// row (so it's remembered on the next login, any device) and the current
// session (so the switch takes effect immediately without a re-login).
export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const { locale } = await readValidatedBody(event, bodySchema.parse);

  await prisma.user.update({ where: { id: user.id }, data: { locale } });
  await setUserSession(event, { user: { ...user, locale } });

  return { locale };
});

import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireUser } from "~/server/utils/authz";

const bodySchema = z.object({
  token: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  const user = await requireUser(event);
  const { token } = await readValidatedBody(event, bodySchema.parse);

  // Re-assign rather than reject on conflict: the same browser/device token
  // can legitimately move to a different user if someone logs out and a
  // colleague logs in on the same shared till.
  await prisma.pushSubscription.upsert({
    where: { token },
    update: { userId: user.id },
    create: { userId: user.id, token },
  });

  return { ok: true };
});

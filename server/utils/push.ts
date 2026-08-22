import { prisma } from "./prisma";
import { getFirebaseMessaging } from "./firebase-admin";

interface PushPayload {
  title: string;
  body: string;
  url?: string;
}

// Token error codes FCM returns for a registration that will never work
// again (uninstalled app, revoked permission, expired) — anything else
// (rate limits, transient network errors) is left alone and retried on the
// next event instead of being treated as permanently dead.
const DEAD_TOKEN_CODES = new Set([
  "messaging/registration-token-not-registered",
  "messaging/invalid-registration-token",
  "messaging/invalid-argument",
]);

/**
 * Best-effort push to every device a set of users has registered. Never
 * throws — a notification failure must not take down the sale/stock/session
 * action that triggered it. Silently no-ops if Firebase isn't configured
 * (e.g. a dev environment without FIREBASE_SERVICE_ACCOUNT_BASE64 set).
 */
export async function sendPushToUsers(userIds: number[], payload: PushPayload): Promise<void> {
  if (!userIds.length || !process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) return;

  const subscriptions = await prisma.pushSubscription.findMany({
    where: { userId: { in: userIds } },
  });
  if (!subscriptions.length) return;

  try {
    const messaging = getFirebaseMessaging();
    const response = await messaging.sendEachForMulticast({
      tokens: subscriptions.map((s) => s.token),
      notification: { title: payload.title, body: payload.body },
      data: payload.url ? { url: payload.url } : undefined,
      webpush: { fcmOptions: payload.url ? { link: payload.url } : undefined },
    });

    const deadTokens = response.responses
      .map((r, i) => (!r.success && DEAD_TOKEN_CODES.has(r.error?.code ?? "") ? subscriptions[i].token : null))
      .filter((t): t is string => t !== null);

    if (deadTokens.length) {
      await prisma.pushSubscription.deleteMany({ where: { token: { in: deadTokens } } });
    }
  } catch (e) {
    console.error("[push] sendPushToUsers failed:", e);
  }
}

/** Users whose role should hear about supervisory events (stock, cash gaps, sales). */
export async function getSupervisorUserIds(companyId: number): Promise<number[]> {
  const users = await prisma.user.findMany({
    where: { companyId, active: true, role: { in: ["OWNER", "MANAGER", "GERANT"] } },
    select: { id: true },
  });
  return users.map((u) => u.id);
}

/** Just the OWNER(s) — for license management, which only OWNER can act on. */
export async function getOwnerUserIds(companyId: number): Promise<number[]> {
  const users = await prisma.user.findMany({
    where: { companyId, active: true, role: "OWNER" },
    select: { id: true },
  });
  return users.map((u) => u.id);
}

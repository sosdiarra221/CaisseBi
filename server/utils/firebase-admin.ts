import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";

let initialized = false;

// Lazy singleton: only pays the cost of parsing the service account and
// spinning up the admin SDK the first time a notification actually needs to
// be sent, not on every server boot.
function ensureAdminApp() {
  if (initialized || getApps().length) {
    initialized = true;
    return;
  }

  const base64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
  if (!base64) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_BASE64 is not set — push notifications are disabled.");
  }

  const serviceAccount = JSON.parse(Buffer.from(base64, "base64").toString("utf-8"));
  initializeApp({ credential: cert(serviceAccount) });
  initialized = true;
}

export function getFirebaseMessaging() {
  ensureAdminApp();
  return getMessaging();
}

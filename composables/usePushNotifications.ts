import type { Messaging } from "firebase/messaging";

// Shared across every usePushNotifications() call site so the toast/badge/
// settings-toggle UI all reflect the same underlying permission state.
const permission = ref<NotificationPermission>("default");
const loading = ref(false);
const error = ref("");
let messagingInstance: Messaging | null = null;

function isSupported(): boolean {
  return (
    import.meta.client &&
    "serviceWorker" in navigator &&
    "PushManager" in window &&
    "Notification" in window
  );
}

/**
 * Registers the FCM service worker (scoped to /fcm/ — see that file's own
 * comment for why it lives there instead of at the root the SDK would pick
 * by default) and returns an initialized Messaging instance, creating it
 * once and reusing it for the rest of the session.
 */
async function ensureMessaging(): Promise<Messaging> {
  if (messagingInstance) return messagingInstance;
  const { initializeApp, getApps } = await import("firebase/app");
  const { getMessaging, onMessage } = await import("firebase/messaging");
  const { FIREBASE_CONFIG } = await import("~/lib/firebase-client");

  const app = getApps()[0] ?? initializeApp(FIREBASE_CONFIG);
  messagingInstance = getMessaging(app);

  const toast = useToast();
  onMessage(messagingInstance, (payload) => {
    const title = payload.notification?.title ?? "CaisseBi";
    const body = payload.notification?.body ?? "";
    toast.info(body ? `${title} — ${body}` : title);
  });

  return messagingInstance;
}

async function registerToken(): Promise<string | null> {
  const { getToken } = await import("firebase/messaging");
  const messaging = await ensureMessaging();
  const config = useRuntimeConfig();

  const swReg = await navigator.serviceWorker.register("/fcm/firebase-messaging-sw.js", {
    scope: "/fcm/",
  });

  const token = await getToken(messaging, {
    vapidKey: config.public.firebaseVapidKey,
    serviceWorkerRegistration: swReg,
  });
  if (!token) return null;

  await $fetch("/api/push/subscribe", { method: "POST", body: { token } });
  return token;
}

export function usePushNotifications() {
  if (import.meta.client && "Notification" in window && permission.value === "default") {
    permission.value = Notification.permission;
  }

  /** Explicit opt-in: prompts for permission, then registers a token. */
  async function subscribe(): Promise<boolean> {
    if (!isSupported()) {
      error.value = "Les notifications ne sont pas supportées sur cet appareil/navigateur.";
      return false;
    }
    loading.value = true;
    error.value = "";
    try {
      const perm = await Notification.requestPermission();
      permission.value = perm;
      if (perm !== "granted") return false;

      const token = await registerToken();
      if (!token) {
        error.value = "Impossible d'activer les notifications (jeton non obtenu).";
        return false;
      }
      return true;
    } catch (e: any) {
      error.value = e?.message || "Erreur lors de l'activation des notifications.";
      return false;
    } finally {
      loading.value = false;
    }
  }

  /**
   * Silent re-registration for a returning user who already granted
   * permission in a previous session — no prompt, just refreshes the token
   * (Firebase returns the same one if it hasn't changed) and wires up
   * foreground message handling again for this tab.
   */
  async function resumeIfGranted() {
    if (!isSupported() || Notification.permission !== "granted") return;
    permission.value = "granted";
    try {
      await registerToken();
    } catch {
      // Best-effort — a stale/broken token here shouldn't block the app.
    }
  }

  return { permission, loading, error, isSupported: isSupported(), subscribe, resumeIfGranted };
}

// Deliberately served from /fcm/ (not project root): its default scope
// becomes /fcm/, so it never competes with the PWA's own Workbox service
// worker for root-scope fetch handling — see composables/usePushNotifications.ts,
// which registers this explicitly and hands the registration to getToken()
// instead of letting the Firebase SDK auto-register at "/".
importScripts("https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCK-u4S4P10ohTqqILtUh6BFyTWsvwh1pE",
  authDomain: "caissebi.firebaseapp.com",
  projectId: "caissebi",
  storageBucket: "caissebi.firebasestorage.app",
  messagingSenderId: "174331938726",
  appId: "1:174331938726:web:5376d5e9e6e75adc5a3167",
});

const messaging = firebase.messaging();

// Fires when a push arrives while no CaisseBi tab has focus — foreground
// messages are handled instead by onMessage() in usePushNotifications.ts.
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "CaisseBi";
  self.registration.showNotification(title, {
    body: payload.notification?.body,
    icon: "/pwa-192x192.png",
    badge: "/pwa-192x192.png",
    data: payload.data,
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";
  event.waitUntil(self.clients.openWindow(url));
});

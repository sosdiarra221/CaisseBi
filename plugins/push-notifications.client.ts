// Re-arms push notifications for a returning, already-logged-in user who
// granted permission in an earlier session — no prompt, just a silent token
// refresh so foreground messages (onMessage in usePushNotifications.ts) work
// again in this tab. First-time opt-in happens explicitly from Paramètres.
export default defineNuxtPlugin(() => {
  const { loggedIn } = useUserSession();
  if (!loggedIn.value) return;
  const { resumeIfGranted } = usePushNotifications();
  resumeIfGranted();
});

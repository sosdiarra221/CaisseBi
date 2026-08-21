// App-wide idle-timeout auto-lock. Registered once as a client plugin so it
// covers every layout (home, pos, nosidebar, utility...) without having to
// be wired into each one separately — a POS cashier idling on /pos and an
// admin idling on /rapports get exactly the same protection.
import { OPEN_PATHS, PUBLIC_PATHS } from "~/middleware/auth.global";

const IDLE_MS = 15 * 60 * 1000; // 15 minutes
const ACTIVITY_EVENTS = ["mousemove", "mousedown", "click", "keydown", "touchstart", "scroll"] as const;
// Activity events (mousemove especially) can fire dozens of times a second —
// only actually reset the underlying timeout at most once per second so we
// don't churn setTimeout/clearTimeout on every pixel of mouse movement.
const RESET_THROTTLE_MS = 1000;

function isExemptPath(path: string) {
  return OPEN_PATHS.includes(path) || PUBLIC_PATHS.includes(path);
}

export default defineNuxtPlugin(() => {
  const { loggedIn } = useUserSession();
  const router = useRouter();

  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastReset = 0;

  function fire() {
    timer = null;
    if (!loggedIn.value) return;

    const route = router.currentRoute.value;
    if (isExemptPath(route.path)) return;

    navigateTo(`/page-pin-lock?redirect=${encodeURIComponent(route.fullPath)}`);
  }

  function reset() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fire, IDLE_MS);
  }

  function onActivity() {
    const now = Date.now();
    if (now - lastReset < RESET_THROTTLE_MS) return;
    lastReset = now;
    reset();
  }

  ACTIVITY_EVENTS.forEach((evt) => window.addEventListener(evt, onActivity, { passive: true }));

  // Navigating counts as activity too — this is what makes the timer reset
  // cleanly right after a successful PIN/password unlock (the unlock flow
  // navigates back to the original page) instead of the freshly-unlocked
  // session immediately racing towards the same 15-minute deadline it had
  // when it got locked.
  router.afterEach(() => reset());

  reset();
});

import { GATEABLE_MODULES, MODULE_ROUTE_PREFIXES, type GateableModule } from "~/lib/permissionModules";

// Exported so other places that need "is this an auth-adjacent page the user
// can already reach" (e.g. plugins/idle-lock.client.ts, which must not
// redirect somewhere the user is already allowed to be) can reuse the exact
// same lists instead of maintaining a second copy that could drift.
export const PUBLIC_PATHS = ["/login", "/page-register", "/page-forgot-password"];

// Reachable whether logged in or not, and never redirected either way.
// - page-reset-password: a logged-in user opening a reset link should still be able to use it.
// - page-lock-screen / page-pin-lock: the whole point is re-authenticating an
//   already-logged-in user without bouncing them to the role home page first.
// - page-license-required: the page a blocked non-OWNER user gets redirected to below —
//   it must not itself redirect-loop back through this middleware.
export const OPEN_PATHS = ["/page-reset-password", "/page-lock-screen", "/page-pin-lock", "/page-license-required"];

// /documentation is plain help content (no company data), so it's granted
// here the same way /pos and /caisse are, instead of going through the
// GATEABLE_MODULES machinery below — a CASHIER must never be bounced back to
// /pos after clicking Support from the sidebar.
const CASHIER_ALLOWED_PREFIXES = ["/pos", "/caisse", "/documentation"];

// Which gateable module (if any) a given path falls under, so a CASHIER who
// was explicitly granted that module (see pages/(admin)/utilisateurs/roles.vue)
// can actually reach the page — otherwise they'd hit the fixed prefix list
// above and always bounce back to /pos regardless of what the OWNER granted.
function gateableModuleForPath(path: string): GateableModule | null {
  for (const moduleName of GATEABLE_MODULES) {
    if (MODULE_ROUTE_PREFIXES[moduleName].some((prefix) => path.startsWith(prefix))) {
      return moduleName;
    }
  }
  return null;
}

export default defineNuxtRouteMiddleware(async (to) => {
  const { loggedIn, user } = useUserSession();

  if (OPEN_PATHS.includes(to.path)) {
    return;
  }

  if (PUBLIC_PATHS.includes(to.path)) {
    if (loggedIn.value) {
      return navigateTo(user.value?.role === "CASHIER" ? "/pos" : "/");
    }
    return;
  }

  if (!loggedIn.value) {
    return navigateTo("/login");
  }

  // The OWNER always retains full navigation (they're the only one who can
  // generate/activate a license, so they must never get locked out of the
  // menu that leads to that modal). Everyone else is blocked site-wide the
  // moment there's no active license.
  if (user.value && user.value.role !== "OWNER") {
    const { data: license } = await useLicenseStatus();
    if (!license.value?.active) {
      return navigateTo("/page-license-required");
    }
  }

  if (
    user.value?.role === "CASHIER" &&
    !CASHIER_ALLOWED_PREFIXES.some((prefix) => to.path.startsWith(prefix))
  ) {
    const gateableModule = gateableModuleForPath(to.path);
    if (gateableModule) {
      const { data: access } = await useMyModuleAccess();
      if (access.value?.modules.includes(gateableModule)) {
        return;
      }
    }
    return navigateTo("/pos");
  }
});

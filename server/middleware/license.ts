import { getActiveLicense } from "~/server/utils/license";

// Runs on every request (Nitro convention for server/middleware/*.ts).
// There is no separate "session-attaching" middleware in this project —
// nuxt-auth-utils resolves the sealed session cookie lazily via
// getUserSession(event) itself, so it's safe to call directly here without
// depending on execution order relative to another file.
export default defineEventHandler(async (event) => {
  const path = event.path || event.node.req.url || "";

  // Only API routes are gated here. Page-level blocking (redirecting a
  // logged-in non-OWNER with no active license to the blocked page) is
  // handled by middleware/auth.global.ts on the client/SSR routing side.
  if (!path.startsWith("/api")) return;

  // Auth endpoints (login/logout/password reset/unlock) must always work —
  // otherwise a locked-out company could never log in to fix anything.
  if (path.startsWith("/api/auth")) return;

  // nuxt-auth-utils' own internal session endpoint (GET/DELETE /api/_auth/session)
  // is what useUserSession() calls client-side to know who's logged in. Blocking
  // it here made loggedIn.value come back false for a blocked non-OWNER, which
  // made middleware/auth.global.ts treat them as logged out and send them to
  // /login instead of /page-license-required. Must stay reachable.
  if (path.startsWith("/api/_auth")) return;

  // The license endpoints themselves must always be reachable, both to
  // check status and (for the OWNER) to generate/activate a new key.
  if (path.startsWith("/api/license")) return;

  const session = await getUserSession(event);
  const user = session.user;
  if (!user) return; // No session: let the route's own auth check (requireUser/requireRole) handle it.

  // The OWNER always retains full access so they can log in and fix the
  // license themselves, no matter what.
  if (user.role === "OWNER") return;

  const active = await getActiveLicense(user.companyId);
  if (!active) {
    throw createError({
      statusCode: 403,
      statusMessage: "LICENSE_REQUIRED",
    });
  }
});

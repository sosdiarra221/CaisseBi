// Prevents the browser (and any proxy) from caching page responses. Without
// this, pressing "back" right after Déconnexion can show a stale, fully
// rendered snapshot of a protected page straight from the browser's
// back-forward cache — no new navigation event fires, so
// middleware/auth.global.ts's logged-out check never even runs. API
// responses are already inherently uncached by the browser for fetch()
// calls with credentials, so this only needs to cover document (page)
// requests.
export default defineEventHandler((event) => {
  const path = event.path || event.node.req.url || "";
  if (path.startsWith("/api") || path.startsWith("/_nuxt") || path.startsWith("/__nuxt")) return;

  setResponseHeader(event, "Cache-Control", "no-store, no-cache, must-revalidate");
});

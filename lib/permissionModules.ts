// Shared between server (server/utils/permissions.ts, server/api/role-permissions/*)
// and client (middleware/auth.global.ts) — kept here, not in server/utils,
// because server/utils/permissions.ts pulls in `prisma` (Node-only driver),
// which must never end up in the client bundle.
export const GATEABLE_MODULES = ["produits", "stock", "ventes", "rapports", "depenses"] as const;
export type GateableModule = (typeof GATEABLE_MODULES)[number];

// Path prefixes that require a given module's access when the current
// user's role is CASHIER (see middleware/auth.global.ts). MANAGER isn't
// restricted at the route level — a MANAGER can always navigate anywhere;
// module gating for MANAGER lives purely at the API layer
// (requireModuleAccess in each server/api/* route), same as before this
// feature existed. CASHIER previously could only ever reach /pos and /caisse
// (see CASHIER_ALLOWED_PREFIXES); this map is what lets an OWNER-granted
// module actually become reachable for a CASHIER instead of just unlocking
// the API while the page itself stays unreachable.
export const MODULE_ROUTE_PREFIXES: Record<GateableModule, string[]> = {
  produits: ["/produits", "/categories"],
  stock: ["/stock", "/articles"],
  ventes: ["/ventes"],
  rapports: ["/rapports", "/comptabilite"],
  depenses: ["/depenses"],
};

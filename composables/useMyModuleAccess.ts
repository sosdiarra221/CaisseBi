// Shared "my-module-access" useFetch key, same pattern as useLicenseStatus:
// one call from middleware/auth.global.ts populates it, and it stays fresh
// (per-navigation, since middleware re-runs on every route change) without
// a manual event bus.
export function useMyModuleAccess() {
  return useFetch<{ modules: string[] }>("/api/role-permissions/mine", { key: "my-module-access" });
}

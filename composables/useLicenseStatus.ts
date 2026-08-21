export type LicenseStatus = {
  active: boolean;
  expiresAt: string | null;
  daysRemaining: number | null;
  generatedUnactivatedKey?: string;
};

// Shared across every caller via the "license-status" useFetch key: calling
// refresh() from one place (e.g. the modal after activating a key) updates
// the reactive data everywhere else it's used (dashboard card, global route
// guard) without a manual event bus.
export function useLicenseStatus() {
  return useFetch<LicenseStatus>("/api/license/status", { key: "license-status" });
}

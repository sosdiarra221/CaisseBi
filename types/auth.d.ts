declare module "#auth-utils" {
  interface User {
    id: number;
    name: string;
    email: string;
    role: "OWNER" | "MANAGER" | "GERANT" | "CASHIER";
    companyId: number;
    // The store this account is permanently assigned to. Null only for
    // OWNER (Direction), who isn't tied to one.
    storeId: number | null;
    // OWNER-only: which store's interface Direction is currently viewing
    // (see server/api/stores/switch.post.ts). Null/undefined = the
    // aggregate "all stores" view.
    activeStoreId?: number | null;
  }
}

export {};

import type { User } from "#auth-utils";

/**
 * Read-side store filter. OWNER (Direction) has no fixed store — they see
 * whichever store they've switched to (`user.activeStoreId`), or every
 * store in the company when none is selected (aggregate view, so the
 * filter is simply omitted). Every other role is always locked to their
 * own assigned store, regardless of anything the client sends — the
 * request body/query is never trusted for this.
 */
export function resolveStoreScope(user: User): { storeId?: number } {
  if (user.role === "OWNER") {
    return user.activeStoreId ? { storeId: user.activeStoreId } : {};
  }
  if (!user.storeId) {
    throw createError({ statusCode: 403, statusMessage: "Aucun magasin assigné à ce compte" });
  }
  return { storeId: user.storeId };
}

/**
 * Write-side store id — every row that carries a storeId (Product,
 * Category, CashRegister, Sale, Expense, InventorySession) needs exactly
 * one on create. OWNER must have an active store selected to create
 * anything (there's no such thing as a product belonging to "all
 * stores"); every other role always writes into their own store.
 */
export function resolveWriteStoreId(user: User): number {
  if (user.role === "OWNER") {
    if (!user.activeStoreId) {
      throw createError({ statusCode: 400, statusMessage: "Sélectionnez d'abord un magasin" });
    }
    return user.activeStoreId;
  }
  if (!user.storeId) {
    throw createError({ statusCode: 403, statusMessage: "Aucun magasin assigné à ce compte" });
  }
  return user.storeId;
}

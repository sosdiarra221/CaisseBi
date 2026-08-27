import type { User } from "#auth-utils";
import { prisma } from "./prisma";

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
 * Category, CashRegister, Sale, Expense, InventorySession, Article) needs
 * exactly one on create. OWNER must have an active store selected to
 * create anything (there's no such thing as a product belonging to "all
 * stores") — *except* when the company only has one store, in which case
 * there's nothing to actually choose (the switcher itself only renders
 * once a company has more than one store, so requiring an explicit pick
 * here would leave a single-store Direction account with no way to ever
 * create anything). Every other role always writes into their own store.
 */
export async function resolveWriteStoreId(user: User): Promise<number> {
  if (user.role === "OWNER") {
    if (user.activeStoreId) return user.activeStoreId;

    const stores = await prisma.store.findMany({ where: { companyId: user.companyId, active: true }, select: { id: true } });
    if (stores.length === 1) return stores[0].id;
    if (stores.length === 0) throw createError({ statusCode: 400, statusMessage: "Aucun magasin actif pour cette entreprise" });
    throw createError({ statusCode: 400, statusMessage: "Sélectionnez d'abord un magasin" });
  }
  if (!user.storeId) {
    throw createError({ statusCode: 403, statusMessage: "Aucun magasin assigné à ce compte" });
  }
  return user.storeId;
}

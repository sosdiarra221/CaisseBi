export interface CartLine {
  productId: number;
  label: string;
  unitPrice: number;
  quantity: number;
  discount: number;
  /** Manual per-unit price override set from the cart (OWNER/MANAGER/GERANT only). */
  priceOverride?: number;
  stockable: boolean;
  stock: number;
}

export function useCart() {
  const lines = useState<CartLine[]>("pos-cart-lines", () => []);

  function addProduct(product: {
    id: number;
    label: string;
    salePrice: number | string;
    stockable: boolean;
    quantity: number;
  }) {
    const existing = lines.value.find((l) => l.productId === product.id);
    if (existing) {
      existing.quantity += 1;
      if (existing.priceOverride !== undefined) {
        existing.discount = (existing.unitPrice - existing.priceOverride) * existing.quantity;
      }
      return;
    }
    lines.value.push({
      productId: product.id,
      label: product.label,
      unitPrice: Number(product.salePrice),
      quantity: 1,
      discount: 0,
      stockable: product.stockable,
      stock: product.quantity,
    });
  }

  function setQuantity(productId: number, quantity: number) {
    const line = lines.value.find((l) => l.productId === productId);
    if (!line) return;
    if (quantity <= 0) {
      removeLine(productId);
      return;
    }
    line.quantity = quantity;
    // Keep a manually-set unit price stable across quantity changes instead
    // of leaving the old, now-stale total discount in place.
    if (line.priceOverride !== undefined) {
      line.discount = (line.unitPrice - line.priceOverride) * line.quantity;
    }
  }

  function removeLine(productId: number) {
    lines.value = lines.value.filter((l) => l.productId !== productId);
  }

  function setDiscount(productId: number, discount: number) {
    const line = lines.value.find((l) => l.productId === productId);
    if (!line) return;
    line.discount = discount;
    line.priceOverride = undefined;
  }

  /**
   * Overrides the effective per-unit price of a line (OWNER/MANAGER only).
   * The catalog `unitPrice` stays untouched — it's what the server
   * re-validates the sale against — while `discount` carries the override
   * as a line-level adjustment derived from it, kept in sync as quantity
   * changes via `priceOverride`.
   */
  function setUnitPrice(productId: number, newUnitPrice: number) {
    const line = lines.value.find((l) => l.productId === productId);
    if (!line) return;
    line.priceOverride = newUnitPrice;
    line.discount = (line.unitPrice - newUnitPrice) * line.quantity;
  }

  function effectivePrice(line: CartLine): number {
    return line.unitPrice - line.discount / line.quantity;
  }

  function clear() {
    lines.value = [];
  }

  const itemCount = computed(() => lines.value.reduce((sum, l) => sum + l.quantity, 0));
  const total = computed(() =>
    lines.value.reduce((sum, l) => sum + l.unitPrice * l.quantity - l.discount, 0)
  );

  return {
    lines,
    addProduct,
    setQuantity,
    removeLine,
    setDiscount,
    setUnitPrice,
    effectivePrice,
    clear,
    itemCount,
    total,
  };
}

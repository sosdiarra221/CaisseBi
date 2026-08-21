const CATEGORY_ICONS: { match: RegExp; icon: string }[] = [
  { match: /boisson|drink|eau|jus|soda|caf[ée]/i, icon: "🥤" },
  { match: /plat|repas|food|cuisine|restaurant/i, icon: "🍽️" },
  { match: /dessert|glace|g[âa]teau|sucrerie/i, icon: "🍨" },
  { match: /alimentation|riz|epicerie|épicerie|farine/i, icon: "🛒" },
  { match: /hygi[èe]ne|savon|shampoo|shampooing|dentifrice|toilette/i, icon: "🧴" },
  { match: /service|livraison|autre/i, icon: "🚚" },
];

export function categoryIcon(categoryName?: string | null): string {
  if (categoryName) {
    const found = CATEGORY_ICONS.find((c) => c.match.test(categoryName));
    if (found) return found.icon;
  }
  return "📦";
}

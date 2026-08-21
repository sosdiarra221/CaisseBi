const PALETTE = [
  "#FFE0E0",
  "#FFE8CC",
  "#FFF3BF",
  "#D3F9D8",
  "#C5F6FA",
  "#D0EBFF",
  "#E5DBFF",
  "#FFDEEB",
  "#E7F5FF",
  "#F3F0FF",
];
const TEXT_COLORS = [
  "#C92A2A",
  "#D9480F",
  "#E67700",
  "#2B8A3E",
  "#0C8599",
  "#1864AB",
  "#5F3DC4",
  "#A61E4D",
  "#1971C2",
  "#5F3DC4",
];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function initials(label: string): string {
  const words = label.trim().split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/** Deterministic, auto-generated placeholder "photo" for a product: colored square with initials. */
export function productAvatar(label: string): string {
  const hash = hashString(label || "?");
  const bg = PALETTE[hash % PALETTE.length];
  const fg = TEXT_COLORS[hash % TEXT_COLORS.length];
  const text = initials(label || "?");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="200" height="200" rx="28" fill="${bg}" />
    <text x="100" y="112" font-family="Poppins, Arial, sans-serif" font-size="72" font-weight="700" fill="${fg}" text-anchor="middle">${text}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

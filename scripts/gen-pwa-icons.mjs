import sharp from "sharp";
import { mkdirSync } from "node:fs";
import path from "node:path";

const NAVY = "#182B6B";
const GOLD = "#F5A524";

const outDir = path.resolve(process.cwd(), "public");
mkdirSync(outDir, { recursive: true });

// Standard icon: rounded-square navy badge with a bold gold "CB" monogram,
// matching the collapsed sidebar rail treatment in components/Sidebar.vue.
function standardSvg(size) {
  const r = size * 0.22; // rounded-square corner radius, same proportion as the sidebar's rounded-xl badge
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="${NAVY}"/>
  <text x="50%" y="52%" text-anchor="middle" dominant-baseline="central"
    font-family="'Segoe UI', Arial, sans-serif" font-weight="800" font-size="${size * 0.46}"
    fill="${GOLD}" letter-spacing="-1">CB</text>
</svg>`;
}

// Maskable icon: full-bleed navy square (OS applies its own mask/shape), with
// the CB monogram sized well inside the ~80%-diameter safe-zone circle so it
// survives circular/rounded-square cropping on Android adaptive icons.
function maskableSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${NAVY}"/>
  <text x="50%" y="52%" text-anchor="middle" dominant-baseline="central"
    font-family="'Segoe UI', Arial, sans-serif" font-weight="800" font-size="${size * 0.32}"
    fill="${GOLD}" letter-spacing="-1">CB</text>
</svg>`;
}

async function render(svg, size, outFile) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(path.join(outDir, outFile));
  console.log("wrote", outFile);
}

await render(standardSvg(192), 192, "pwa-192x192.png");
await render(standardSvg(512), 512, "pwa-512x512.png");
await render(maskableSvg(512), 512, "pwa-maskable-512x512.png");
// apple-touch-icon: iOS ignores alpha/rounding and applies its own corner
// mask, so a plain square (no transparent corners) at the standard 180x180
// size is the safe choice.
await render(standardSvg(180), 180, "apple-touch-icon.png");

console.log("done");

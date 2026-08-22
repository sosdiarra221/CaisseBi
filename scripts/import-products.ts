// One-off import: reads a Loyverse-style "export_items.csv" (Handle, SKU, Name,
// Category, Cost, Price [xxx], Track stock, ...) and creates matching
// Category + Product rows for the seeded company.
//
// Run after `npm run db:seed` (needs a Company row to attach products to):
//   npx tsx scripts/import-products.ts "C:\Users\vstge\Downloads\export_items.csv"
//
// Price handling: the CSV uses the literal string "variable" for items priced
// at sale time (menus, services...). This POS has no free-price entry at
// checkout, so those products are imported at 0 FCFA and left inactive
// (active=false) until a real price is set from the Produits page — decided
// with the user rather than guessing real menu prices.
//
// Images: the CSV carries no photos. Rather than inventing "photos" of this
// specific business's real menu, generic representative photos are pulled
// from Wikimedia Commons (openly licensed for reuse, unlike a plain image
// search) and matched by product-type keyword — one shared photo per type
// bucket (burger, ice cream, pastry, ...), not a unique photo per SKU.
// Products with no obvious physical-food match (services: livraison,
// anniversaire, mariage...) are left without an image on purpose.

import "dotenv/config";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

const CSV_PATH = process.argv[2] || "C:\\Users\\vstge\\Downloads\\export_items.csv";
const UPLOADS_DIR = path.join(process.cwd(), "storage", "uploads", "products");
const COMMONS_HEADERS = {
  "User-Agent": "CaisseBiImporter/1.0 (one-off local product import script)",
};

// ---- minimal CSV parser (handles quoted fields with embedded commas) ----
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\r") {
      // skip
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => !(r.length === 1 && r[0] === ""));
}

type Row = Record<string, string>;

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// ---- image buckets: keyword (matched against the CSV "Handle" slug) -> Commons search query ----
const BUCKETS: { id: string; test: (h: string) => boolean; q: string }[] = [
  { id: "eclair-cafe", test: (h) => h.includes("eclair-cafe"), q: "coffee eclair pastry" },
  { id: "eclair-chocolat", test: (h) => h.includes("eclair-chocolat"), q: "chocolate eclair pastry" },
  { id: "tarte-citron", test: (h) => h.includes("tarte-citron"), q: "lemon tart" },
  { id: "tarte-fraise", test: (h) => h.includes("tarte-fraise"), q: "strawberry tart" },
  { id: "cheesecake", test: (h) => h.includes("cheesecake"), q: "cheesecake slice" },
  { id: "tiramisu", test: (h) => h.includes("tiramisu"), q: "tiramisu dessert" },
  { id: "opera", test: (h) => h.includes("opera"), q: "opera cake pastry" },
  { id: "paris-brest", test: (h) => h.includes("paris-brest"), q: "paris brest pastry" },
  { id: "saint-honore", test: (h) => h.includes("saint-honore"), q: "saint honore cake" },
  { id: "red-velvet", test: (h) => h.includes("red-velvet"), q: "red velvet cake" },
  { id: "fondant", test: (h) => h.includes("fondant"), q: "chocolate fondant cake" },
  { id: "mille-feuille", test: (h) => h.includes("mille-feuille"), q: "mille feuille pastry" },
  {
    id: "cake-slice",
    test: (h) => h.includes("gateau") || h.includes("parts-gateaux") || h.includes("pot-verine"),
    q: "cake slice dessert",
  },
  { id: "donut", test: (h) => h.includes("beignet"), q: "donut" },
  { id: "spring-roll", test: (h) => h.includes("nems"), q: "spring rolls" },
  { id: "fries", test: (h) => h.includes("frites"), q: "french fries" },
  { id: "samosa", test: (h) => h.includes("fataya") || h.includes("rissole"), q: "samosa pastry" },
  { id: "mini-pizza", test: (h) => h.includes("pizza"), q: "mini pizza" },
  { id: "burger", test: (h) => h.includes("burger"), q: "hamburger" },
  { id: "kebab", test: (h) => h.includes("kebab"), q: "kebab sandwich" },
  { id: "tacos", test: (h) => h.includes("tacos"), q: "tacos food" },
  { id: "wrap", test: (h) => h.includes("wrap"), q: "chicken wrap sandwich" },
  { id: "panini", test: (h) => h.includes("panini"), q: "panini sandwich" },
  { id: "club-sandwich", test: (h) => h.includes("club-sandwich"), q: "club sandwich" },
  { id: "sandwich", test: (h) => h.includes("sandwich"), q: "sandwich" },
  { id: "soda", test: (h) => ["coca", "fanta", "sprite"].some((k) => h.includes(k)), q: "soda glass with ice" },
  { id: "water", test: (h) => h === "eau", q: "water bottle glass" },
  { id: "juice", test: (h) => h.includes("jus") || h.includes("smoothie"), q: "fresh fruit juice glass" },
  { id: "coffee", test: (h) => ["cappuccino", "espresso"].some((k) => h.includes(k)), q: "coffee cup" },
  { id: "hot-chocolate", test: (h) => h.includes("chocolat-chaud"), q: "hot chocolate cup" },
  { id: "tea", test: (h) => h === "the" || h === "the-menthe", q: "tea cup" },
  { id: "mojito", test: (h) => h.includes("mojito"), q: "mojito mocktail" },
  { id: "ginger-drink", test: (h) => h.includes("gingembre"), q: "ginger juice drink" },
  { id: "hibiscus-drink", test: (h) => h.includes("waass"), q: "hibiscus drink" },
  { id: "crepe", test: (h) => h.includes("crepe"), q: "crepe pancake" },
  { id: "waffle", test: (h) => h.includes("gaufre"), q: "belgian waffle" },
  {
    id: "ice-cream-sundae",
    test: (h) => ["banana-split", "dame-blanche", "chocolat-liegeois"].some((k) => h.includes(k)),
    q: "ice cream sundae",
  },
  {
    id: "ice-cream-cone",
    test: (h) => h.includes("boule") || h.includes("cornet") || h.includes("baton") || h.includes("barquette-glace"),
    q: "ice cream cone",
  },
  { id: "breakfast", test: (h) => h.includes("petit-dejeuner"), q: "breakfast plate" },
  { id: "chantilly", test: (h) => h.includes("chantilly"), q: "whipped cream" },
  { id: "caramel-sauce", test: (h) => h.includes("coulis-caramel"), q: "caramel sauce" },
  { id: "chocolate-sauce", test: (h) => h.includes("coulis-chocolat"), q: "chocolate sauce" },
];

function pickBucket(handle: string) {
  const h = slugify(handle);
  return BUCKETS.find((b) => b.test(h)) ?? null;
}

async function fetchCommonsImage(query: string): Promise<{ buffer: Buffer; ext: string } | null> {
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
    query
  )}&srnamespace=6&format=json&srlimit=8`;
  const searchRes = await fetch(searchUrl, { headers: COMMONS_HEADERS });
  if (!searchRes.ok) return null;
  const searchJson: any = await searchRes.json();
  const results = searchJson?.query?.search ?? [];

  for (const r of results) {
    const title = r.title as string;
    if (!/\.(jpe?g|png)$/i.test(title)) continue;

    const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(
      title
    )}&prop=imageinfo&iiprop=url|mime&iiurlwidth=900&format=json`;
    const infoRes = await fetch(infoUrl, { headers: COMMONS_HEADERS });
    if (!infoRes.ok) continue;
    const infoJson: any = await infoRes.json();
    const pages = infoJson?.query?.pages ?? {};
    const page: any = Object.values(pages)[0];
    const info = page?.imageinfo?.[0];
    const url = info?.thumburl || info?.url;
    if (!url) continue;

    const imgRes = await fetch(url, { headers: COMMONS_HEADERS });
    if (!imgRes.ok) continue;
    const mime = imgRes.headers.get("content-type") || "";
    const ext = mime.includes("png") ? ".png" : ".jpg";
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    if (buffer.length < 2000) continue; // suspiciously small, likely a broken/placeholder file
    return { buffer, ext };
  }
  return null;
}

async function main() {
  const company = await prisma.company.findFirst();
  if (!company) {
    throw new Error("Aucune entreprise trouvée — lance d'abord `npm run db:seed`.");
  }

  const raw = await import("node:fs/promises").then((fs) => fs.readFile(CSV_PATH, "utf-8"));
  const table = parseCSV(raw);
  const header = table[0];
  const dataRows = table.slice(1).filter((r) => r.some((c) => c.trim() !== ""));

  const rows: Row[] = dataRows.map((r) => {
    const obj: Row = {};
    header.forEach((col, i) => (obj[col] = r[i] ?? ""));
    return obj;
  });

  // Group by Handle to reconstruct size/flavor variants (e.g. "gateau-entier"
  // has one CSV row per size, sharing a Handle, with Name/Category only set
  // on the first row of the group).
  const groups = new Map<string, Row[]>();
  for (const row of rows) {
    const handle = row["Handle"];
    if (!groups.has(handle)) groups.set(handle, []);
    groups.get(handle)!.push(row);
  }

  type ProductInput = {
    label: string;
    category: string;
    reference: string;
    barcode: string;
    purchasePrice: number;
    salePrice: number;
    active: boolean;
    stockable: boolean;
    handle: string;
  };

  const productInputs: ProductInput[] = [];
  for (const [handle, groupRows] of groups) {
    const base = groupRows[0];
    const baseName = base["Name"];
    const category = base["Category"];
    const stockable = (base["Track stock"] || "N").trim().toUpperCase() === "Y";
    const isVariantGroup = groupRows.length > 1;

    for (const row of groupRows) {
      const optionValue = row["Option 1 value"]?.trim();
      const label = isVariantGroup && optionValue ? `${baseName} (${optionValue})` : baseName;

      const priceRaw = (row["Price [grace d'or]"] || "").trim();
      const priceNum = Number(priceRaw);
      const hasFixedPrice = priceRaw !== "" && priceRaw.toLowerCase() !== "variable" && !Number.isNaN(priceNum);

      productInputs.push({
        label,
        category,
        reference: row["SKU"] || "",
        barcode: row["Barcode"] || "",
        purchasePrice: Number(row["Cost"]) || 0,
        salePrice: hasFixedPrice ? priceNum : 0,
        active: hasFixedPrice,
        stockable,
        handle,
      });
    }
  }

  // --- Categories ---
  const categoryNames = [...new Set(productInputs.map((p) => p.category).filter(Boolean))];
  const categoryIds: Record<string, number> = {};
  for (const name of categoryNames) {
    const existing = await prisma.category.findFirst({ where: { companyId: company.id, name } });
    const category = existing ?? (await prisma.category.create({ data: { companyId: company.id, name } }));
    categoryIds[name] = category.id;
  }
  console.log(`Catégories : ${categoryNames.length} (${categoryNames.join(", ")})`);

  // --- Images: one download per matched bucket, reused across products ---
  await mkdir(UPLOADS_DIR, { recursive: true });
  const usedBucketIds = new Set(
    productInputs.map((p) => pickBucket(p.handle)?.id).filter((id): id is string => !!id)
  );
  const bucketImageUrl: Record<string, string | null> = {};
  for (const bucketId of usedBucketIds) {
    const bucket = BUCKETS.find((b) => b.id === bucketId)!;
    try {
      const img = await fetchCommonsImage(bucket.q);
      if (!img) {
        console.warn(`  ⚠ Pas d'image trouvée pour "${bucket.q}" (${bucketId})`);
        bucketImageUrl[bucketId] = null;
        continue;
      }
      const filename = `${randomUUID()}${img.ext}`;
      await writeFile(path.join(UPLOADS_DIR, filename), img.buffer);
      bucketImageUrl[bucketId] = `/uploads/products/${filename}`;
      console.log(`  ✓ Image "${bucket.q}" -> ${filename}`);
    } catch (e: any) {
      console.warn(`  ⚠ Échec image "${bucket.q}": ${e?.message ?? e}`);
      bucketImageUrl[bucketId] = null;
    }
  }

  // --- Products ---
  let created = 0;
  let skipped = 0;
  let inactive = 0;
  let withImage = 0;
  for (const p of productInputs) {
    const existing = await prisma.product.findFirst({
      where: { companyId: company.id, reference: p.reference || undefined, label: p.reference ? undefined : p.label },
    });
    if (existing) {
      skipped++;
      continue;
    }

    const bucket = pickBucket(p.handle);
    const image = bucket ? bucketImageUrl[bucket.id] ?? null : null;
    if (image) withImage++;
    if (!p.active) inactive++;

    await prisma.product.create({
      data: {
        companyId: company.id,
        label: p.label,
        categoryId: p.category ? categoryIds[p.category] : null,
        stockable: p.stockable,
        quantity: 0,
        purchasePrice: p.purchasePrice,
        salePrice: p.salePrice,
        reference: p.reference || null,
        barcode: p.barcode || null,
        image,
        active: p.active,
      },
    });
    created++;
  }

  console.log("");
  console.log(`Produits créés   : ${created}`);
  console.log(`Déjà existants   : ${skipped} (ignorés)`);
  console.log(`Sans prix fixe   : ${inactive} (créés à 0 FCFA, désactivés — à corriger dans Produits)`);
  console.log(`Avec photo       : ${withImage}`);
  console.log("Terminé.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

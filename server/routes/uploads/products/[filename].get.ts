import { readFile } from "node:fs/promises";
import path from "node:path";

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export default defineEventHandler(async (event) => {
  const filename = getRouterParam(event, "filename") ?? "";
  const extension = path.extname(filename).toLowerCase();
  const contentType = CONTENT_TYPES[extension];

  // randomUUID()+extension filenames only (see product-image.post.ts) — reject
  // anything else outright rather than letting path.join below normalize a
  // "../" out of a crafted filename.
  if (!contentType || filename.includes("/") || filename.includes("\\")) {
    throw createError({ statusCode: 404, statusMessage: "Not found" });
  }

  const filePath = path.join(process.cwd(), "storage", "uploads", "products", filename);

  try {
    const data = await readFile(filePath);
    setHeader(event, "Content-Type", contentType);
    setHeader(event, "Cache-Control", "public, max-age=31536000, immutable");
    return data;
  } catch {
    throw createError({ statusCode: 404, statusMessage: "Not found" });
  }
});

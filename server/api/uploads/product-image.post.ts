import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { requireModuleAccess } from "~/server/utils/permissions";

const ALLOWED_MIME: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};
const MAX_SIZE = 2 * 1024 * 1024; // 2MB

export default defineEventHandler(async (event) => {
  await requireModuleAccess(event, "produits");

  const parts = await readMultipartFormData(event);
  const file = parts?.find((p) => p.name === "file");

  if (!file || !file.data?.length) {
    throw createError({ statusCode: 400, statusMessage: "Aucun fichier reçu" });
  }

  const mime = file.type || "";
  const extension = ALLOWED_MIME[mime];
  if (!extension) {
    throw createError({
      statusCode: 400,
      statusMessage: "Format d'image non supporté (jpg, png ou webp uniquement)",
    });
  }

  if (file.data.length > MAX_SIZE) {
    throw createError({ statusCode: 400, statusMessage: "Image trop volumineuse (2 Mo max)" });
  }

  const uploadsDir = path.join(process.cwd(), "public", "uploads", "products");
  await mkdir(uploadsDir, { recursive: true });

  const filename = `${randomUUID()}${extension}`;
  await writeFile(path.join(uploadsDir, filename), file.data);

  return { url: `/uploads/products/${filename}` };
});

import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveStoreScope } from "~/server/utils/storeScope";

const bodySchema = z.object({
  type: z.enum(["IN", "OUT"]),
  observation: z.string().optional().nullable(),
  lines: z
    .array(
      z.object({
        articleId: z.number().int().positive(),
        quantity: z.number().positive(),
      })
    )
    .min(1),
});

// A movement is edited as a whole document — the full line list is
// replaced, not diffed line-by-line. To keep every article's quantity
// correct, this first undoes the movement's *original* effect (as if it
// never happened), then re-validates and re-applies the *new* lines from
// that clean baseline — so editing "Entrée 5kg farine" down to "3kg" (or
// over to "Sortie") always lands on the right final stock, regardless of
// what changed in between.
export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "stock");
  const id = Number(getRouterParam(event, "id"));
  const { type, observation, lines } = await readValidatedBody(event, bodySchema.parse);

  const existing = await prisma.articleMovement.findFirst({
    where: { id, companyId: user.companyId, ...resolveStoreScope(user) },
    include: { lines: true },
  });
  if (!existing) throw createError({ statusCode: 404, statusMessage: "Mouvement introuvable" });

  const articleIds = [...new Set([...existing.lines.map((l) => l.articleId), ...lines.map((l) => l.articleId)])];
  const articles = await prisma.article.findMany({
    where: { id: { in: articleIds }, companyId: user.companyId, ...resolveStoreScope(user) },
  });
  const articleMap = new Map(articles.map((a) => [a.id, a]));
  if (articleMap.size < new Set(lines.map((l) => l.articleId)).size) {
    throw createError({ statusCode: 404, statusMessage: "Article introuvable" });
  }

  // Simulate reverting the original lines, then re-applying the new ones,
  // to validate stock (OUT movements) without touching the database yet.
  const projected = new Map(articles.map((a) => [a.id, Number(a.quantity)]));
  for (const line of existing.lines) {
    const revert = existing.type === "IN" ? -Number(line.quantity) : Number(line.quantity);
    projected.set(line.articleId, (projected.get(line.articleId) ?? 0) + revert);
  }
  for (const line of lines) {
    const apply = type === "IN" ? line.quantity : -line.quantity;
    const next = (projected.get(line.articleId) ?? 0) + apply;
    if (next < 0) {
      throw createError({ statusCode: 400, statusMessage: `Stock insuffisant pour ${articleMap.get(line.articleId)?.designation}` });
    }
    projected.set(line.articleId, next);
  }

  const updated = await prisma.$transaction(async (tx) => {
    for (const line of existing.lines) {
      const revert = existing.type === "IN" ? -Number(line.quantity) : Number(line.quantity);
      await tx.article.update({ where: { id: line.articleId }, data: { quantity: { increment: revert } } });
    }

    await tx.articleMovementLine.deleteMany({ where: { articleMovementId: id } });

    const movement = await tx.articleMovement.update({
      where: { id },
      data: {
        type,
        observation,
        lines: { create: lines.map((l) => ({ articleId: l.articleId, quantity: l.quantity })) },
      },
      include: { lines: { include: { article: true } }, user: { select: { id: true, name: true } } },
    });

    for (const line of lines) {
      const apply = type === "IN" ? line.quantity : -line.quantity;
      await tx.article.update({ where: { id: line.articleId }, data: { quantity: { increment: apply } } });
    }

    return movement;
  });

  return updated;
});

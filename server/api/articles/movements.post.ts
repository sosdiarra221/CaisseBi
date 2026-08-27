import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveStoreScope } from "~/server/utils/storeScope";

// One document per submission (like a Sale) — a delivery bringing in
// several ingredients, or a prep session consuming several, entered
// together under one Entrée/Sortie. See ArticleMovement/ArticleMovementLine
// in prisma/schema.prisma.
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

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "stock");
  const { type, observation, lines } = await readValidatedBody(event, bodySchema.parse);

  const articleIds = lines.map((l) => l.articleId);
  const articles = await prisma.article.findMany({
    where: { id: { in: articleIds }, companyId: user.companyId, ...resolveStoreScope(user) },
  });
  const articleMap = new Map(articles.map((a) => [a.id, a]));

  for (const line of lines) {
    const article = articleMap.get(line.articleId);
    if (!article) throw createError({ statusCode: 404, statusMessage: `Article ${line.articleId} introuvable` });
    if (type === "OUT" && Number(article.quantity) < line.quantity) {
      throw createError({ statusCode: 400, statusMessage: `Stock insuffisant pour ${article.designation}` });
    }
  }

  const movement = await prisma.$transaction(async (tx) => {
    const number = (await tx.articleMovement.count({ where: { companyId: user.companyId } })) + 1;

    const created = await tx.articleMovement.create({
      data: {
        companyId: user.companyId,
        storeId: articles[0].storeId,
        number,
        type,
        userId: user.id,
        observation,
        lines: {
          create: lines.map((l) => ({ articleId: l.articleId, quantity: l.quantity })),
        },
      },
      include: { lines: { include: { article: true } }, user: { select: { id: true, name: true } } },
    });

    for (const line of lines) {
      const delta = type === "IN" ? line.quantity : -line.quantity;
      await tx.article.update({ where: { id: line.articleId }, data: { quantity: { increment: delta } } });
    }

    return created;
  });

  return movement;
});

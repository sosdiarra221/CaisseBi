import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { requireModuleAccess } from "~/server/utils/permissions";
import { resolveStoreScope } from "~/server/utils/storeScope";

// One submission can move several articles at once (a delivery bringing in
// multiple ingredients, a prep session consuming several) — all sharing the
// same direction (type), each with its own quantity/observation.
const bodySchema = z.object({
  type: z.enum(["IN", "OUT"]),
  lines: z
    .array(
      z.object({
        articleId: z.number().int().positive(),
        quantity: z.number().positive(),
        observation: z.string().optional().nullable(),
      })
    )
    .min(1),
});

export default defineEventHandler(async (event) => {
  const user = await requireModuleAccess(event, "stock");
  const { type, lines } = await readValidatedBody(event, bodySchema.parse);

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

  const movements = await prisma.$transaction(
    lines.flatMap((line) => {
      const delta = type === "IN" ? line.quantity : -line.quantity;
      return [
        prisma.articleMovement.create({
          data: {
            articleId: line.articleId,
            userId: user.id,
            type,
            quantity: line.quantity,
            observation: line.observation,
          },
        }),
        prisma.article.update({
          where: { id: line.articleId },
          data: { quantity: { increment: delta } },
        }),
      ];
    })
  );

  // Every other create in the interleaved array is the movement row itself.
  return movements.filter((_, i) => i % 2 === 0);
});

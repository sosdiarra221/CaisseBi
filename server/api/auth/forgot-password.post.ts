import { randomBytes } from "node:crypto";
import { z } from "zod";
import { prisma } from "~/server/utils/prisma";
import { sendMail } from "~/server/utils/mailer";

const bodySchema = z.object({
  email: z.string().email(),
});

export default defineEventHandler(async (event) => {
  const { email } = await readValidatedBody(event, bodySchema.parse);

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !user.active) {
    // Toujours une réponse générique : on ne révèle jamais si l'email existe.
    return { ok: true };
  }

  // Invalide les anciens tokens non utilisés de cet utilisateur.
  await prisma.passwordResetToken.deleteMany({
    where: { userId: user.id, usedAt: null },
  });

  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // +1 heure

  await prisma.passwordResetToken.create({
    data: { userId: user.id, token, expiresAt },
  });

  const baseUrl =
    process.env.NUXT_PUBLIC_SITE_URL || getRequestURL(event).origin;
  const resetLink = `${baseUrl}/page-reset-password?token=${token}`;

  try {
    await sendMail({
      to: user.email,
      subject: "Réinitialisation de votre mot de passe CaisseBi",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
          <div style="background-color: #182B6B; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">CaisseBi</h1>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #182B6B; font-size: 18px; margin-top: 0;">Réinitialisation de mot de passe</h2>
            <p style="color: #333; font-size: 14px; line-height: 1.5;">
              Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le bouton ci-dessous pour en choisir un nouveau. Ce lien est valable 1 heure et à usage unique.
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="${resetLink}" style="background-color: #F5A524; color: #182B6B; text-decoration: none; font-weight: bold; padding: 12px 28px; border-radius: 6px; display: inline-block;">
                Réinitialiser mon mot de passe
              </a>
            </div>
            <p style="color: #666; font-size: 12px; line-height: 1.5;">
              Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer cet email en toute sécurité.
            </p>
            <p style="color: #666; font-size: 12px; word-break: break-all;">
              Lien direct : ${resetLink}
            </p>
          </div>
        </div>
      `,
      text: `Réinitialisation de votre mot de passe CaisseBi\n\nCliquez sur ce lien pour réinitialiser votre mot de passe (valable 1 heure) : ${resetLink}\n\nSi vous n'êtes pas à l'origine de cette demande, ignorez cet email.`,
    });
  } catch (err) {
    // On ne laisse jamais un échec d'envoi révéler si le compte existe.
    console.error("[forgot-password] Failed to send reset email:", err);
  }

  return { ok: true };
});

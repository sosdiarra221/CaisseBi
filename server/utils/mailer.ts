import nodemailer from "nodemailer";

export type SendMailOptions = {
  to: string;
  subject: string;
  html: string;
  text?: string;
};

let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null =
  null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP configuration is missing (SMTP_HOST/SMTP_USER/SMTP_PASS). Set these env vars to enable email sending."
    );
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  return cachedTransporter;
}

/**
 * Sends an email via the SMTP transport configured through env vars
 * (SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM).
 * Throws if SMTP isn't configured or the send fails — callers should
 * catch and decide how to degrade (e.g. without leaking account existence).
 */
export async function sendMail({ to, subject, html, text }: SendMailOptions) {
  const transporter = getTransporter();
  const from = process.env.SMTP_FROM || "CaisseBi <no-reply@caissebi.local>";

  await transporter.sendMail({
    from,
    to,
    subject,
    html,
    text,
  });
}

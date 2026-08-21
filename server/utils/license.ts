import { randomBytes } from "node:crypto";
import { prisma } from "./prisma";

// Excludes ambiguous characters (0/O, 1/I) so a printed/dictated key is easy
// to type back in correctly.
const KEY_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function randomGroup(length: number): string {
  const bytes = randomBytes(length);
  let out = "";
  for (let i = 0; i < length; i++) {
    out += KEY_ALPHABET[bytes[i] % KEY_ALPHABET.length];
  }
  return out;
}

/** Generates a CAISSEBI-XXXX-XXXX-XXXX-XXXX style license key. */
export function generateLicenseKey(): string {
  const groups = [randomGroup(4), randomGroup(4), randomGroup(4), randomGroup(4)];
  return `CAISSEBI-${groups.join("-")}`;
}

export type ActiveLicense = {
  id: number;
  companyId: number;
  key: string;
  activatedAt: Date;
  expiresAt: Date;
  daysRemaining: number;
};

/**
 * Returns the company's current active license (activated and not yet
 * expired), or null if none. "Active" = at most one row meaningfully
 * matters at a time, but we don't delete old/expired rows — they stay as
 * an audit trail, see prisma/schema.prisma's License model.
 */
export async function getActiveLicense(companyId: number): Promise<ActiveLicense | null> {
  const now = new Date();
  const license = await prisma.license.findFirst({
    where: {
      companyId,
      activatedAt: { not: null },
      expiresAt: { gt: now },
    },
    orderBy: { expiresAt: "desc" },
  });

  if (!license || !license.activatedAt || !license.expiresAt) {
    return null;
  }

  const daysRemaining = Math.max(0, Math.ceil((license.expiresAt.getTime() - now.getTime()) / (24 * 60 * 60 * 1000)));

  return {
    id: license.id,
    companyId: license.companyId,
    key: license.key,
    activatedAt: license.activatedAt,
    expiresAt: license.expiresAt,
    daysRemaining,
  };
}

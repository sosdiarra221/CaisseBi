// One-off: generates a license key for a company from outside the app.
// License *generation* is deliberately not exposed in the UI anymore (see
// server/api/license/activate.post.ts, which is the only license endpoint
// left) — only you, running this script, can mint a key. The
// Direction/OWNER of that company still activates it themselves from
// Paramètres > Licence, where the pending key shows up automatically
// (server/api/license/status.get.ts's `generatedUnactivatedKey`).
//
// Run (accepts either the company's numeric id, or any user's email in
// that company — whichever you have on hand):
//   npx tsx scripts/generate-license.ts admin@client.com
//   npx tsx scripts/generate-license.ts 3

import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
import { generateLicenseKey } from "../server/utils/license";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

const identifier = process.argv[2];

async function main() {
  if (!identifier) {
    throw new Error("Usage: npx tsx scripts/generate-license.ts <email ou id d'entreprise>");
  }

  const companyId = /^\d+$/.test(identifier)
    ? Number(identifier)
    : (await prisma.user.findUnique({ where: { email: identifier } }))?.companyId;

  if (!companyId) {
    throw new Error(`Aucune entreprise trouvée pour "${identifier}".`);
  }

  const company = await prisma.company.findUnique({ where: { id: companyId } });
  if (!company) throw new Error(`Entreprise #${companyId} introuvable.`);

  const owner = await prisma.user.findFirst({ where: { companyId, role: "OWNER" } });
  if (!owner) throw new Error(`Aucun compte OWNER trouvé pour l'entreprise #${companyId}.`);

  let key = generateLicenseKey();
  for (let attempts = 0; attempts < 5; attempts++) {
    const existing = await prisma.license.findUnique({ where: { key } });
    if (!existing) break;
    key = generateLicenseKey();
  }

  await prisma.license.create({
    data: { companyId, key, generatedByUserId: owner.id },
  });

  console.log(`Entreprise : ${company.name} (#${companyId})`);
  console.log(`Clé de licence : ${key}`);
  console.log("");
  console.log("Donne cette clé au client — elle apparaît automatiquement dans");
  console.log("Paramètres > Licence pour qu'il n'ait qu'à cliquer Activer.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// One-off: sets a user's PIN by email. The PIN is a command-line argument,
// never hardcoded, so a real credential never ends up committed to git.
//
// Run:
//   npx tsx scripts/set-admin-pin.ts admin@caissebi.com 0509

import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
import { Hash } from "@adonisjs/hash";
import { Scrypt } from "@adonisjs/hash/drivers/scrypt";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });
const hash = new Hash(new Scrypt({}));

const [, , email, pin] = process.argv;

async function main() {
  if (!email || !/^\d{4}$/.test(pin || "")) {
    throw new Error("Usage: npx tsx scripts/set-admin-pin.ts <email> <pin à 4 chiffres>");
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error(`Aucun utilisateur avec l'email ${email}`);

  await prisma.user.update({
    where: { id: user.id },
    data: { pinCode: await hash.make(pin) },
  });

  console.log(`Code PIN mis à jour pour ${user.username} (${email}).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

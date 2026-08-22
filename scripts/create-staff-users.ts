// One-off: creates the 3 additional cashier ("vendeuse2/3/4") and 3 manager
// ("manager1/2/3") accounts requested, each with a random 4-digit PIN
// (never a predictable default like 1234, since these are real staff PINs).
// Prints every identifiant + PIN once at the end — that's the only place
// they're visible in plaintext, so copy them out before closing the
// terminal. PINs (and email/password) can be changed anytime afterward from
// Utilisateurs > Modifier.
//
// Run:
//   npx tsx scripts/create-staff-users.ts

import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
import { Hash } from "@adonisjs/hash";
import { Scrypt } from "@adonisjs/hash/drivers/scrypt";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });
const hash = new Hash(new Scrypt({}));
const hashPassword = (password: string) => hash.make(password);

const DEFAULT_PASSWORD = "PWD@caissebi";

const STAFF: { username: string; name: string; role: "CASHIER" | "MANAGER" }[] = [
  { username: "vendeuse2", name: "Vendeuse 2", role: "CASHIER" },
  { username: "vendeuse3", name: "Vendeuse 3", role: "CASHIER" },
  { username: "vendeuse4", name: "Vendeuse 4", role: "CASHIER" },
  { username: "manager1", name: "Manager 1", role: "MANAGER" },
  { username: "manager2", name: "Manager 2", role: "MANAGER" },
  { username: "manager3", name: "Manager 3", role: "MANAGER" },
];

function randomPin(): string {
  return String(Math.floor(1000 + Math.random() * 9000));
}

async function main() {
  const company = await prisma.company.findFirst();
  if (!company) throw new Error("Aucune entreprise trouvée — lance d'abord `npm run db:seed`.");

  const results: { username: string; pin: string; created: boolean }[] = [];

  for (const staff of STAFF) {
    const existing = await prisma.user.findUnique({ where: { username: staff.username } });
    if (existing) {
      results.push({ username: staff.username, pin: "(déjà existant, inchangé)", created: false });
      continue;
    }

    const pin = randomPin();
    await prisma.user.create({
      data: {
        companyId: company.id,
        name: staff.name,
        email: `${staff.username}@caissebi.com`,
        username: staff.username,
        password: await hashPassword(DEFAULT_PASSWORD),
        pinCode: await hashPassword(pin),
        role: staff.role,
      },
    });
    results.push({ username: staff.username, pin, created: true });
  }

  console.log("");
  console.log("Identifiant   | Code PIN");
  console.log("--------------|--------");
  for (const r of results) {
    console.log(`${r.username.padEnd(13)} | ${r.pin}`);
  }
  console.log("");
  console.log("Note ces codes PIN maintenant — ils ne seront plus jamais affichés en clair.");
  console.log("Modifiable à tout moment depuis Utilisateurs > Modifier.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

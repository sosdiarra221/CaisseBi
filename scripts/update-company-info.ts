// One-off: sets the real business identity (name, phone, address) on the
// company row, replacing the seeded "Ma Boutique" placeholder.
//
// Run:
//   npx tsx scripts/update-company-info.ts

import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
  const company = await prisma.company.findFirst();
  if (!company) throw new Error("Aucune entreprise trouvée — lance d'abord `npm run db:seed`.");

  const updated = await prisma.company.update({
    where: { id: company.id },
    data: {
      name: "LA GRÂCE D'OR",
      commercialName: "LA GRÂCE D'OR",
      phone: "+221 71 005 77 72",
      address: "Dakar, Malika Plage",
    },
  });

  console.log(`Entreprise mise à jour : ${updated.name} — ${updated.phone} — ${updated.address}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

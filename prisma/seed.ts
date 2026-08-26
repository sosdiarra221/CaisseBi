import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
import { Hash } from "@adonisjs/hash";
import { Scrypt } from "@adonisjs/hash/drivers/scrypt";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

// Same driver/defaults nuxt-auth-utils uses for hashPassword() so seeded
// users can log in through the regular /api/auth/login endpoint.
const hash = new Hash(new Scrypt({}));
const hashPassword = (password: string) => hash.make(password);

// Shared default password for every seeded account — the app has no
// forced-password-change flow yet, so this is what ships to new deployments.
const DEFAULT_PASSWORD = "PWD@caissebi";

// Shared default PIN for every seeded account, for the quick-unlock keypad
// (page-pin-lock.vue). Demo default only — not meant to be secure, same
// spirit as DEFAULT_PASSWORD above.
const DEFAULT_PIN = "1234";

const OWNER_NAME = "Gora Pene";
const OWNER_EMAIL = "admin@caissebi.com";
const OWNER_USERNAME = "admin";

const MANAGER_NAME = "Fatou Ndiaye";
const MANAGER_EMAIL = "manager@caissebi.com";
const MANAGER_USERNAME = "manager";

const CASHIER_NAME = "Mamadou Diop";
const CASHIER_EMAIL = "caisse@caissebi.com";
const CASHIER_USERNAME = "caisse";

async function main() {
  const company = await prisma.company.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Ma Boutique",
      commercialName: "Ma Boutique",
      address: "Dakar, Sénégal",
      phone: "+221 77 123 45 67",
      currency: "FCFA",
      receiptFormat: "80mm",
      receiptHeader: "Merci de votre visite",
      receiptFooter: "A bientôt !",
    },
  });

  // Every single-store install (still the common case) gets exactly one
  // store, matching the migration backfill's naming — same idea, just for
  // brand-new databases that never went through that migration's UPDATE.
  const store =
    (await prisma.store.findFirst({ where: { companyId: company.id } })) ??
    (await prisma.store.create({ data: { companyId: company.id, name: "Magasin principal" } }));

  // Seeded accounts get their PIN backfilled on `update` too (unlike
  // password, which is left alone once set) so that re-running this seed on
  // an already-seeded dev database — the common case, since these 3 accounts
  // were created before the PIN feature existed — still ends up with a
  // working demo PIN instead of silently staying null forever.
  const seededPin = await hashPassword(DEFAULT_PIN);

  const owner = await prisma.user.upsert({
    where: { email: OWNER_EMAIL },
    update: { pinCode: seededPin, username: OWNER_USERNAME },
    create: {
      companyId: company.id,
      name: OWNER_NAME,
      email: OWNER_EMAIL,
      username: OWNER_USERNAME,
      password: await hashPassword(DEFAULT_PASSWORD),
      pinCode: seededPin,
      role: "OWNER",
    },
  });

  const manager = await prisma.user.upsert({
    where: { email: MANAGER_EMAIL },
    update: { pinCode: seededPin, username: MANAGER_USERNAME },
    create: {
      companyId: company.id,
      name: MANAGER_NAME,
      email: MANAGER_EMAIL,
      username: MANAGER_USERNAME,
      password: await hashPassword(DEFAULT_PASSWORD),
      pinCode: seededPin,
      role: "MANAGER",
      storeId: store.id,
    },
  });

  const cashier = await prisma.user.upsert({
    where: { email: CASHIER_EMAIL },
    update: { pinCode: seededPin, username: CASHIER_USERNAME },
    create: {
      companyId: company.id,
      storeId: store.id,
      name: CASHIER_NAME,
      email: CASHIER_EMAIL,
      username: CASHIER_USERNAME,
      password: await hashPassword(DEFAULT_PASSWORD),
      pinCode: seededPin,
      role: "CASHIER",
    },
  });

  // Default module access: mirrors the historical hardcoded
  // requireRole(event, ["OWNER", "MANAGER"]) checks that server/utils/permissions.ts
  // now replaces with a DB-backed lookup (see server/utils/permissions.ts and
  // server/api/role-permissions). MANAGER and GERANT keep exactly the same 5
  // modules (GERANT is meant to have identical access to MANAGER); CASHIER
  // starts with none, matching today's behaviour. OWNER never needs a row —
  // it always has full access.
  const GATEABLE_MODULES = ["produits", "stock", "ventes", "rapports", "depenses"];
  for (const role of ["MANAGER", "GERANT"] as const) {
    for (const moduleName of GATEABLE_MODULES) {
      await prisma.rolePermission.upsert({
        where: { companyId_role_module: { companyId: company.id, role, module: moduleName } },
        update: {},
        create: { companyId: company.id, role, module: moduleName },
      });
    }
  }

  const register = await prisma.cashRegister.upsert({
    where: { id: 1 },
    update: {},
    create: { companyId: company.id, storeId: store.id, name: "Caisse 01" },
  });

  const categoryNames = ["Boissons", "Plats", "Desserts", "Services"];
  const categories: Record<string, number> = {};
  for (const name of categoryNames) {
    const existing = await prisma.category.findFirst({ where: { companyId: company.id, name } });
    const category =
      existing ??
      (await prisma.category.create({ data: { companyId: company.id, storeId: store.id, name } }));
    categories[name] = category.id;
  }

  const products = [
    { label: "Coca-Cola", category: "Boissons", purchasePrice: 300, salePrice: 500, quantity: 25 },
    { label: "Eau", category: "Boissons", purchasePrice: 150, salePrice: 300, quantity: 40 },
    { label: "Jus", category: "Boissons", purchasePrice: 400, salePrice: 700, quantity: 15 },
    { label: "Café", category: "Boissons", purchasePrice: 250, salePrice: 500, quantity: 30 },
    { label: "Burger", category: "Plats", purchasePrice: 2500, salePrice: 5000, quantity: 10 },
    { label: "Poulet", category: "Plats", purchasePrice: 2000, salePrice: 4000, quantity: 12 },
    { label: "Pizza", category: "Plats", purchasePrice: 3000, salePrice: 6000, quantity: 8 },
    { label: "Glace", category: "Desserts", purchasePrice: 500, salePrice: 1000, quantity: 20 },
    { label: "Livraison", category: "Services", purchasePrice: 0, salePrice: 1000, quantity: 0, stockable: false },
  ];

  for (const p of products) {
    const existing = await prisma.product.findFirst({ where: { companyId: company.id, label: p.label } });
    if (existing) continue;
    await prisma.product.create({
      data: {
        companyId: company.id,
        storeId: store.id,
        label: p.label,
        categoryId: categories[p.category],
        stockable: p.stockable ?? true,
        quantity: p.quantity,
        purchasePrice: p.purchasePrice,
        salePrice: p.salePrice,
      },
    });
  }

  console.log("Seed terminé.");
  console.log(`Entreprise : ${company.name}`);
  console.log(`Connexion : identifiant + code PIN (${DEFAULT_PIN} par défaut pour tous les comptes)`);
  console.log(`Compte administrateur : ${owner.username} (${owner.email})`);
  console.log(`Compte manager : ${manager.username} (${manager.email})`);
  console.log(`Compte caissier : ${cashier.username} (${cashier.email})`);
  console.log(`Caisse : ${register.name}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

-- CreateTable
CREATE TABLE `Store` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Store_companyId_idx`(`companyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Store` ADD CONSTRAINT `Store_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- Backfill: one default store per existing company, so every current
-- single-store install keeps working without any manual step.
INSERT INTO `Store` (`companyId`, `name`)
SELECT `id`, 'Magasin principal' FROM `Company`;

-- AlterTable: storeId columns, nullable first so existing rows can be
-- backfilled before the NOT NULL constraint is enforced below.
ALTER TABLE `User` ADD COLUMN `storeId` INTEGER NULL;
ALTER TABLE `Category` ADD COLUMN `storeId` INTEGER NULL;
ALTER TABLE `Product` ADD COLUMN `storeId` INTEGER NULL;
ALTER TABLE `CashRegister` ADD COLUMN `storeId` INTEGER NULL;
ALTER TABLE `Sale` ADD COLUMN `storeId` INTEGER NULL;
ALTER TABLE `Expense` ADD COLUMN `storeId` INTEGER NULL;
ALTER TABLE `InventorySession` ADD COLUMN `storeId` INTEGER NULL;

-- Backfill: point every existing row at its company's new default store.
-- User.storeId is left NULL for OWNER (Direction has no fixed store).
UPDATE `User` u
JOIN `Store` s ON s.`companyId` = u.`companyId`
SET u.`storeId` = s.`id`
WHERE u.`role` != 'OWNER';

UPDATE `Category` c
JOIN `Store` s ON s.`companyId` = c.`companyId`
SET c.`storeId` = s.`id`;

UPDATE `Product` p
JOIN `Store` s ON s.`companyId` = p.`companyId`
SET p.`storeId` = s.`id`;

UPDATE `CashRegister` cr
JOIN `Store` s ON s.`companyId` = cr.`companyId`
SET cr.`storeId` = s.`id`;

UPDATE `Sale` sa
JOIN `Store` s ON s.`companyId` = sa.`companyId`
SET sa.`storeId` = s.`id`;

UPDATE `Expense` e
JOIN `Store` s ON s.`companyId` = e.`companyId`
SET e.`storeId` = s.`id`;

UPDATE `InventorySession` inv
JOIN `Store` s ON s.`companyId` = inv.`companyId`
SET inv.`storeId` = s.`id`;

-- Enforce NOT NULL on every model except User (OWNER legitimately has none).
ALTER TABLE `Category` MODIFY COLUMN `storeId` INTEGER NOT NULL;
ALTER TABLE `Product` MODIFY COLUMN `storeId` INTEGER NOT NULL;
ALTER TABLE `CashRegister` MODIFY COLUMN `storeId` INTEGER NOT NULL;
ALTER TABLE `Sale` MODIFY COLUMN `storeId` INTEGER NOT NULL;
ALTER TABLE `Expense` MODIFY COLUMN `storeId` INTEGER NOT NULL;
ALTER TABLE `InventorySession` MODIFY COLUMN `storeId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `Category` ADD CONSTRAINT `Category_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `Product` ADD CONSTRAINT `Product_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `CashRegister` ADD CONSTRAINT `CashRegister_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `Expense` ADD CONSTRAINT `Expense_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `InventorySession` ADD CONSTRAINT `InventorySession_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateIndex
CREATE INDEX `User_storeId_idx` ON `User`(`storeId`);
CREATE INDEX `Category_storeId_idx` ON `Category`(`storeId`);
CREATE INDEX `Product_storeId_idx` ON `Product`(`storeId`);
CREATE INDEX `CashRegister_storeId_idx` ON `CashRegister`(`storeId`);
CREATE INDEX `Sale_storeId_idx` ON `Sale`(`storeId`);
CREATE INDEX `Expense_storeId_idx` ON `Expense`(`storeId`);
CREATE INDEX `InventorySession_storeId_idx` ON `InventorySession`(`storeId`);

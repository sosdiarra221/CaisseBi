-- Splits the flat ArticleMovement ledger into a header (ArticleMovement) +
-- lines (ArticleMovementLine) shape, mirroring Sale/SaleLine — needed so a
-- movement can be referenced by number, viewed as one document (all its
-- lines together), and edited as a whole.

-- Step 1: the old flat table becomes the new line table (keeps its data,
-- its id sequence, its `articleId` FK — that FK's still valid, only the
-- table it lives on got renamed).
RENAME TABLE `ArticleMovement` TO `ArticleMovementLine`;
ALTER TABLE `ArticleMovementLine` ADD COLUMN `articleMovementId` INTEGER NULL;

-- Step 2: recreate ArticleMovement as the new header table.
CREATE TABLE `ArticleMovement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyId` INTEGER NOT NULL,
    `storeId` INTEGER NOT NULL,
    `number` INTEGER NOT NULL,
    `type` ENUM('IN', 'OUT', 'ADJUSTMENT') NOT NULL,
    `userId` INTEGER NOT NULL,
    `observation` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `ArticleMovement_companyId_idx`(`companyId`),
    INDEX `ArticleMovement_storeId_idx`(`storeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Step 3: backfill — every existing line becomes its own single-line
-- movement. The header reuses the line's own id (both tables are empty of
-- any other data at this point), so the line can then just copy that same
-- value into articleMovementId with no separate correlation step needed.
INSERT INTO `ArticleMovement` (`id`, `companyId`, `storeId`, `number`, `type`, `userId`, `observation`, `createdAt`, `updatedAt`)
SELECT
  l.`id`,
  a.`companyId`,
  a.`storeId`,
  ROW_NUMBER() OVER (PARTITION BY a.`companyId` ORDER BY l.`createdAt`, l.`id`),
  l.`type`,
  l.`userId`,
  l.`observation`,
  l.`createdAt`,
  l.`createdAt`
FROM `ArticleMovementLine` l
JOIN `Article` a ON a.`id` = l.`articleId`;

UPDATE `ArticleMovementLine` SET `articleMovementId` = `id`;

-- Step 4: the line no longer carries these — they live on the header now.
ALTER TABLE `ArticleMovementLine` DROP FOREIGN KEY `ArticleMovement_userId_fkey`;
ALTER TABLE `ArticleMovementLine` DROP COLUMN `userId`;
ALTER TABLE `ArticleMovementLine` DROP COLUMN `type`;
ALTER TABLE `ArticleMovementLine` DROP COLUMN `observation`;
ALTER TABLE `ArticleMovementLine` DROP COLUMN `createdAt`;

ALTER TABLE `ArticleMovementLine` MODIFY COLUMN `articleMovementId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ArticleMovement` ADD CONSTRAINT `ArticleMovement_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `ArticleMovement` ADD CONSTRAINT `ArticleMovement_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `Store`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `ArticleMovement` ADD CONSTRAINT `ArticleMovement_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE `ArticleMovementLine` ADD CONSTRAINT `ArticleMovementLine_articleMovementId_fkey` FOREIGN KEY (`articleMovementId`) REFERENCES `ArticleMovement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateIndex
CREATE INDEX `ArticleMovementLine_articleMovementId_idx` ON `ArticleMovementLine`(`articleMovementId`);

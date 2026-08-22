-- AlterTable: add username, nullable first so existing rows can be backfilled
ALTER TABLE `User` ADD COLUMN `username` VARCHAR(191) NULL;

-- Backfill: derive from the email local-part for every existing account
UPDATE `User` SET `username` = SUBSTRING_INDEX(`email`, '@', 1) WHERE `username` IS NULL;

-- Disambiguate any collisions (same local-part across different email domains)
-- before enforcing uniqueness below.
UPDATE `User` u
JOIN (
  SELECT `username`, COUNT(*) AS c
  FROM `User`
  GROUP BY `username`
  HAVING c > 1
) dupes ON u.`username` = dupes.`username`
SET u.`username` = CONCAT(u.`username`, '_', u.`id`);

-- Enforce NOT NULL + uniqueness now that every row has a distinct value
ALTER TABLE `User` MODIFY COLUMN `username` VARCHAR(191) NOT NULL;
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);

-- AlterTable
ALTER TABLE `payment` MODIFY `method` ENUM('CASH', 'CARD', 'WAVE', 'ORANGE_MONEY') NOT NULL;

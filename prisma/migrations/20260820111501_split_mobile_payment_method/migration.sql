-- AlterTable
ALTER TABLE `Payment` MODIFY `method` ENUM('CASH', 'CARD', 'WAVE', 'ORANGE_MONEY') NOT NULL;

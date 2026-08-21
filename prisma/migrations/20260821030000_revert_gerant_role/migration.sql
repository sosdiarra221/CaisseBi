-- Reverts the unrequested "GERANT" role added in
-- 20260821020925_add_gerant_role. No User row ever used it; the 5
-- RolePermission rows it seeded (identical to MANAGER's) were removed
-- before this migration ran. Migration history is append-only, so this
-- reverts forward rather than editing the earlier migration file.
DELETE FROM `rolepermission` WHERE `role` = 'GERANT';

-- AlterTable
ALTER TABLE `rolepermission` MODIFY `role` ENUM('OWNER', 'MANAGER', 'CASHIER') NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('OWNER', 'MANAGER', 'CASHIER') NOT NULL DEFAULT 'CASHIER';

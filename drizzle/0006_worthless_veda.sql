ALTER TABLE `users` MODIFY COLUMN `id` binary(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID()));
ALTER TABLE `exercises` MODIFY COLUMN `set_count` smallint DEFAULT 0;--> statement-breakpoint
ALTER TABLE `exercises` MODIFY COLUMN `set_count` smallint;--> statement-breakpoint
ALTER TABLE `exercises` MODIFY COLUMN `rep_count` smallint DEFAULT 10;
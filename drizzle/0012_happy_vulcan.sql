ALTER TABLE `exercises` MODIFY COLUMN `id` binary(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID()));--> statement-breakpoint
ALTER TABLE `workoutExercises` MODIFY COLUMN `id` binary(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID()));--> statement-breakpoint
ALTER TABLE `workouts` MODIFY COLUMN `id` binary(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID()));--> statement-breakpoint
ALTER TABLE `exercises` ADD `user_id` binary(16) NOT NULL;--> statement-breakpoint
ALTER TABLE `workoutExercises` ADD `workout_id` binary(16) NOT NULL;--> statement-breakpoint
ALTER TABLE `workouts` ADD `user_id` binary(16) NOT NULL;
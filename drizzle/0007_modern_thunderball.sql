CREATE TABLE `exercises` (
	`id` binary(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
	`name` varchar(256) NOT NULL,
	`set_count` smallint NOT NULL,
	`rep_count` smallint,
	`duration_seconds` int,
	CONSTRAINT `exercises_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `workoutExercises` (
	`id` binary(16),
	CONSTRAINT `workoutExercises_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `workouts` (
	`id` binary(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
	`name` varchar(256) NOT NULL,
	CONSTRAINT `workouts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `name` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `workoutExercises` ADD CONSTRAINT `workoutExercises_id_workouts_id_fk` FOREIGN KEY (`id`) REFERENCES `workouts`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `workoutExercises` ADD CONSTRAINT `workoutExercises_id_exercises_id_fk` FOREIGN KEY (`id`) REFERENCES `exercises`(`id`) ON DELETE no action ON UPDATE no action;
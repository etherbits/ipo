ALTER TABLE `workoutExercises` DROP FOREIGN KEY `workoutExercises_id_workouts_id_fk`;
--> statement-breakpoint
ALTER TABLE `workoutExercises` DROP FOREIGN KEY `workoutExercises_id_exercises_id_fk`;
--> statement-breakpoint
ALTER TABLE `workoutExercises` MODIFY COLUMN `id` binary(16) NOT NULL;
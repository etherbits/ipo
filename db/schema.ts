import { sql } from "drizzle-orm";
import {
  binary,
  datetime,
  int,
  mysqlTable,
  smallint,
  varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: binary("id", { length: 16 })
    .primaryKey()
    .default(sql`(UUID_TO_BIN(UUID()))`),
  name: varchar("name", { length: 256 }).notNull(),
});

export const workouts = mysqlTable("workouts", {
  id: binary("id", { length: 16 })
    .primaryKey()
    .default(sql`(UUID_TO_BIN(UUID()))`),
  title: varchar("name", { length: 256 }).notNull(),
  userId: binary("user_id", { length: 16 }).notNull(),
});

export const exercise = mysqlTable("exercises", {
  id: binary("id", { length: 16 })
    .primaryKey()
    .default(sql`(UUID_TO_BIN(UUID()))`),
  title: varchar("name", { length: 256 }).notNull(),
  setCount: smallint("set_count").notNull(),
  repCount: smallint("rep_count"),
  durationSecs: int("duration_seconds"),
  userId: binary("user_id", { length: 16 }).notNull(),
});

export const workoutExercises = mysqlTable("workoutExercises", {
  id: binary("id", { length: 16 })
    .primaryKey()
    .default(sql`(UUID_TO_BIN(UUID()))`),
  workoutId: binary("workout_id", { length: 16 }).notNull(),
  exerciseId: binary("workout_id", { length: 16 }).notNull(),
});

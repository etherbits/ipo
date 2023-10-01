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
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
  userId: binary("user_id", { length: 16 }).notNull(),
});

export const exercises = mysqlTable("exercises", {
  id: binary("id", { length: 16 })
    .primaryKey()
    .default(sql`(UUID_TO_BIN(UUID()))`),
  title: varchar("name", { length: 256 }).notNull(),
  setCount: smallint("set_count").default(0),
  repCount: smallint("rep_count").default(10),
  durationSecs: int("duration_seconds"),
  createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`),
  userId: binary("user_id", { length: 16 }).notNull(),
});

export const workoutExercises = mysqlTable("workoutExercises", {
  id: binary("id", { length: 16 })
    .primaryKey()
    .default(sql`(UUID_TO_BIN(UUID()))`),
  workoutId: binary("workout_id", { length: 16 }).notNull(),
  exerciseId: binary("exercise_id", { length: 16 }).notNull(),
});

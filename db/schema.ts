import { sql } from "drizzle-orm";
import { binary, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: binary("id", { length: 16 }).primaryKey().default(sql`(UUID_TO_BIN(UUID()))`),
  name: varchar("name", { length: 256 }),
});

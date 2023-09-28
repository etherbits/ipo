import type { Config } from "drizzle-kit";
import { cwd } from "process";
import { loadEnvConfig } from '@next/env'

loadEnvConfig(cwd())

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  }
} satisfies Config;

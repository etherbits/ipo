import { lucia } from "lucia";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { nextjs_future } from "lucia/middleware";

const client = new PrismaClient();

export const auth = lucia({
  adapter: prisma(client),
  middleware: nextjs_future(),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  sessionCookie: { expires: false },
});

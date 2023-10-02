import { lucia } from "lucia";
import { prisma } from "@lucia-auth/adapter-prisma";
import { nextjs_future } from "lucia/middleware";
import { prismaClient } from "@/prisma/db";
import { cache } from "react";
import * as context from "next/headers";

export const auth = lucia({
  adapter: prisma(prismaClient),
  middleware: nextjs_future(),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  sessionCookie: { expires: false },
});

export const getPageSession = cache(() => {
  const authRequest = auth.handleRequest("GET", context);
  return authRequest.validate();
});

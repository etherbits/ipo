import { auth } from "@/lib/auth";
import { withParsedData } from "@/utils/endpoints";
import { formSchema } from "@/zodSchemas/signInSchema";
import { NextResponse } from "next/server";
import * as context from "next/headers";
import { LuciaError } from "lucia";

export async function POST(req: Request) {
  return withParsedData(req, formSchema, async ({ email, password }) => {
    try {
      // find user by key
      // and validate password
      const key = await auth.useKey("email", email.toLowerCase(), password);
      const session = await auth.createSession({
        userId: key.userId,
        attributes: {},
      });

      const authRequest = auth.handleRequest(req.method, context);
      authRequest.setSession(session);

      return NextResponse.redirect(new URL("/", req.url));
    } catch (e) {
      if (
        e instanceof LuciaError &&
        (e.message === "AUTH_INVALID_KEY_ID" ||
          e.message === "AUTH_INVALID_PASSWORD")
      ) {
        // user does not exist or invalid password
        return NextResponse.json(
          {
            error: "Incorrect username or password",
          },
          {
            status: 400,
          },
        );
      }
      return NextResponse.json(
        {
          error: "An unknown error occurred",
        },
        {
          status: 500,
        },
      );
    }
  });
}

import { auth } from "@/prisma/db";
import { withParsedData } from "@/utils/endpoints";
import { formSchema } from "@/zodSchemas/signUpSchema";
import { LuciaError } from "lucia";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return withParsedData(
    req,
    formSchema,
    async ({ email, username, password }) => {
      try {
        await auth.createUser({
          key: {
            providerId: "email",
            providerUserId: email.toLowerCase(),
            password,
          },
          attributes: {
            email,
            username,
          },
        });
      } catch (e) {
        if (e instanceof LuciaError && e.message === `AUTH_DUPLICATE_KEY_ID`) {
          return new NextResponse("Auth Error", {
            status: 409,
            statusText: "User with the following credentials already exists",
          });
        }

        return new NextResponse("Auth Error", {
          status: 500,
          statusText:
            "Something went wrong during user creation, user with the following credentials might already exist",
        });
      }

      return new NextResponse("ok");
    },
  );
}

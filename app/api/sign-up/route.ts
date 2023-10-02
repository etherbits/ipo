import { auth } from "@/lib/auth";
import { withParsedData } from "@/utils/endpoints";
import { formSchema } from "@/zodSchemas/signUpSchema";
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
        return new NextResponse("Auth Error", {
          status: 500,
          statusText:
            "Something went wrong during user creation, " +
            "user with the following credentials might already exist",
        });
      }

      return new NextResponse("ok");
    },
  );
}

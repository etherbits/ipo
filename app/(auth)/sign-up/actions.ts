"use server";

import { auth } from "@/prisma/db";
import { formSchema } from "./schema";
import * as z from "zod";

export async function onSubmit(values: z.infer<typeof formSchema>) {
  console.log('submitting...')
  console.log(values)
  auth.createUser({
    key: {
      providerId: values.username,
      providerUserId: values.username.toLowerCase(),
      password: values.password,
    },
    attributes: {
      username: values.username,
    },
  });
}

import * as z from "zod";

export const formSchema = z
  .object({
    username: z.string().min(1).max(64),
    password: z.string().min(1).max(256),
    confirmPassword: z.string().min(1).max(256),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

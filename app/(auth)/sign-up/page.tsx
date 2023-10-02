"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import FormInput from "@/components/ui/formInput";
import { formSchema } from "@/zodSchemas/signUpSchema";

export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "testuser",
      email: "testusr@gmail.com",
      password: "asdasd123",
      confirmPassword: "asdasd123",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await fetch("/api/sign-up", {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      console.error(res.statusText);
      return;
    }

    console.log("success");
  };

  return (
    <Card className="w-full mx-auto my-[20vh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center p-4 gap-6"
        >
          <h1>Sign Up</h1>
          <FormInput
            control={form.control}
            name="username"
            placeholder="user0"
          />
          <FormInput
            control={form.control}
            type="email"
            name="email"
            placeholder="mail@gmail.com"
          />
          <FormInput
            control={form.control}
            type="password"
            name="password"
            placeholder="******"
          />
          <FormInput
            control={form.control}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="******"
          />
          <Button>Submit</Button>
        </form>
      </Form>
    </Card>
  );
}

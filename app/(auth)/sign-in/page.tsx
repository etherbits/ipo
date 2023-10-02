"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import FormInput from "@/components/ui/formInput";
import { formSchema } from "@/zodSchemas/signInSchema";

export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "nika.qvrivishviliPC@gmail.com",
      password: "asdasd123",
    },
  });

  console.log(form.formState.errors.password);

  return (
    <Card className="w-full mx-auto my-[20vh]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (values) => {
            const res = await fetch("/api/sign-in", {
              method: "POST",
              body: JSON.stringify(values),
            });

            if (!res.ok) {
              console.error(res.statusText);
              return;
            }

            window.location.reload()

          })}
          className="flex flex-col items-center p-4 gap-6"
        >
          <h1>Sign Up</h1>
          <FormInput
            control={form.control}
            name="email"
            placeholder="example@gmail.com"
          />
          <FormInput
            control={form.control}
            type="password"
            name="password"
            placeholder="******"
          />
          <Button>Submit</Button>
          <Button
            type="button"
          >
            Test
          </Button>
        </form>
      </Form>
    </Card>
  );
}

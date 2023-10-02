"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "./schema";
import FormInput from "@/components/ui/formInput";

export default function SignUp() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full mx-auto my-[20vh]">
      <Form {...form}>
        <form
          action={() => onSubmit}
          className="flex flex-col items-center p-4 gap-6"
        >
          <h1>Sign Up</h1>
          <FormInput name="username" placeholder="DMayCry"/>
          <FormInput type="password" name="password" placeholder="******" />
          <Button>Submit</Button>
        </form>
      </Form>
    </Card>
  );
}

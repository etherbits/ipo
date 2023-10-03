"use client";
import { Card } from "./card";
import type { Exercise } from "@prisma/client";
import Icon from "./icon";
import { Form } from "./form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { exerciseSchema } from "@/zodSchemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "./formInput";
import { updateExercise } from "@/queries/exercise";
import { useRef } from "react";

type Props = {} & Exercise;

const ExerciseCard: React.FC<Props> = ({
  id,
  title,
  sets,
  reps,
  durationSec,
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const form = useForm<z.infer<typeof exerciseSchema>>({
    resolver: zodResolver(exerciseSchema),
    defaultValues: {
      title,
      sets,
      reps: reps || 0,
      durationSec: durationSec || 0,
    },
  });

  console.log(form.formState.errors);

  return (
    <Card>
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit((values) => {
            updateExercise(id, values);
          })}
          onChange={() => {
            if (!formRef.current) return;

            formRef.current.requestSubmit();
          }}
          className="flex flex-col px-4 py-3 items-center gap-4"
        >
          <FormInput
            control={form.control}
            name="title"
            className="border-none bg-transparent text-lg focus-visible:ring-none focus-visible:ring-offset-0 focus-visible:ring-0"
            withLabel={false}
            withMessage={false}
          />
          <div className="flex items-center gap-3 ml-auto">
            sets
            <FormInput
              className="w-[6ch] px-[2ch] text-end"
              control={form.control}
              name="sets"
              containerCN="w-fit"
              withLabel={false}
              withMessage={false}
            />
            <Icon name="X" className="w-5 h-5 stroke-[1px]" />
            reps
            <FormInput
              className="w-[6ch] px-[2ch] text-end"
              control={form.control}
              type="number"
              min={1}
              max={99}
              name="reps"
              containerCN="w-fit"
              withLabel={false}
              withMessage={false}
            />
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default ExerciseCard;

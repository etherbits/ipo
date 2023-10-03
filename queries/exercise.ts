"use server";
import { prismaClient } from "@/prisma/db";
import { exerciseSchema } from "@/zodSchemas/form";
import { z } from "zod";

export async function getExercises(userId: string, workoutId: string) {
  const exercises = await prismaClient.exercise.findMany({
    where: {
      userId,
      workoutId,
    },
  });

  return exercises;
}

export async function addExercise(userId: string, workoutId: string) {
  const newExercise = await prismaClient.exercise.create({
    data: {
      title: "Untitled Exercise",
      userId: userId,
      sets: 2,
      reps: 10,
      workoutId,
    },
  });

  return newExercise.id;
}

export async function updateExercise(
  id: string,
  values: z.infer<typeof exerciseSchema>,
) {
  console.log("update exercise")
  await prismaClient.exercise.update({
    where: { id },
    data: {
      ...values,
    },
  });
}

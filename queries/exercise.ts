import { prismaClient } from "@/prisma/db";

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

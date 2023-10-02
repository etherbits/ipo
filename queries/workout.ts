import { prismaClient } from "@/prisma/db";

export async function getWorkout(id: string) {
  const workout = await prismaClient.workout.findUnique({ where: { id } });
  return workout;
}

export async function getWorkouts(userId: string) {
  const workouts = await prismaClient.workout.findMany({
    where: {
      userId,
    },
  });

  return workouts;
}

export async function addWorkout(userId: string) {
  const newWorkout = await prismaClient.workout.create({
    data: {
      title: "Untitled Workout",
      userId: userId,
    },
  });

  return newWorkout.id;
}

export async function removeWorkouts(userId: string) {
  await prismaClient.workout.deleteMany({
    where: {
      userId,
    },
  });
}

import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { db } from "@/db/db";
import { exercises, users, workoutExercises, workouts } from "@/db/schema";
import { SQL, desc, eq, inArray, sql } from "drizzle-orm";

async function getWorkout(id: string) {
  const res = await db
    .select()
    .from(workouts)
    .where(sql`id=UUID_TO_BIN(${id})`)
    .limit(1);
  return res[0];
}

async function getExercises(workoutId: string) {
  try {
    const workoutExerciseList = await db
      .select({ exerciseId: sql`BIN_TO_UUID(exercise_id)` as SQL<string> })
      .from(workoutExercises)
      .where(sql`workout_id=UUID_TO_BIN(${workoutId})`);

    const exerciseIds = workoutExerciseList.map(
      (workoutExercise) => workoutExercise.exerciseId,
    );

    const exerciseList = await db
      .select()
      .from(exercises)
      .where(sql`BIN_TO_UUID(id) IN${exerciseIds}`);

    console.log(exerciseList.map((ex) => ex.id));

    return exerciseList;
  } catch (err) {
    return [];
  }
}

export default async function Workout({ params }: { params: { id: string } }) {
  const workout = await getWorkout(params.id);
  const exerciseList = await getExercises(params.id);

  async function addExercise() {
    "use server";

    //! temporary before auth
    const res = await db.select({ id: sql`BIN_TO_UUID(id)` }).from(users);

    //!

    await db.insert(exercises).values({
      title: "Untitled Exercise",
      userId: sql`UUID_TO_BIN(${res[0].id})`,
    });

    // hate that i have to do this ://////
    const newExercises = await db
      .select({
        id: sql`BIN_TO_UUID(id)` as SQL<string>,
        createdAt: exercises.createdAt,
      })
      .from(exercises)
      .orderBy(desc(exercises.createdAt));

    await db.insert(workoutExercises).values({
      workoutId: sql`UUID_TO_BIN(${params.id})`,
      exerciseId: sql`UUID_TO_BIN(${newExercises[0].id})`,
    });
  }

  return (
    <main>
      <section className="flex items-center mt-4 mb-6">
        <h1 className="text-2xl font-bold text-center">{workout.title}</h1>
        <form action={addExercise} className="ml-auto">
          <Button
            size="icon"
            className="bg-transparent border-none"
            variant="outline"
          >
            <Icon name="Plus" />
          </Button>
        </form>
      </section>
      <ul>
        {exerciseList.map((exercise) => (
          <li key={exercise.id}>{exercise.title}</li>
        ))}
      </ul>
    </main>
  );
}

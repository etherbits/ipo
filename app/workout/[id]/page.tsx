import { db } from "@/db/db";
import { workouts } from "@/db/schema";
import { sql } from "drizzle-orm";

async function getWorkout(id: string) {
  const res = await db
    .select()
    .from(workouts)
    .where(sql`id=UUID_TO_BIN(${id})`)
    .limit(1);
  return res[0];
}

export default async function Workout({ params }: { params: { id: string } }) {
  const workout = await getWorkout(params.id);
  return (
    <main>
      <h1>{workout.title}</h1>
    </main>
  );
}

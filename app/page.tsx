import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import WorkoutCard from "@/components/ui/workoutCard";
import { db } from "@/db/db";
import { users, workouts } from "@/db/schema";
import { SQL, desc, sql } from "drizzle-orm";
import { redirect } from "next/navigation";

async function getWorkouts() {
  const res = await db.select().from(workouts);
  return res;
}

export default async function Home() {
  async function addWorkout() {
    "use server";

    //! temporary before auth
    const res = await db.select({ id: sql`BIN_TO_UUID(id)` }).from(users);

    //!

    await db.insert(workouts).values({
      title: "Untitled Workout",
      userId: sql`UUID_TO_BIN(${res[0].id})`,
    });

    const newWorkouts = await db
      .select({
        id: sql`BIN_TO_UUID(id)` as SQL<string>,
        createdAt: workouts.createdAt,
      })
      .from(workouts)
      .orderBy(desc(workouts.createdAt));

    redirect(`/workout/${newWorkouts[0]?.id}`);
  }

  const workoutList = await getWorkouts();

  return (
    <main>
      <section className="flex items-center mt-4 mb-6">
        <h1 className="xm:absolute xm:left-1/2 xm:-translate-x-1/2 text-2xl font-bold text-center">
          Workouts
        </h1>
        <form action={addWorkout} className="ml-auto">
          <Button
            size="icon"
            className="bg-transparent border-none"
            variant="outline"
          >
            <Icon name="Plus" />
          </Button>
        </form>
      </section>
      <ul className="flex flex-col gap-5">
        {workoutList.map((workout) => {
          return <WorkoutCard key={workout.id} />;
        })}
      </ul>
    </main>
  );
}

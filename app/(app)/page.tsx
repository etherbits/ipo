import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import WorkoutCard from "@/components/ui/workoutCard";
import { getPageSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  addWorkout,
  getWorkouts,
  removeWorkouts,
} from "@/queries/workout";

export default async function Home() {
  const { user } = (await getPageSession()) as {
    user: { userId: string };
  };

  const workouts = await getWorkouts(user.userId);

  async function handleAddWorkout() {
    "use server";

    const newWorkoutId = await addWorkout(user.userId);

    redirect(`/workout/${newWorkoutId}`);
  }

  async function handleRemoveWorkouts() {
    "use server";
    removeWorkouts(user.userId);
  }

  return (
    <main>
      <section className="flex items-center mt-4 mb-6">
        <form action={handleRemoveWorkouts}>
          <Button
            size="icon"
            className="bg-transparent border-none"
            variant="outline"
          >
            <Icon name="Ban" />
          </Button>
        </form>
        <h1 className="xm:absolute xm:left-1/2 xm:-translate-x-1/2 text-2xl font-bold text-center">
          Workouts
        </h1>
        <form action={handleAddWorkout} className="ml-auto">
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
        {workouts.map((workout) => {
          return <WorkoutCard key={workout.id} {...workout} />;
        })}
      </ul>
    </main>
  );
}

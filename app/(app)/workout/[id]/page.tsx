import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { getPageSession } from "@/lib/auth";
import { addExercise, getExercises } from "@/queries/exercise";
import { getWorkout } from "@/queries/workout";

export default async function Workout({ params }: { params: { id: string } }) {
  const { user } = (await getPageSession()) as {
    user: { userId: string };
  };

  const workout = await getWorkout(params.id);
  const exerciseList = await getExercises(user.userId, params.id);

  if (!workout) {
    return (
      <main>
        <p>Workout does not exist</p>
      </main>
    );
  }

  async function handleAddExercise() {
    "use server";

    await addExercise(user.userId, params.id);
  }

  return (
    <main>
      <section className="flex items-center mt-4 mb-6">
        <h1 className="text-2xl font-bold text-center">{workout.title}</h1>
        <form action={handleAddExercise} className="ml-auto">
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

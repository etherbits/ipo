import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import WorkoutCard from "@/components/ui/workoutCard";

export default function Home() {
  return (
    <main className="">
      <section className="grid grid-cols-3 items-center mt-4 mb-6">
        <div />
        <h1 className="text-2xl font-bold text-center">Workouts</h1>
        <Button
          size="icon"
          className="ml-auto bg-transparent border-none"
          variant="outline"
        >
          <Icon name="Plus" />
        </Button>
      </section>
      <ul className="flex flex-col gap-5">
        <WorkoutCard />
      </ul>
    </main>
  );
}

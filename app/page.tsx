import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import WorkoutCard from "@/components/ui/workoutCard";

export default function Home() {
  return (
    <main className="">
      <section className="flex items-center mt-4 mb-6">
        <h1 className="xm:absolute xm:left-1/2 xm:-translate-x-1/2 text-2xl font-bold text-center">Workouts</h1>
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

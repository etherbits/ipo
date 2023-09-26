import WorkoutCard from "@/components/ui/workoutCard";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-2xl font-bold text-center mt-4 mb-6">Workouts</h1>
      <ul className="flex flex-col gap-5">
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </ul>
    </main>
  );
}

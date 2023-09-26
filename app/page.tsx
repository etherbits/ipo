import WorkoutCard from "@/components/ui/workoutCard";

export default function Home() {
  return (
    <main className="">
      <ul className="flex flex-col gap-5">
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </ul>
    </main>
  );
}

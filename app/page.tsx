import Icon from "@/components/Icon";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="">
      <ul>
        <Card className="flex items-center gap-6 px-6 py-3 bg-gradient-to-r from-zinc-950 to-zinc-900">
          <Icon name="Dumbbell" className="stroke-slate-500 w-7 h-7" />
          <div className="flex flex-col grow-[1] gap-1">
            <h2 className="text-xl">Upper body workout</h2>
            <div className="flex justify-between text-slate-400">
              <span>12 exercies</span>
            </div>
          </div>
        </Card>
      </ul>
    </main>
  );
}

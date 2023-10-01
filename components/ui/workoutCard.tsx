import Link from "next/link";
import { Card } from "./card";
import Icon from "./icon";
import React from "react";

type Props = {
  id: string;
  title: string;
};

const WorkoutCard: React.FC<Props> = ({ id, title }) => {
  return (
    <Link href={`/workout/${id}`} className="w-full text-start group">
      <Card className="transition-colors flex items-center gap-6 px-6 py-4 border-none bg-gradient-to-r from-zinc-900 to-zinc-950">
        <Icon
          name="Dumbbell"
          className="transition-colors stroke-slate-400 w-7 h-7 group-hover:stroke-red-500"
        />
        <div className="flex flex-col grow-[1] gap-1">
          <h2 className="text-xl text-slate-200">{title}</h2>
          <div className="flex justify-between text-slate-400">
            <span>12 exercies</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default WorkoutCard;

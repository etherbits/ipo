import { Card } from "./card";
import Icon from "./icon";
import React from 'react'

const WorkoutCard = () => {
  return (
    <button className="w-full text-start group">
      <Card className="transition-colors flex items-center gap-6 px-6 py-3 group-hover:border-red-500">
        <Icon name="Dumbbell" className="transition-colors stroke-slate-200 w-7 h-7 group-hover:stroke-red-500" />
        <div className="flex flex-col grow-[1] gap-1">
          <h2 className="text-xl text-slate-200">Upper body workout</h2>
          <div className="flex justify-between text-slate-400">
            <span>12 exercies</span>
          </div>
        </div>
      </Card>
    </button>
  )
}

export default WorkoutCard

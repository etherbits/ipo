"use client";
import Link from "next/link";
import React from "react";
import Icon from "./icon";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
  { name: "Stats", href: "/statistics", icon: "BarChart" },
  { name: "Weight", href: "/weight", icon: "Ruler" },
  { name: "Workouts", href: "/", icon: "Dumbbell" },
  { name: "Exercises", href: "/exercises", icon: "List" },
  { name: "Profile", href: "/profile", icon: "User" },
] as const;

const MobileNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex w-fit">
      <ul className="flex w-fit justify-between bg-zinc-950 rounded-full overflow-hidden shadow-lg">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-1 bg-transparent hover:bg-zinc-900 w-full h-full p-3 xm:p-4 ",
              )}
            >
              <Icon
                name={link.icon}
                className={cn("stroke-slate-600", {
                  "stroke-red-500": link.href === pathname,
                })}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;

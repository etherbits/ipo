"use client";
import React from "react";
import MobileNavigation from "./mobileNavigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const MobileActionBar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 w-full ">
      <div className="w-full h-fit items-center justify-center flex p-4">
        <div className="relative w-fit h-fit">
          <MobileNavigation />
          <div
            className={cn(
              "absolute top-0 left-0 w-full h-full bg-black rounded-full",
              {
                hidden: !pathname.startsWith("/workout/"),
              },
            )}
          >
            <Button className="w-full h-full rounded-full text-base font-semibold">
              Start
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileActionBar;

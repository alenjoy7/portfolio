import React from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  [key: string]: any;
};

const Marquee = ({
  children,
  vertical = false,
  repeat = 5,
  pauseOnHover = false,
  reverse = false,
  className,
  ...props
}: MarqueeProps) => {
  return (
    <div
      {...props}
      className={cn(
        "group relative flex h-full w-full p-2 [--duration:15s] [--gap:20px] lg:[--gap:120px] gap-(--gap)",
        {
          "flex-col": vertical,
          "flex-row": !vertical,
        },
        className
      )}
    >
      {Array.from({ length: repeat }).map((_,idx) => (
        <div
        key={idx}
          className={cn("flex shrink-0 gap-(--gap)", {
            "group-hover:paused": pauseOnHover,
            "direction-reverse": reverse,
            "animate-marqueeHorizontal flex-row": !vertical,
            "animate-marqueeVertical flex-col": vertical,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export default Marquee;

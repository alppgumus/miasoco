"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "TOP_RIGHT" | "RIGHT" | "BOTTOM_RIGHT" | "BOTTOM" | "BOTTOM_LEFT" | "LEFT" | "TOP_LEFT";

type HoverBorderGradientProps = {
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  href?: string;
} & React.HTMLAttributes<HTMLElement>;

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  href,
  ...props
}: React.PropsWithChildren<HoverBorderGradientProps>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile - disable animation on mobile for performance
    setIsMobile(window.innerWidth < 768);
  }, []);

  const getGradientPosition = (dir: Direction): { x: string; y: string } => {
    switch (dir) {
      case "TOP": return { x: "50%", y: "0%" };
      case "TOP_RIGHT": return { x: "85%", y: "15%" };
      case "RIGHT": return { x: "100%", y: "50%" };
      case "BOTTOM_RIGHT": return { x: "85%", y: "85%" };
      case "BOTTOM": return { x: "50%", y: "100%" };
      case "BOTTOM_LEFT": return { x: "15%", y: "85%" };
      case "LEFT": return { x: "0%", y: "50%" };
      case "TOP_LEFT": return { x: "15%", y: "15%" };
      default: return { x: "50%", y: "0%" };
    }
  };

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "TOP_RIGHT", "RIGHT", "BOTTOM_RIGHT", "BOTTOM", "BOTTOM_LEFT", "LEFT", "TOP_LEFT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex + 1) % directions.length
      : (currentIndex - 1 + directions.length) % directions.length;
    return directions[nextIndex];
  };

  const pos = getGradientPosition(direction);
  const movingMap: Record<Direction, string> = {
    TOP: `radial-gradient(12% 12% at ${pos.x} ${pos.y}, #11fb96 0%, rgba(17, 251, 150, 0) 100%)`,
    TOP_RIGHT: `radial-gradient(12% 12% at ${pos.x} ${pos.y}, #11fb96 0%, rgba(17, 251, 150, 0) 100%)`,
    RIGHT: `radial-gradient(12% 12% at ${pos.x} ${pos.y}, #11fb96 0%, rgba(17, 251, 150, 0) 100%)`,
    BOTTOM_RIGHT: `radial-gradient(12% 12% at ${pos.x} ${pos.y}, #11fb96 0%, rgba(17, 251, 150, 0) 100%)`,
    BOTTOM: `radial-gradient(12% 12% at ${pos.x} ${pos.y}, #11fb96 0%, rgba(17, 251, 150, 0) 100%)`,
    BOTTOM_LEFT: `radial-gradient(12% 12% at ${pos.x} ${pos.y}, #11fb96 0%, rgba(17, 251, 150, 0) 100%)`,
    LEFT: `radial-gradient(12% 12% at ${pos.x} ${pos.y}, #11fb96 0%, rgba(17, 251, 150, 0) 100%)`,
    TOP_LEFT: `radial-gradient(12% 12% at ${pos.x} ${pos.y}, #11fb96 0%, rgba(17, 251, 150, 0) 100%)`,
  };

  const highlight = `radial-gradient(75% 181.16% at ${pos.x} ${pos.y}, #11fb96 0%, rgba(17, 251, 150, 0.5) 100%)`;

  // Only run animation on desktop and only when not hovered
  useEffect(() => {
    if (!hovered && !isMobile) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, (duration * 1000) / 2);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, isMobile]);

  // Simple static button on mobile
  if (isMobile) {
    return (
      <Tag
        href={href}
        className={cn(
          "relative flex rounded-full border-2 border-[#11fb96]/30 content-center bg-white transition duration-300 items-center flex-col flex-nowrap h-min justify-center overflow-visible p-px w-fit",
          containerClassName
        )}
        {...props}
      >
        <div
          className={cn(
            "relative w-auto text-black z-10 bg-white px-4 py-2 rounded-[inherit]",
            className
          )}
        >
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border-2 border-[#11fb96]/20 content-center bg-white hover:bg-white/90 transition duration-500 items-center flex-col flex-nowrap h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "relative w-auto text-black z-10 bg-white px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 1,
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{
          ease: "easeOut",
          duration: hovered ? 0.3 : duration ?? 1
        }}
      />
    </Tag>
  );
}
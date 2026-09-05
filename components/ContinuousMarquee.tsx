"use client";

import { motion } from "framer-motion";

type ContinuousMarqueeProps = {
  items?: string[];
  speed?: number;
  className?: string;
};

const defaultItems = [
  "FULL STACK WEB DEVELOPER",
  "NEXT.JS",
  "REACT",
  "WEB AUTOMATION & PUPPETEER",
  "LARAVEL & PHP",
  "NODE.JS & REDIS",
  "MYSQL & SQLITE",
];

export function ContinuousMarquee({
  items = defaultItems,
  speed = 25,
  className = "",
}: ContinuousMarqueeProps) {
  const content = items.join("  ✦  ") + "  ✦  ";

  return (
    <div
      className={`w-full overflow-hidden flex whitespace-nowrap border-y border-neutral-300 bg-white py-4 select-none ${className}`}
    >
      <motion.div
        className="flex shrink-0 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        <span className="shrink-0 flex items-center whitespace-nowrap display-font text-2xl sm:text-3xl md:text-4xl text-[#111111] tracking-wider uppercase pr-8">
          {content}
        </span>
        <span className="shrink-0 flex items-center whitespace-nowrap display-font text-2xl sm:text-3xl md:text-4xl text-[#111111] tracking-wider uppercase pr-8">
          {content}
        </span>
      </motion.div>
    </div>
  );
}

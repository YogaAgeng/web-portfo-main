"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/projects";

export function ProjectsList() {
  const [activeProject, setActiveProject] =
    useState<(typeof projects)[number] | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.25 });
  const smoothY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.25 });

  const handleMove = (event: React.MouseEvent<HTMLUListElement>) => {
    x.set(event.clientX + 28);
    y.set(event.clientY + 16);
  };

  return (
    <div className="relative">
      <motion.ul
        onMouseMove={handleMove}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="flex flex-col gap-10 md:gap-14"
      >
        {projects.map((project, index) => (
          <motion.li
            key={project.slug}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-white/10 py-6 md:py-8"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block w-full text-left"
              onFocus={() => setActiveProject(project)}
              onBlur={() => setActiveProject(null)}
            >
              <p className="display-font text-[clamp(2rem,5.6vw,5.2rem)] leading-tight text-foreground transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent">
                {project.name}
              </p>
              <p className="mt-1 text-sm tracking-wide text-muted uppercase md:text-base">
                {project.listStack}
              </p>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            key={activeProject.slug}
            className="pointer-events-none fixed top-0 left-0 z-[90] hidden w-[260px] overflow-hidden rounded-xl border border-white/10 bg-black/80 shadow-2xl md:block lg:w-[300px]"
            style={{ x: smoothX, y: smoothY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={activeProject.previewImage}
              alt={activeProject.name}
              width={640}
              height={400}
              className="h-auto w-full object-cover"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

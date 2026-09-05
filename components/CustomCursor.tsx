"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.22 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.22 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const syncPointer = () => setIsPointerFine(media.matches);

    syncPointer();
    media.addEventListener("change", syncPointer);

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setIsHidden(false);
    };

    const handleLeave = () => setIsHidden(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);

    return () => {
      media.removeEventListener("change", syncPointer);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, [x, y]);

  if (!isPointerFine) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[60] h-2.5 w-2.5 rounded-full bg-accent"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: isHidden ? 0 : 1, scale: isHidden ? 0.65 : 1 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[59] h-9 w-9 rounded-full border border-white/20"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: isHidden ? 0 : 1, scale: isHidden ? 0.8 : 1 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { EASE_OUT_QUINT, DUR } from "@/lib/motion";

/**
 * Generic fade + translateY reveal — the only motion primitive most sections need.
 * Exact constants from the Linear teardown: opacity 0→1 + translateY 14px→0,
 * ease-out-quint, 15% intersection threshold, single-shot.
 */
const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DUR.medium,
      ease: [...EASE_OUT_QUINT],
    },
  },
};

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "p" | "h2" | "h3" | "span";
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={defaultVariants}
      transition={{ delay, duration: DUR.medium, ease: [...EASE_OUT_QUINT] }}
    >
      {children}
    </Comp>
  );
}

"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, DUR, STAGGER } from "@/lib/motion";

type Scale = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Normalized typographic scale.
 * Base 1.6 ratio between steps, all clamps share the same vw-to-rem proportion
 * so the composition reads as one harmonic system rather than ad-hoc tuning.
 */
/**
 * Mobile mins are tuned so the longest single English aviation word ("AIRWORTHINESS",
 * 13 chars, "INFRASTRUCTURE", 14 chars) fits within a 393px viewport with 24px padding
 * each side ≈ 345px usable. xl at 3.2rem (51px) × 14 chars × ~0.5 = ~357px (acceptable).
 */
const scaleMap: Record<Scale, string> = {
  xs: "text-[clamp(0.875rem,1.6vw,1.5rem)]",
  sm: "text-[clamp(1.2rem,2.4vw,2.2rem)]",
  md: "text-[clamp(1.9rem,4vw,3.6rem)]",
  lg: "text-[clamp(2.6rem,6.4vw,5.8rem)]",
  xl: "text-[clamp(3.2rem,9vw,8rem)]",
};

/**
 * Mixed-scale typographic composition — Urban Jürgensen's signature.
 * Articles/prepositions tiny, nouns/verbs huge, all same serif family.
 *
 * Pass an array of { word, scale } pairs. Optionally pass `reveal` to play a staggered
 * word-by-word reveal on mount (used for the hero where the headline appears after the
 * video lands its final frame).
 */
export function MixedScaleHeadline({
  words,
  reveal = false,
  className = "",
}: {
  words: readonly { readonly word: string; readonly scale: Scale }[];
  reveal?: boolean;
  className?: string;
}) {
  return (
    <h1
      className={`display font-medium uppercase leading-[0.92] text-balance flex flex-wrap items-baseline gap-y-1 ${className}`}
    >
      {/* Word gap via mr in em on each span: em tracks the WORD's own font size,
          so spacing stays proportional even between two xl words. A gap-x on the
          container would use the h1's base font size and render ~3px. */}
      {words.map(({ word, scale }, i) => {
        const spacing = i < words.length - 1 ? "mr-[0.28em]" : "";
        return reveal ? (
          <motion.span
            key={`${word}-${i}`}
            className={`${scaleMap[scale]} inline-block align-baseline ${spacing}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.05 + i * STAGGER.normal,
              duration: DUR.medium,
              ease: [...EASE_OUT_EXPO],
            }}
          >
            {word}
          </motion.span>
        ) : (
          <span
            key={`${word}-${i}`}
            className={`${scaleMap[scale]} inline-block align-baseline ${spacing}`}
          >
            {word}
          </span>
        );
      })}
    </h1>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { useScrollProgress } from "./useScrollProgress";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/—";

/**
 * Scroll-driven glyph-scramble eyebrow (Platoon pattern).
 * As the parent section passes through the viewport, the text scrambles letter-by-letter
 * and resolves to the target string. Tied to scroll progress, not time — scrubs backwards.
 *
 * For server-rendering safety, render the target string statically and overlay the
 * client-side scrambling.
 */
export function DecoderEyebrow({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Map progress (0 → 1) onto a "resolve point" per character.
  // First few characters resolve at low progress, last ones at high progress.
  const display = useMemo(() => {
    if (!mounted) return text;
    // Use a window of 0.15 → 0.55 of the scroll to do the reveal so it fires once the
    // eyebrow is centered, then settles before the body copy is read.
    const start = 0.15;
    const end = 0.55;
    const p = Math.max(0, Math.min(1, (progress - start) / (end - start)));
    return text
      .split("")
      .map((ch, i) => {
        const charThreshold = (i + 1) / text.length;
        if (p >= charThreshold) return ch;
        if (ch === " " || ch === "·") return ch;
        // Random glyph based on (i, scroll bucket) — deterministic-enough to feel intentional
        const bucket = Math.floor(p * text.length * 4);
        return GLYPHS[(i * 7 + bucket * 13) % GLYPHS.length];
      })
      .join("");
  }, [mounted, progress, text]);

  return (
    <div
      ref={ref}
      className={`eyebrow tabular-nums ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">{display}</span>
    </div>
  );
}

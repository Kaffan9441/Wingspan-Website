"use client";

import { useEffect, useMemo, useState } from "react";
import { useScrollProgress } from "./useScrollProgress";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/—";

export function DecoderEyebrow({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const display = useMemo(() => {
    // On touch devices and before mount, just show the plain text — no scroll effect.
    // Each DecoderEyebrow instance adds a scroll listener + React re-render on every
    // scroll frame. On mobile with 5 instances on the home page, this is too expensive.
    if (!mounted || isTouch) return text;
    const start = 0.15;
    const end = 0.55;
    const p = Math.max(0, Math.min(1, (progress - start) / (end - start)));
    return text
      .split("")
      .map((ch, i) => {
        const charThreshold = (i + 1) / text.length;
        if (p >= charThreshold) return ch;
        if (ch === " " || ch === "·") return ch;
        const bucket = Math.floor(p * text.length * 4);
        return GLYPHS[(i * 7 + bucket * 13) % GLYPHS.length];
      })
      .join("");
  }, [mounted, isTouch, progress, text]);

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

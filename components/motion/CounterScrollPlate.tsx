"use client";

import { type CSSProperties, type ReactNode } from "react";
import { useScrollProgress } from "./useScrollProgress";

/**
 * Two counter-scrolling editorial photo plates around a centered quote (Platoon pattern).
 * Pass `direction="up"` to translate that plate upward as the user scrolls;
 * `direction="down"` to translate downward. The intensity is in `range` pixels.
 */
export function CounterScrollPlate({
  children,
  direction = "up",
  range = 220,
  className = "",
  style,
}: {
  children: ReactNode;
  direction?: "up" | "down";
  range?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  // progress 0 → 1; we want a -range → +range translation, mid-point at progress 0.5
  const sign = direction === "up" ? -1 : 1;
  const ty = sign * (progress - 0.5) * 2 * range;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(0, ${ty.toFixed(1)}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

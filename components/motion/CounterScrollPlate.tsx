"use client";

import { type CSSProperties, type ReactNode } from "react";
import { useScrollProgress } from "./useScrollProgress";

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

  const sign = direction === "up" ? -1 : 1;
  const ty = sign * (progress - 0.5) * 2 * range;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        // No willChange — it forces a GPU compositor layer and drains mobile memory.
        // The scroll effect is already smooth without it on modern browsers.
        transform: `translate3d(0, ${ty.toFixed(1)}px, 0)`,
      }}
    >
      {children}
    </div>
  );
}

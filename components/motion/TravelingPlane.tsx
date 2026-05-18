"use client";

import { useScrollProgress } from "./useScrollProgress";

/**
 * A small line-illustration aircraft that travels left → right along a runway line
 * as the section scrolls through the viewport. Borrowed from Platoon Aviation's
 * "893 meters" mechanic, adapted to Wingspan's palette.
 *
 * The plane starts at the left endpoint at ~20% scroll progress, reaches the right
 * endpoint at ~80%. Two endpoint dots flank the line.
 */
export function TravelingPlane({
  startLabel,
  endLabel,
  annotation,
}: {
  startLabel?: string;
  endLabel?: string;
  annotation?: string;
}) {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  // Map raw scroll progress (0–1) to plane travel (0–1) with a 20%–80% active window
  const travel = Math.min(Math.max((progress - 0.2) / 0.6, 0), 1);
  const left = `${travel * 100}%`;

  return (
    <div ref={ref} className="relative w-full">
      {/* The line + endpoints + plane */}
      <div className="relative h-12 w-full">
        {/* Hairline runway */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-on-dark/30" />
        {/* Left endpoint */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-on-dark/70" />
        {/* Right endpoint */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-on-dark/70" />

        {/* Traveling plane */}
        <div
          className="absolute top-1/2 will-change-transform"
          style={{
            left,
            transform: "translate(-50%, -50%)",
            transition: "left 60ms linear",
          }}
          aria-hidden
        >
          <PlaneSilhouette />
        </div>
      </div>

      {/* Endpoint labels + annotation */}
      {(startLabel || endLabel || annotation) ? (
        <div className="mt-4 flex items-start justify-between text-on-dark/55 text-[11px] tracking-[0.22em] uppercase font-mono">
          <span>{startLabel ?? ""}</span>
          {annotation ? (
            <span className="text-center max-w-[24ch] leading-[1.5]">
              {annotation}
            </span>
          ) : null}
          <span className="text-right">{endLabel ?? ""}</span>
        </div>
      ) : null}
    </div>
  );
}

function PlaneSilhouette() {
  return (
    <svg
      viewBox="0 0 200 70"
      width="120"
      height="42"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
      strokeLinecap="round"
      className="text-on-dark"
    >
      {/* Fuselage — long capsule with pointed nose right, tail left */}
      <path d="M 18 35 L 30 28 L 165 28 L 188 33 L 192 35 L 188 37 L 165 42 L 30 42 L 18 35 Z" />
      {/* Cockpit window glint */}
      <path d="M 170 31 L 184 33.5 L 184 35.5 L 170 35.5 Z" fill="currentColor" />
      {/* Tail fin */}
      <path d="M 30 28 L 22 8 L 32 8 L 42 28" />
      {/* Wing (foreground) */}
      <path d="M 88 35 L 70 56 L 95 56 L 110 35" />
      {/* Engine pod */}
      <ellipse cx="98" cy="46" rx="7" ry="3" />
      <path d="M 91 46 L 105 46" />
    </svg>
  );
}

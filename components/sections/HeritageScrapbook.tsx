"use client";

import { scrapbook } from "@/lib/content";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Placeholder } from "@/components/ui/Placeholder";

/**
 * Heritage scrapbook — UJ-style editorial collage on cream.
 * Asymmetric grid of: B&W docu photos, technical drawings, handwritten notes,
 * paper-label cutouts, painter's-tape tabs. Material metaphor proves the 40 years.
 *
 * Tiles use Tailwind's grid + col-span / row-span for the asymmetric layout, with
 * varying rotations and tape decorations. Image placeholders use a paper-textured
 * fallback gradient until the Gemini assets are generated.
 */

/**
 * Mobile defaults to full-width (2-col grid, all tiles span 2 cols) with varying
 * row-spans for visual rhythm. Desktop (md+) returns to the asymmetric editorial grid.
 */
const sizeMap: Record<"sm" | "md" | "lg" | "xl", string> = {
  sm: "col-span-2 row-span-1 md:col-span-3 md:row-span-2",
  md: "col-span-2 row-span-2 md:col-span-4 md:row-span-2",
  lg: "col-span-2 row-span-3 md:col-span-5 md:row-span-2",
  xl: "col-span-2 row-span-3 md:col-span-12 md:row-span-4",
};

const tapeStyles: Record<string, React.CSSProperties> = {
  "top-left": {
    top: "-12px",
    left: "12%",
    width: "70px",
    height: "20px",
    transform: "rotate(-8deg)",
  },
  "bottom-right": {
    bottom: "-10px",
    right: "12%",
    width: "70px",
    height: "20px",
    transform: "rotate(6deg)",
  },
};

const placeholderBg = (kind: string): React.CSSProperties => {
  switch (kind) {
    case "blueprint":
      return {
        background:
          "linear-gradient(135deg, #efe8da, #e3dac4 60%, #d7c8a8), repeating-linear-gradient(0deg, rgba(26, 24, 20, 0.08) 0 1px, transparent 1px 24px)",
      };
    case "note":
      return {
        background:
          "linear-gradient(180deg, #f6f0e3, #ece4cf), repeating-linear-gradient(0deg, rgba(31, 58, 138, 0.06) 0 1px, transparent 1px 28px)",
      };
    case "image":
      return {
        background:
          "linear-gradient(135deg, #2c2a25 0%, #1a1814 100%)",
      };
    default:
      return { background: "var(--surface-paper)" };
  }
};

export function HeritageScrapbook() {
  return (
    <section className="relative bg-paper text-ink py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="eyebrow text-muted tracking-[0.22em] mb-6">
            · 40 YEARS · ARCHIVED ·
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="display uppercase font-semibold text-[clamp(2.2rem,6vw,5rem)] leading-[0.95] tracking-[-0.022em] max-w-[16ch] mb-16 md:mb-24">
            Not just told. Proven.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[140px] md:auto-rows-[180px] gap-4 md:gap-6">
          {scrapbook.map((rawTile, i) => {
            const tile = rawTile as {
              type: string;
              src?: string;
              alt?: string;
              rotation?: number;
              size?: "sm" | "md" | "lg" | "xl";
              tape?: string;
            };
            const sizeKey = tile.size ?? "sm";
            const sizeClass = sizeMap[sizeKey];
            const rotation = tile.rotation ?? 0;

            const variant =
              tile.type === "blueprint"
                ? "blueprint"
                : tile.type === "note"
                ? "note"
                : tile.type === "label"
                ? "note"
                : "bw";

            const hasSrc = Boolean(tile.src);

            return (
              <ScrollReveal
                key={i}
                delay={i * 0.03}
                className={`${sizeClass} relative`}
              >
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    boxShadow:
                      "0 12px 24px -16px rgba(26, 24, 20, 0.35), 0 4px 8px -6px rgba(26, 24, 20, 0.2)",
                  }}
                >
                  {hasSrc && tile.src ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${tile.src})` }}
                      role="img"
                      aria-label={tile.alt}
                    />
                  ) : (
                    <Placeholder variant={variant} label={tile.type.toUpperCase()} />
                  )}
                  {tile.type === "note" && !hasSrc ? (
                    <div className="absolute inset-0 flex items-center justify-center px-4">
                      <span className="text-cobalt text-[14px] italic font-serif text-center leading-snug opacity-80">
                        Karachi airfield
                        <br />
                        Mar 1992
                      </span>
                    </div>
                  ) : null}
                  {tile.type === "blueprint" && !hasSrc ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        viewBox="0 0 200 120"
                        className="w-3/4 opacity-50"
                        aria-hidden
                      >
                        <ellipse
                          cx="100"
                          cy="60"
                          rx="78"
                          ry="14"
                          fill="none"
                          stroke="#1A1814"
                          strokeWidth="0.7"
                        />
                        <path
                          d="M22 60 L100 30 L178 60 L100 90 Z"
                          fill="none"
                          stroke="#1A1814"
                          strokeWidth="0.7"
                        />
                        <line
                          x1="100"
                          y1="30"
                          x2="100"
                          y2="90"
                          stroke="#1A1814"
                          strokeWidth="0.5"
                        />
                        <line
                          x1="22"
                          y1="60"
                          x2="178"
                          y2="60"
                          stroke="#1A1814"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </div>
                  ) : null}
                  {"tape" in tile && tile.tape ? (
                    <div
                      className="absolute bg-cobalt/40 mix-blend-multiply pointer-events-none"
                      style={tapeStyles[tile.tape]}
                    />
                  ) : null}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

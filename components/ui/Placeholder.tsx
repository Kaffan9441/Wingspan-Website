/**
 * Tinted CSS placeholder for image slots until Gemini-generated visuals arrive.
 * Looks intentional — feels like a tinted photo plate, not a broken image.
 *
 * Variants:
 *  - "photo"     — warm-to-cool documentary photo grade (services, atmospheres)
 *  - "bw"        — desaturated charcoal documentary B&W (scrapbook B&W tiles)
 *  - "blueprint" — aged paper with hairline grid (scrapbook blueprints)
 *  - "note"      — warm cream paper with handwritten note overlay
 */

type Variant = "photo" | "bw" | "blueprint" | "note";

const bg: Record<Variant, string> = {
  photo: [
    "radial-gradient(ellipse 110% 70% at 60% 30%, rgba(202, 182, 161, 0.42) 0%, rgba(26, 24, 20, 0.0) 55%)",
    "radial-gradient(ellipse 80% 60% at 20% 75%, rgba(15, 61, 46, 0.32) 0%, rgba(26, 24, 20, 0) 60%)",
    "linear-gradient(135deg, #2A2520 0%, #3A332B 40%, #1A1814 100%)",
  ].join(", "),
  bw: [
    "radial-gradient(ellipse 100% 70% at 50% 30%, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 60%)",
    "linear-gradient(180deg, #2C2A26 0%, #1A1814 100%)",
  ].join(", "),
  blueprint: [
    "repeating-linear-gradient(0deg, rgba(31, 58, 138, 0.05) 0 1px, transparent 1px 18px)",
    "repeating-linear-gradient(90deg, rgba(31, 58, 138, 0.05) 0 1px, transparent 1px 18px)",
    "linear-gradient(135deg, #efe8da 0%, #e3dac4 60%, #d7c8a8 100%)",
  ].join(", "),
  note: [
    "repeating-linear-gradient(0deg, rgba(31, 58, 138, 0.06) 0 1px, transparent 1px 26px)",
    "linear-gradient(180deg, #f6f0e3 0%, #ece4cf 100%)",
  ].join(", "),
};

export function Placeholder({
  variant = "photo",
  label,
  className = "",
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ background: bg[variant] }}
      role="img"
      aria-label={label ?? `${variant} placeholder`}
    >
      {/* Film grain overlay using SVG noise */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay pointer-events-none"
        aria-hidden
      >
        <filter id={`noise-${variant}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#noise-${variant})`} />
      </svg>

      {label ? (
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
          <span className="text-on-dark/55 text-[10px] tracking-[0.22em] uppercase font-mono">
            {label}
          </span>
          <span className="text-on-dark/30 text-[9px] tracking-[0.16em] uppercase font-mono">
            PENDING
          </span>
        </div>
      ) : null}
    </div>
  );
}

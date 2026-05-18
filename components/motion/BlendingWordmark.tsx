import { type ReactNode } from "react";

/**
 * Sticky `mix-blend-mode: exclusion` wordmark — the page's narrative spine.
 * Borrowed from Urban Jürgensen. One giant WINGSPAN INNOVATIONS rides centered through
 * the scroll, color-inverting against each backdrop.
 *
 * Implementation: an absolute-positioned overlay covers the children's layout area,
 * inside which a sticky element holds the wordmark at viewport center via flex.
 * Children layout normally; the wordmark overlays them.
 *
 * Server component — no animation needed.
 */
export function BlendingWordmark({
  children,
  label = "WINGSPAN INNOVATIONS",
  className = "",
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Content layer — scrolls normally */}
      <div className="relative z-[1]">{children}</div>

      {/* Wordmark overlay — absolute over the children, sticky inside */}
      <div
        className="pointer-events-none absolute inset-0 z-[20]"
        aria-hidden
      >
        <div
          className="sticky top-0 h-screen flex items-center justify-center"
          style={{ mixBlendMode: "exclusion" }}
        >
          <span
            className="display uppercase font-medium select-none leading-[0.86] tracking-[-0.022em] text-center px-6"
            style={{
              color: "#F2EDE5",
              fontSize: "clamp(3rem, 12vw, 12rem)",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

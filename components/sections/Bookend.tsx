import Image from "next/image";
import { brand } from "@/lib/content";
import { type ReactNode } from "react";

/**
 * Opening + closing wordmark bookend on cream.
 * The brand mark — actual logo PNG at huge scale — IS the hero. No reinterpretation.
 *
 * Server component, no entry animation. The page lands directly on this view.
 *
 * Variants:
 *  - "open"   — first viewport.
 *  - "close"  — last viewport. Includes optional CTA below the wordmark.
 */
export function Bookend({
  variant,
  cta,
}: {
  variant: "open" | "close";
  cta?: ReactNode;
}) {
  return (
    <section
      className={`relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-paper text-ink overflow-hidden`}
    >
      <div className="flex flex-col items-center w-full">
        <Image
          src="/brand/wingspan-logo-original.png"
          alt={brand.name}
          width={1563}
          height={1563}
          priority
          className="w-[min(78vw,560px)] md:w-[min(60vw,720px)] h-auto select-none"
        />

        <div className="mt-10 md:mt-14 eyebrow text-muted text-[11px] md:text-[12px] tracking-[0.42em]">
          · SINCE {brand.since} · KARACHI · PAKISTAN ·
        </div>
      </div>

      {cta ? <div className="mt-12 md:mt-14">{cta}</div> : null}

      {variant === "open" ? (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 eyebrow text-muted text-[11px] tracking-[0.3em]">
          SCROLL ↓
        </div>
      ) : null}
    </section>
  );
}

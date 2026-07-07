"use client";

import { philosophy } from "@/lib/content";
import { CounterScrollPlate } from "@/components/motion/CounterScrollPlate";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

/**
 * Philosophy quote with two counter-scrolling editorial photo plates (Platoon pattern).
 * One plate rises, the other falls, around a centered serif pull-quote.
 *
 * Plates use object-cover with a slight grayscale + desaturation so the imagery sits
 * back as atmosphere, not competing with the quote.
 */
export function PhilosophyQuote() {
  return (
    <section className="relative bg-paper text-ink py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
          {/* Left plate — rises */}
          <CounterScrollPlate
            direction="up"
            range={180}
            className="col-span-3 hidden md:block"
          >
            <div
              className="w-full aspect-[3/4] bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/generated/atmosphere-runway-dawn.jpg)",
                filter: "saturate(0.55) brightness(0.85)",
              }}
              role="img"
              aria-label="Atmosphere: runway at dawn"
            />
          </CounterScrollPlate>

          {/* Quote */}
          <div className="col-span-12 md:col-span-6 text-center md:px-4">
            <ScrollReveal>
              <div className="eyebrow text-muted tracking-[0.22em] mb-8">
                · PHILOSOPHY ·
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <blockquote className="display italic text-[clamp(1.4rem,3vw,2.5rem)] leading-[1.25] tracking-[-0.018em] text-ink">
                &ldquo;{philosophy.quote}&rdquo;
              </blockquote>
            </ScrollReveal>
            <ScrollReveal delay={0.18}>
              <div className="mt-10 eyebrow text-muted tracking-[0.18em]">
                {philosophy.attribution}
              </div>
            </ScrollReveal>
          </div>

          {/* Right plate — falls */}
          <CounterScrollPlate
            direction="down"
            range={180}
            className="col-span-3 hidden md:block"
          >
            <div
              className="w-full aspect-[3/4] bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/generated/atmosphere-karachi-twilight.jpg)",
                filter: "saturate(0.55) brightness(0.85)",
              }}
              role="img"
              aria-label="Atmosphere: Karachi terminal at twilight"
            />
          </CounterScrollPlate>
        </div>
      </div>
    </section>
  );
}

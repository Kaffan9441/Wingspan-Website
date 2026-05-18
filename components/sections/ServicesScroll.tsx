"use client";

import { services } from "@/lib/content";
import { MixedScaleHeadline } from "@/components/motion/MixedScaleHeadline";
import { DecoderEyebrow } from "@/components/motion/DecoderEyebrow";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";

/**
 * Services scroll — five full-bleed cinematic chapter moments.
 * Each service is a 100vh full-bleed background photo with text overlay.
 * Text alternates bottom-left / bottom-right per chapter. Decoder eyebrow + chapter
 * number top-left, mixed-scale headline + value prop + read-on bottom anchor.
 *
 * Layout intentionally mirrors the main hero — every service feels like its own
 * editorial chapter, not a generic card.
 */
export function ServicesScroll() {
  return (
    <section className="relative bg-paper text-ink">
      {/* Section intro */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-32 md:pt-56 pb-16 md:pb-24">
        <ScrollReveal>
          <div className="eyebrow text-muted tracking-[0.22em] mb-8">
            · WHAT WE DO ·
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="display uppercase font-semibold text-ink text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.025em] max-w-[16ch]">
            Five practices.
            <br />
            One standard.
          </h2>
        </ScrollReveal>
      </div>

      {/* Five chapter moments — full-bleed image with text overlay */}
      <div>
        {services.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className="relative w-full min-h-screen overflow-hidden bg-charcoal text-on-dark"
            >
              {/* Full-bleed image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
                aria-label={`${s.name} — editorial photograph`}
                role="img"
              />

              {/* Scrim — alternates direction per chapter so text anchor is always dark */}
              <div
                className={`absolute inset-0 pointer-events-none ${
                  reversed
                    ? "bg-gradient-to-tl from-black/85 via-black/35 to-transparent"
                    : "bg-gradient-to-tr from-black/85 via-black/35 to-transparent"
                }`}
              />
              {/* Bottom edge darkening to ground the floor */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              {/* Content — alternates left / right */}
              <div className="relative h-full min-h-screen flex items-end">
                <div
                  className={`w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24 ${
                    reversed ? "flex justify-end" : ""
                  }`}
                >
                  <div className="max-w-[640px] w-full">
                    <DecoderEyebrow
                      text={`${s.number} / ${s.name.toUpperCase()}`}
                      className="text-on-dark/85 mb-6 md:mb-8 tracking-[0.22em]"
                    />

                    <ScrollReveal>
                      <MixedScaleHeadline
                        words={s.headline}
                        className="text-on-dark"
                      />
                    </ScrollReveal>

                    <ScrollReveal delay={0.08}>
                      <p className="text-on-dark/90 text-[17px] md:text-[19px] leading-[1.55] max-w-[40ch] mt-8 md:mt-10">
                        {s.short}
                      </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.14}>
                      <Link
                        href={`/services#${s.slug}`}
                        className="group inline-flex items-baseline gap-3 mt-8 md:mt-10 text-on-dark hover:text-cream transition-colors duration-[160ms]"
                      >
                        <span className="eyebrow text-on-dark/70 tracking-[0.22em]">
                          READ ON
                        </span>
                        <span
                          aria-hidden
                          className="transition-transform duration-[160ms] group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

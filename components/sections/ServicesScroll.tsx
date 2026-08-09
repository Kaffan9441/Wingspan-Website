"use client";

import { services } from "@/lib/content";
import { MixedScaleHeadline } from "@/components/motion/MixedScaleHeadline";
import { DecoderEyebrow } from "@/components/motion/DecoderEyebrow";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";

export function ServicesScroll() {
  return (
    <section className="relative bg-paper text-ink">
      {/* Section intro */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-12 pt-24 md:pt-56 pb-12 md:pb-24">
        <ScrollReveal>
          <div className="eyebrow text-muted tracking-[0.22em] mb-6 md:mb-8">
            · WHAT WE DO ·
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="display uppercase font-semibold text-ink text-[clamp(2.2rem,7vw,6rem)] leading-[0.95] tracking-[-0.025em] max-w-[16ch]">
            Twelve practices.
            <br />
            One standard.
          </h2>
        </ScrollReveal>
      </div>

      {/* Eight full-bleed chapter moments */}
      <div>
        {services.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className="relative w-full min-h-screen overflow-hidden bg-charcoal text-on-dark"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.image})` }}
                aria-label={`${s.name} editorial photograph`}
                role="img"
              />

              {/* Scrim */}
              <div
                className={`absolute inset-0 pointer-events-none ${
                  reversed
                    ? "bg-gradient-to-tl from-black/85 via-black/40 to-transparent"
                    : "bg-gradient-to-tr from-black/85 via-black/40 to-transparent"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 md:h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

              {/* Content — safe area bottom padding */}
              <div className="relative h-full min-h-screen flex items-end">
                <div
                  className={`w-full max-w-[1440px] mx-auto px-5 md:px-12 ${
                    reversed ? "flex justify-end" : ""
                  }`}
                  style={{
                    paddingBottom: "max(56px, calc(56px + env(safe-area-inset-bottom)))",
                  }}
                >
                  <div className="max-w-[580px] w-full">
                    <DecoderEyebrow
                      text={`${s.number} / ${s.name.toUpperCase()}`}
                      className="text-on-dark/85 mb-5 md:mb-8 tracking-[0.22em]"
                    />

                    <ScrollReveal>
                      <MixedScaleHeadline
                        words={s.headline}
                        className="text-on-dark"
                      />
                    </ScrollReveal>

                    <ScrollReveal delay={0.08}>
                      <p className="text-on-dark/90 text-[15px] md:text-[19px] leading-[1.55] max-w-[38ch] md:max-w-[40ch] mt-6 md:mt-10">
                        {s.short}
                      </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.14}>
                      <Link
                        href={"cta" in s ? s.cta.href : `/services#${s.slug}`}
                        className="group inline-flex items-baseline gap-3 mt-7 md:mt-10 text-on-dark hover:text-cream transition-colors duration-[160ms] min-h-[44px]"
                      >
                        <span className="eyebrow text-on-dark/70 tracking-[0.22em]">
                          {"cta" in s ? s.cta.label.toUpperCase() : "READ ON"}
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

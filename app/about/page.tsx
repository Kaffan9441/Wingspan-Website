import type { Metadata } from "next";
import Link from "next/link";
import { about, hero } from "@/lib/content";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { HeritageScrapbook } from "@/components/sections/HeritageScrapbook";
import { Placeholder } from "@/components/ui/Placeholder";

export const metadata: Metadata = {
  title: "About · Wingspan Innovations",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero band */}
      <section className="relative w-full min-h-[80vh] flex items-end px-6 md:px-12 pb-16 md:pb-24 bg-charcoal text-on-dark overflow-hidden pt-[96px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/generated/atmosphere-karachi-twilight.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/30" aria-hidden />

        <div className="relative max-w-[1280px] mx-auto w-full">
          <ScrollReveal>
            <div className="eyebrow text-on-dark/80 tracking-[0.22em] mb-6">
              · ABOUT US ·
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="display uppercase font-semibold text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.022em] max-w-[14ch]">
              Aviation. Reimagined.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="bg-paper text-ink py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="display text-ink text-[clamp(1.4rem,3.2vw,2.4rem)] leading-[1.2] tracking-[-0.018em]">
              {about.intro}
            </p>
          </ScrollReveal>
          <div className="mt-12 space-y-8 max-w-[640px]">
            {about.body.map((p, i) => (
              <ScrollReveal key={i} delay={0.08 + i * 0.06}>
                <p className="text-ink/85 text-[17px] leading-[1.7]">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-paper text-ink pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal className="md:border-r md:border-[var(--hairline)] md:pr-12">
            <div className="eyebrow text-muted tracking-[0.22em] mb-4">
              · {about.mission.eyebrow.toUpperCase()} ·
            </div>
            <p className="display text-ink text-[clamp(1.25rem,2.6vw,1.9rem)] leading-[1.25] tracking-[-0.018em]">
              {about.mission.body}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="eyebrow text-muted tracking-[0.22em] mb-4">
              · {about.vision.eyebrow.toUpperCase()} ·
            </div>
            <p className="text-ink/85 text-[16px] leading-[1.7]">
              {about.vision.body}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Heritage scrapbook */}
      <HeritageScrapbook />

      {/* CTA */}
      <section className="bg-paper text-ink py-28 md:py-40 px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="display italic text-[clamp(1.25rem,3vw,2.2rem)] text-muted mb-10">
            Ready to elevate?
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <Link href={hero.cta.href} className="cta-pill">
            {hero.cta.label}
            <span aria-hidden>→</span>
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}

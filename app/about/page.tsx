import type { Metadata } from "next";
import Link from "next/link";
import { about, hero, message, whyChoose } from "@/lib/content";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { HeritageScrapbook } from "@/components/sections/HeritageScrapbook";

export const metadata: Metadata = {
  title: "About · Wingspan Innovations",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero band */}
      <section className="relative w-full min-h-[70vh] flex items-end px-5 md:px-12 pb-12 md:pb-24 bg-charcoal text-on-dark overflow-hidden pt-[64px] md:pt-[88px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/generated/atmosphere-karachi-twilight.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/30" aria-hidden />

        <div className="relative max-w-[1280px] mx-auto w-full">
          <ScrollReveal>
            <div className="eyebrow text-on-dark/80 tracking-[0.22em] mb-5 md:mb-6">
              · ABOUT US ·
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="display uppercase font-semibold text-[clamp(2.4rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.022em] max-w-[14ch]">
              Aviation. Reimagined.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="bg-paper text-ink py-16 md:py-32 px-5 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <p className="display text-ink text-[clamp(1.3rem,3.2vw,2.4rem)] leading-[1.25] tracking-[-0.018em]">
              {about.intro}
            </p>
          </ScrollReveal>
          <div className="mt-10 md:mt-12 space-y-6 md:space-y-8 max-w-[640px]">
            {about.body.map((p, i) => (
              <ScrollReveal key={i} delay={0.08 + i * 0.06}>
                <p className="text-ink/85 text-[16px] md:text-[17px] leading-[1.7]">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-paper text-ink pb-16 md:pb-32 px-5 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <ScrollReveal className="md:border-r md:border-[var(--hairline)] md:pr-12">
            <div className="eyebrow text-muted tracking-[0.22em] mb-4">
              · {about.mission.eyebrow.toUpperCase()} ·
            </div>
            <p className="display text-ink text-[clamp(1.2rem,2.6vw,1.9rem)] leading-[1.3] tracking-[-0.018em]">
              {about.mission.body}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="eyebrow text-muted tracking-[0.22em] mb-4">
              · {about.vision.eyebrow.toUpperCase()} ·
            </div>
            <p className="display text-ink text-[clamp(1.2rem,2.6vw,1.9rem)] leading-[1.3] tracking-[-0.018em]">
              {about.vision.body}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why choose Wingspan */}
      <section className="bg-paper text-ink pb-16 md:pb-32 px-5 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="eyebrow text-muted tracking-[0.22em] mb-5 md:mb-6">
              · WHY WINGSPAN ·
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="display uppercase font-semibold text-[clamp(1.8rem,5vw,4rem)] leading-[0.95] tracking-[-0.022em] max-w-[24ch] mb-10 md:mb-12">
              Why choose Wingspan Innovations?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-4">
            {whyChoose.items.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.03}>
                <div className="flex items-baseline gap-4 py-4 border-b border-[var(--hairline)]">
                  <span className="eyebrow text-metallic shrink-0" aria-hidden>
                    ✓
                  </span>
                  <span className="text-ink/85 text-[14px] md:text-[15px] leading-[1.6]">
                    {item}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="bg-charcoal text-on-dark py-20 md:py-32 px-5 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <div className="eyebrow text-on-dark/70 tracking-[0.22em] mb-8 md:mb-10">
              · {message.eyebrow.toUpperCase()} ·
            </div>
          </ScrollReveal>
          <div className="space-y-6 md:space-y-8">
            {message.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={0.08 + i * 0.06}>
                <p className="text-on-dark/85 text-[15px] md:text-[17px] leading-[1.75]">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <p className="display italic text-[clamp(1.2rem,2.6vw,2rem)] leading-[1.3] text-on-dark mt-10 md:mt-14">
              {message.closing}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Heritage scrapbook */}
      <HeritageScrapbook />

      {/* CTA */}
      <section className="bg-paper text-ink py-20 md:py-40 px-5 md:px-12 text-center">
        <ScrollReveal>
          <p className="display italic text-[clamp(1.2rem,3vw,2.2rem)] text-muted mb-8 md:mb-10">
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

import type { Metadata } from "next";
import Link from "next/link";
import { services, specializedServices, hero } from "@/lib/content";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Services · Wingspan Innovations",
  description:
    "Aviation Infrastructure · Aviation Maintenance · Airline Operations · Aviation Software & AI · Airport Management. Five practices, one standard.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero band */}
      <section className="relative w-full min-h-[70vh] flex items-end px-5 md:px-12 pb-12 md:pb-24 bg-charcoal text-on-dark overflow-hidden pt-[64px] md:pt-[88px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/generated/atmosphere-runway-dawn.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/30" aria-hidden />

        <div className="relative max-w-[1280px] mx-auto w-full">
          <ScrollReveal>
            <div className="eyebrow text-on-dark/80 tracking-[0.22em] mb-5 md:mb-6">
              · OUR SERVICES ·
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="display uppercase font-semibold text-[clamp(2.4rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.022em] max-w-[14ch]">
              Five practices.
              <br />
              One standard.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Service deep-dives */}
      <section className="bg-paper text-ink py-16 md:py-32">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 space-y-20 md:space-y-32">
          {services.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center scroll-mt-20"
              >
                <ScrollReveal
                  className={`md:col-span-7 ${
                    reversed ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[2px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${s.image})` }}
                      role="img"
                      aria-label={`${s.name} editorial photograph`}
                    />
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 eyebrow text-on-dark/85 text-[10px] md:text-[11px] tracking-[0.22em]">
                      {`FIG · ${s.number}`}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </ScrollReveal>

                <div
                  className={`md:col-span-5 ${
                    reversed ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <ScrollReveal>
                    <div className="eyebrow text-muted tracking-[0.22em] mb-5 md:mb-6">
                      {`${s.number} / ${s.name.toUpperCase()}`}
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.08}>
                    <h2 className="display uppercase font-semibold text-ink text-[clamp(2rem,4vw,3.6rem)] leading-[1] tracking-[-0.025em] max-w-[14ch] mb-6 md:mb-8">
                      {s.name}
                    </h2>
                  </ScrollReveal>

                  <ScrollReveal delay={0.14}>
                    <p className="text-ink/85 text-[15px] md:text-[17px] leading-[1.65] max-w-[42ch]">
                      {s.full}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <div className="eyebrow text-muted tracking-[0.18em] mt-8 md:mt-10 mb-3">
                      Capabilities
                    </div>
                    <ul className="space-y-2">
                      {s.capabilities.map((c) => (
                        <li
                          key={c}
                          className="text-ink/85 text-[14px] md:text-[15px] flex items-baseline gap-3"
                        >
                          <span className="eyebrow text-metallic text-[10px]">·</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Specialized services */}
      <section className="bg-paper text-ink py-16 md:py-32 px-5 md:px-12 border-t border-[var(--hairline)]">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <div className="eyebrow text-muted tracking-[0.22em] mb-5 md:mb-6">
              · WE ALSO OFFER ·
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="display uppercase font-semibold text-[clamp(1.8rem,5vw,4rem)] leading-[0.95] tracking-[-0.022em] max-w-[20ch] mb-10 md:mb-12">
              Specialized capabilities.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-2 md:gap-y-4">
            {specializedServices.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.03}>
                <div className="flex items-baseline gap-3 py-3 border-b border-[var(--hairline)]">
                  <span className="eyebrow text-metallic">{`0${i + 1}`}</span>
                  <span className="text-ink/85 text-[14px] md:text-[15px]">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper text-ink py-20 md:py-40 px-5 md:px-12 text-center">
        <ScrollReveal>
          <p className="display italic text-[clamp(1.2rem,3vw,2.2rem)] text-muted mb-8 md:mb-10">
            Tell us about your project.
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

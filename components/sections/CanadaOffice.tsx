import Link from "next/link";
import Image from "next/image";
import { canadaOffice } from "@/lib/content";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Placeholder } from "@/components/ui/Placeholder";

/**
 * Canada remote office — North American presence.
 * Light (paper) section that breaks the dark rhythm between GlobalReach
 * and the closing cinematic. Copy + details from lib/content.ts.
 *
 * The photo layers on top of a tinted Placeholder: until
 * canadaOffice.image exists it degrades to an intentional plate rather
 * than a broken image.
 */
export function CanadaOffice() {
  return (
    <section className="relative bg-paper text-ink overflow-hidden py-20 md:py-32 px-5 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — framed image plate */}
          <ScrollReveal className="order-2 md:order-1">
            <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden rounded-[6px] border border-[var(--hairline)] shadow-[0_24px_60px_-24px_rgba(26,24,20,0.45)]">
              {/* Fallback plate — shows through if the photo is not yet generated */}
              <div className="absolute inset-0">
                <Placeholder variant="photo" label={`${canadaOffice.city} · Canada`} />
              </div>
              {/* Real photo, optimized and painted on top */}
              <Image
                src={canadaOffice.image}
                alt={canadaOffice.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Subtle bottom gradient for the location caption */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/70 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <span className="eyebrow text-on-dark/90 tracking-[0.2em]">
                  {canadaOffice.city}
                </span>
                <span className="eyebrow text-on-dark/60 tracking-[0.16em] text-[10px]">
                  {canadaOffice.region}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — copy */}
          <div className="order-1 md:order-2 md:pl-4 lg:pl-10">
            <ScrollReveal>
              <div className="eyebrow text-metallic tracking-[0.22em] mb-6 md:mb-8">
                · {canadaOffice.eyebrow.toUpperCase()} ·
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="display uppercase font-semibold text-ink text-[clamp(2rem,4.6vw,3.9rem)] leading-[0.98] tracking-[-0.025em] mb-7 md:mb-9 whitespace-pre-line">
                {canadaOffice.headline}
              </h2>
            </ScrollReveal>

            <div className="space-y-5 mb-9 md:mb-11 max-w-[46ch]">
              {canadaOffice.body.map((p, i) => (
                <ScrollReveal key={i} delay={0.14 + i * 0.06}>
                  <p className="text-ink/80 text-[15px] md:text-[16px] leading-[1.75]">
                    {p}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.24}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 md:mb-12">
                {canadaOffice.highlights.map(([title, detail]) => (
                  <div key={title} className="border-t border-[var(--hairline)] pt-3">
                    <div className="eyebrow text-metallic tracking-[0.16em] mb-1.5">
                      {title}
                    </div>
                    <p className="text-ink/65 text-[13px] leading-[1.55]">{detail}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link href={canadaOffice.cta.href} className="cta-pill">
                {canadaOffice.cta.label}
                <span aria-hidden>→</span>
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

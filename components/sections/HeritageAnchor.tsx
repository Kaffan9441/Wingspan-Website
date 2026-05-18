import { heritageAnchor } from "@/lib/content";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TravelingPlane } from "@/components/motion/TravelingPlane";

/**
 * Heritage anchor — a stat moment.
 * Big "40" numeral on the left, eyebrow + editorial copy on the right, runway line
 * with a traveling plane illustration below. Borrowed from Platoon's "893 meters"
 * mechanic, adapted to Wingspan's heritage register.
 */
export function HeritageAnchor() {
  return (
    <section className="relative w-full bg-charcoal text-on-dark overflow-hidden py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Top: stat + copy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
          {/* Left: massive numeral */}
          <ScrollReveal className="md:col-span-7">
            <div className="display text-on-dark font-semibold leading-[0.82] tracking-[-0.05em] text-[clamp(10rem,26vw,26rem)]">
              40
            </div>
            <div className="eyebrow text-on-dark/55 tracking-[0.32em] mt-2">
              years
            </div>
          </ScrollReveal>

          {/* Right: eyebrow + headline + paragraph */}
          <div className="md:col-span-5 md:pb-6">
            <ScrollReveal>
              <div className="eyebrow text-on-dark/70 tracking-[0.22em] mb-6">
                · OUR PRACTICE ·
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="display text-on-dark font-medium text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.15] tracking-[-0.018em] mb-8 max-w-[20ch]">
                Four decades of operational depth in aviation.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="text-on-dark/85 text-[15px] md:text-[16px] leading-[1.7] max-w-[42ch]">
                {heritageAnchor.body}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.22}>
              <p className="text-on-dark/60 text-[14px] md:text-[15px] leading-[1.65] max-w-[42ch] mt-6">
                {heritageAnchor.excerpt}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Below: traveling plane on a runway line */}
        <div className="mt-20 md:mt-32">
          <TravelingPlane
            startLabel="Since 1985"
            endLabel="Karachi · Pakistan"
            annotation="Across five practices. Across decades."
          />
        </div>
      </div>
    </section>
  );
}

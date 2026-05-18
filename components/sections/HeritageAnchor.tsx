import { heritageAnchor } from "@/lib/content";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function HeritageAnchor() {
  return (
    <section className="relative w-full bg-charcoal text-on-dark overflow-hidden py-20 md:py-40 px-5 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end">
          {/* Massive numeral */}
          <ScrollReveal className="md:col-span-7">
            <div className="display text-on-dark font-semibold leading-[0.82] tracking-[-0.05em] text-[clamp(7rem,26vw,26rem)]">
              40
            </div>
            <div className="eyebrow text-on-dark/55 tracking-[0.32em] mt-2">
              years
            </div>
          </ScrollReveal>

          {/* Right: copy */}
          <div className="md:col-span-5 md:pb-6">
            <ScrollReveal>
              <div className="eyebrow text-on-dark/70 tracking-[0.22em] mb-5 md:mb-6">
                · OUR PRACTICE ·
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2 className="display text-on-dark font-medium text-[clamp(1.5rem,2.8vw,2.4rem)] leading-[1.15] tracking-[-0.018em] mb-6 md:mb-8 max-w-[20ch]">
                Four decades of operational depth in aviation.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p className="text-on-dark/85 text-[15px] md:text-[16px] leading-[1.7] max-w-[42ch]">
                {heritageAnchor.body}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.22}>
              <p className="text-on-dark/60 text-[14px] md:text-[15px] leading-[1.65] max-w-[42ch] mt-5 md:mt-6">
                {heritageAnchor.excerpt}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Globe } from "@/components/ui/cobe-globe";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import Link from "next/link";

// Key aviation hubs Wingspan operates with
const MARKERS = [
  { id: "karachi",   location: [24.8607,  67.0011] as [number, number] }, // HQ
  { id: "dubai",     location: [25.2048,  55.2708] as [number, number] },
  { id: "abudhabi",  location: [24.4539,  54.3773] as [number, number] },
  { id: "doha",      location: [25.2854,  51.5310] as [number, number] },
  { id: "riyadh",    location: [24.7136,  46.6753] as [number, number] },
  { id: "istanbul",  location: [41.0082,  28.9784] as [number, number] },
  { id: "london",    location: [51.5074,  -0.1278] as [number, number] },
  { id: "frankfurt", location: [50.1109,   8.6821] as [number, number] },
  { id: "beijing",   location: [39.9042, 116.4074] as [number, number] },
];

// Flight arcs originating from Karachi
const ARCS = [
  { id: "khi-dxb",  from: [24.8607,  67.0011] as [number, number], to: [25.2048,  55.2708] as [number, number] },
  { id: "khi-doh",  from: [24.8607,  67.0011] as [number, number], to: [25.2854,  51.5310] as [number, number] },
  { id: "khi-ist",  from: [24.8607,  67.0011] as [number, number], to: [41.0082,  28.9784] as [number, number] },
  { id: "khi-lhr",  from: [24.8607,  67.0011] as [number, number], to: [51.5074,  -0.1278] as [number, number] },
  { id: "dxb-fra",  from: [25.2048,  55.2708] as [number, number], to: [50.1109,   8.6821] as [number, number] },
  { id: "ist-lhr",  from: [41.0082,  28.9784] as [number, number], to: [51.5074,  -0.1278] as [number, number] },
];

export function GlobalReach() {
  return (
    <section className="relative bg-charcoal text-on-dark overflow-hidden py-20 md:py-32 px-5 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — copy */}
          <div className="md:pr-8 lg:pr-16">
            <ScrollReveal>
              <div className="eyebrow text-on-dark/55 tracking-[0.22em] mb-6 md:mb-8">
                · GLOBAL PRESENCE ·
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2 className="display uppercase font-semibold text-on-dark text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.025em] mb-8 md:mb-10">
                Wherever aviation happens,<br className="hidden md:block" /> we&apos;re there.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <p className="text-on-dark/75 text-[15px] md:text-[16px] leading-[1.75] max-w-[44ch] mb-6">
                From our base in Karachi, Wingspan Innovations works alongside airlines,
                airports, and authorities across Pakistan, the Gulf, and beyond —
                bringing the same standard of excellence to every runway, hangar, and boardroom.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.22}>
              <div className="flex flex-col gap-3 mb-10 md:mb-12">
                {[
                  ["Pakistan", "Headquarters & primary operations"],
                  ["Gulf Region", "UAE · Qatar · Saudi Arabia · Oman"],
                  ["Europe", "United Kingdom · Germany · Turkey"],
                ].map(([region, detail]) => (
                  <div key={region} className="flex items-baseline gap-4 border-b border-on-dark/10 pb-3">
                    <span className="eyebrow text-metallic tracking-[0.18em] min-w-[90px]">{region}</span>
                    <span className="text-on-dark/60 text-[13px]">{detail}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.28}>
              <Link href="/contact" className="cta-pill cta-pill--on-dark">
                Work with us
                <span aria-hidden>→</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right — interactive globe */}
          <ScrollReveal delay={0.1} className="flex items-center justify-center">
            <div className="relative w-full max-w-[480px] mx-auto">
              {/* Glow halo behind the globe */}
              <div
                className="absolute inset-[-8%] rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(168,137,106,0.18) 0%, rgba(168,137,106,0.06) 50%, transparent 70%)",
                }}
                aria-hidden
              />
              <Globe
                markers={MARKERS}
                arcs={ARCS}
                // Dark globe — charcoal base so it blends into the section bg
                dark={1}
                baseColor={[0.12, 0.09, 0.06]}
                // Warm brass atmosphere glow — the effect the user loves
                glowColor={[0.66, 0.54, 0.42]}
                // Cream markers (match --text-on-dark)
                markerColor={[0.95, 0.93, 0.90]}
                markerSize={0.038}
                markerElevation={0.015}
                // Brass arcs
                arcColor={[0.75, 0.62, 0.48]}
                arcWidth={1.2}
                arcHeight={0.3}
                // Map params
                mapBrightness={4}
                diffuse={2.2}
                mapSamples={18000}
                // Rotation — tilted to keep Pakistan / Gulf naturally visible
                theta={0.28}
                speed={0.003}
                className="relative z-[1]"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

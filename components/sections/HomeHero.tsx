"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, stagger } from "animejs";
import { hero } from "@/lib/content";

type Scale = "xs" | "sm" | "md" | "lg" | "xl";

const scaleMap: Record<Scale, string> = {
  xs: "text-[clamp(1rem,1.6vw,1.5rem)]",
  sm: "text-[clamp(1.4rem,2.4vw,2.2rem)]",
  md: "text-[clamp(2.2rem,4vw,3.6rem)]",
  lg: "text-[clamp(3.4rem,6.4vw,5.8rem)]",
  xl: "text-[clamp(4.6rem,9vw,8rem)]",
};

/**
 * Hero — orchestrated with Anime.js v4 for a cinematic film-title entry sequence.
 *
 *   0ms     Image starts: opacity 0 → 1, scale 1.06 → 1.0, brightness 0.4 → 1.0 (1800ms)
 *   700ms   Eyebrow slides in from left
 *   1000ms  Headline words stagger up (60ms between each)
 *   1600ms  Subhead fades up
 *   1800ms  CTA fades up
 *
 * All elements start invisible (set via initial inline styles so there's no flash of
 * un-animated content). Anime.js then drives the reveal.
 */
export function HomeHero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const eyebrow = eyebrowRef.current;
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const ctaWrap = ctaWrapRef.current;
    if (!image || !eyebrow || !headline || !subhead || !ctaWrap) return;

    // Image — slow cinematic reveal
    animate(image, {
      opacity: [0, 1],
      scale: [1.06, 1.0],
      filter: ["brightness(0.35)", "brightness(1)"],
      duration: 1800,
      ease: "outExpo",
      delay: 80,
    });

    // Eyebrow — slide in from left
    animate(eyebrow, {
      opacity: [0, 1],
      translateX: [-16, 0],
      duration: 800,
      ease: "outExpo",
      delay: 700,
    });

    // Headline words — staggered fade-up
    const words = headline.querySelectorAll<HTMLSpanElement>("[data-word]");
    animate(words, {
      opacity: [0, 1],
      translateY: [22, 0],
      duration: 900,
      ease: "outExpo",
      delay: stagger(70, { start: 1000 }),
    });

    // Subhead
    animate(subhead, {
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 800,
      ease: "outExpo",
      delay: 1600,
    });

    // CTA
    animate(ctaWrap, {
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 800,
      ease: "outExpo",
      delay: 1850,
    });
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[720px] overflow-hidden bg-charcoal text-on-dark">
      {/* Cinematic background — Anime.js targets this */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/generated/hero-primary.jpg)",
          opacity: 0,
        }}
        aria-hidden
      />

      {/* Scrims — anchor the headline area against bright cockpit highlights */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/35 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />

      {/* Content cluster — anchored bottom-left */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[1280px] mx-auto w-full">
          <div
            ref={eyebrowRef}
            className="eyebrow text-on-dark/85 text-[12px] tracking-[0.22em] mb-6"
            style={{ opacity: 0 }}
          >
            {hero.eyebrow.toUpperCase()}
          </div>

          <h1
            ref={headlineRef}
            className="display font-medium uppercase leading-[0.92] text-balance flex flex-wrap items-baseline gap-x-[0.22em] gap-y-1 text-on-dark"
          >
            {hero.headline.map(({ word, scale }, i) => (
              <span
                key={`${word}-${i}`}
                data-word
                className={`${scaleMap[scale]} inline-block align-baseline`}
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            ref={subheadRef}
            className="text-on-dark/90 text-[15px] md:text-[17px] mt-8 max-w-[42ch]"
            style={{ opacity: 0 }}
          >
            {hero.subhead}
          </p>

          <div
            ref={ctaWrapRef}
            className="mt-8"
            style={{ opacity: 0 }}
          >
            <Link href={hero.cta.href} className="cta-pill cta-pill--on-dark">
              {hero.cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, stagger } from "animejs";
import { hero } from "@/lib/content";

type Scale = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Mobile min for xl is tuned so the longest headline word ("INNOVATION",
 * 10 chars) fits a 375px viewport with 20px padding each side ≈ 335px usable.
 */
const scaleMap: Record<Scale, string> = {
  xs: "text-[clamp(0.85rem,1.45vw,1.35rem)]",
  sm: "text-[clamp(1.1rem,2.15vw,1.95rem)]",
  md: "text-[clamp(1.85rem,3.6vw,3.2rem)]",
  lg: "text-[clamp(2.75rem,5.75vw,5.2rem)]",
  xl: "text-[clamp(3.1rem,8.1vw,7.2rem)]",
};

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

    animate(image, {
      opacity: [0, 1],
      scale: [1.04, 1.0],
      filter: ["brightness(0.35)", "brightness(1)"],
      duration: 1800,
      ease: "outExpo",
      delay: 80,
    });

    animate(eyebrow, {
      opacity: [0, 1],
      translateX: [-16, 0],
      duration: 800,
      ease: "outExpo",
      delay: 700,
    });

    const words = headline.querySelectorAll<HTMLSpanElement>("[data-word]");
    animate(words, {
      opacity: [0, 1],
      translateY: [22, 0],
      duration: 900,
      ease: "outExpo",
      delay: stagger(70, { start: 1000 }),
    });

    animate(subhead, {
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 800,
      ease: "outExpo",
      delay: 1600,
    });

    animate(ctaWrap, {
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 800,
      ease: "outExpo",
      delay: 1850,
    });
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-charcoal text-on-dark">
      {/* Background */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/generated/hero-primary.jpg)",
          opacity: 0,
        }}
        aria-hidden
      />

      {/* Scrims */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/35 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />

      {/* Content — pb uses env(safe-area-inset-bottom) so it clears the home indicator */}
      <div
        className="absolute inset-0 flex flex-col justify-end px-5 md:px-12"
        style={{ paddingBottom: "max(72px, calc(64px + env(safe-area-inset-bottom)))" }}
      >
        <div className="max-w-[1280px] mx-auto w-full">
          <div
            ref={eyebrowRef}
            className="eyebrow text-on-dark/85 text-[11px] md:text-[12px] tracking-[0.22em] mb-5 md:mb-6"
            style={{ opacity: 0 }}
          >
            {hero.eyebrow.toUpperCase()}
          </div>

          <h1
            ref={headlineRef}
            className="display font-medium uppercase leading-[1.06] md:leading-[1.02] text-balance flex flex-wrap items-baseline gap-y-2 text-on-dark"
          >
            {/* Word gap via mr in em on each span: em tracks the WORD's own font
                size, so the space stays proportional even between two xl words.
                (A gap-x on the container would use the h1's base font size and
                render ~3px at display sizes.) */}
            {hero.headline.map(({ word, scale }, i) => (
              <span
                key={`${word}-${i}`}
                data-word
                className={`${scaleMap[scale]} inline-block align-baseline ${
                  i < hero.headline.length - 1 ? "mr-[0.28em]" : ""
                }`}
                style={{ opacity: 0 }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            ref={subheadRef}
            className="text-on-dark/90 text-[14px] md:text-[17px] mt-6 md:mt-8 max-w-[38ch] md:max-w-[42ch] leading-[1.6]"
            style={{ opacity: 0 }}
          >
            {hero.subhead}
          </p>

          <div
            ref={ctaWrapRef}
            className="mt-7 md:mt-8"
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

import Link from "next/link";
import Image from "next/image";
import { brand, hero } from "@/lib/content";
import { ChapterTransition } from "@/components/motion/ChapterTransition";

/**
 * Closing cinematic — full-bleed runway-at-dawn moment to close the homepage.
 * Mirrors the dark hangar OPENING with a dawn runway CLOSING (night → day arc).
 * The runway center line draws the eye toward the brand mark + CTA in the middle.
 * Below the section, ChapterTransition arms the soft-push into /services on continued scroll.
 */
export function ClosingCinematic() {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden bg-charcoal text-on-dark">
        {/* Full-bleed atmospheric background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/generated/atmosphere-runway-dawn.jpg)",
          }}
          aria-hidden
        />

        {/* Radial-style scrim — keeps centerline visible, darkens edges so content reads */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/55 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.55)_85%)] pointer-events-none" />

        {/* Centered content */}
        <div className="relative h-full min-h-screen flex flex-col items-center justify-center text-center px-6">
          <Image
            src="/brand/wingspan-logo-white-original.png"
            alt={brand.name}
            width={1563}
            height={1563}
            className="w-[min(56vw,360px)] md:w-[min(40vw,440px)] h-auto select-none mb-12 md:mb-16"
          />

          <p className="display italic text-[clamp(1.4rem,3vw,2.4rem)] text-on-dark/90 max-w-[18ch] mb-10 md:mb-12">
            Ready to elevate?
          </p>

          <Link href={hero.cta.href} className="cta-pill cta-pill--on-dark">
            {hero.cta.label}
            <span aria-hidden>→</span>
          </Link>

          <div className="mt-12 md:mt-16 eyebrow text-on-dark/55 text-[11px] tracking-[0.42em]">
            · SINCE {brand.since} · KARACHI · PAKISTAN ·
          </div>
        </div>
      </section>

      <ChapterTransition
        toHref="/services"
        nextHeroSrc="/images/generated/atmosphere-runway-dawn.jpg"
      />
    </>
  );
}

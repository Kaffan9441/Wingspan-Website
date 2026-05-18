import Link from "next/link";
import Image from "next/image";
import { brand, hero } from "@/lib/content";
import { ChapterTransition } from "@/components/motion/ChapterTransition";

export function ClosingCinematic() {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden bg-charcoal text-on-dark">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/generated/atmosphere-runway-dawn.jpg)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/55 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.55)_85%)] pointer-events-none" />

        <div
          className="relative h-full min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-12"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <Image
            src="/brand/wingspan-logo-white-original.png"
            alt={brand.name}
            width={1563}
            height={1563}
            className="w-[min(52vw,280px)] md:w-[min(40vw,440px)] h-auto select-none mb-10 md:mb-16"
          />

          <p className="display italic text-[clamp(1.3rem,3vw,2.4rem)] text-on-dark/90 max-w-[18ch] mb-8 md:mb-12">
            Ready to elevate?
          </p>

          <Link href={hero.cta.href} className="cta-pill cta-pill--on-dark">
            {hero.cta.label}
            <span aria-hidden>→</span>
          </Link>

          <div className="mt-10 md:mt-16 eyebrow text-on-dark/55 text-[10px] md:text-[11px] tracking-[0.42em]">
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

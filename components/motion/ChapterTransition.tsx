"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Closing photographic page transition (the "plane animation" from Platoon).
 * Not a JS-animated sprite. As the user reaches the bottom of the page, the next page's
 * hero image starts to expose from beneath, then a route push fires.
 *
 * For v1 we implement the simpler half: when the bottom of this section enters view,
 * pre-fetch the next route, and trigger router.push on a continued downward wheel.
 *
 * The full effect (with the next-page hero rendered behind) is left as a polish-pass
 * iteration. The plan calls this out explicitly.
 */
export function ChapterTransition({
  toHref,
  nextHeroSrc,
}: {
  toHref: string;
  nextHeroSrc?: string;
}) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);

  // Prefetch the next route + arm the wheel handler when this section is on screen
  useEffect(() => {
    router.prefetch(toHref);
  }, [router, toHref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
            setArmed(true);
          } else if (!entry.isIntersecting) {
            setArmed(false);
          }
        }
      },
      { threshold: [0, 0.5, 0.7, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Only enable the wheel-triggered navigation on pointer devices (mouse/trackpad).
    // On touch devices (iPhone/iPad) wheel events fire during momentum scroll and would
    // unintentionally navigate the user away before they've finished reading.
    if (!armed || window.matchMedia("(pointer: coarse)").matches) return;
    let pushed = false;
    const onWheel = (e: WheelEvent) => {
      // Only fire on continued downward scroll past the bottom
      if (e.deltaY > 30 && !pushed) {
        const atBottom =
          window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
        if (atBottom) {
          pushed = true;
          router.push(toHref);
        }
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [armed, router, toHref]);

  return (
    <div ref={ref} className="relative w-full" aria-hidden>
      {nextHeroSrc ? (
        <div
          className="absolute inset-x-0 bottom-0 h-[60vh] bg-cover bg-center opacity-0 pointer-events-none"
          style={{ backgroundImage: `url(${nextHeroSrc})` }}
        />
      ) : null}
    </div>
  );
}

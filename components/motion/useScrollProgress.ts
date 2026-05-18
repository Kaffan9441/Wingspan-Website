"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns scroll progress (0 → 1) of a target element passing through the viewport.
 * 0 = element's top hits viewport bottom; 1 = element's bottom hits viewport top.
 * Used by DecoderEyebrow, CounterScrollPlate, and BlendingWordmark to react to scroll.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Element enters when its top hits vh, exits when its bottom hits 0
      const total = rect.height + vh;
      const distance = vh - rect.top;
      const p = Math.min(Math.max(distance / total, 0), 1);
      setProgress(p);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        compute();
      });
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return { ref, progress };
}

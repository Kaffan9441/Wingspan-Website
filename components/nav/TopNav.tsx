"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, brand } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

/**
 * Scroll-state-aware top nav.
 *
 * - Over the dark hero (top of page): fully transparent, white logo + white links.
 * - After scrolling past the hero (~85vh): translucent cream backdrop with blur,
 *   dark logo + dark links + hairline bottom border.
 *
 * The threshold uses window.innerHeight * 0.85 so the transition fires roughly when
 * the hero exits the viewport. No backdrop ever sits on top of the hero itself.
 */
export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const compute = () => {
      const threshold = window.innerHeight * 0.85;
      setScrolled(window.scrollY > threshold);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute, { passive: true });
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-[80] h-[80px] md:h-[96px] flex items-center px-6 md:px-12 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
          background: scrolled ? "rgba(245, 241, 234, 0.72)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(168,137,106,0.25)"
            : "1px solid transparent",
        }}
      >
        <Link
          href="/"
          aria-label={brand.name}
          className="flex items-center gap-2 select-none relative"
        >
          {/* Two logos stacked, fade between them based on scroll state */}
          <Image
            src="/brand/wingspan-logo-original.png"
            alt=""
            width={400}
            height={400}
            priority
            className={`h-14 md:h-[72px] w-auto transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/brand/wingspan-logo-white-original.png"
            alt=""
            width={400}
            height={400}
            priority
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-14 md:h-[72px] w-auto transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <span className="sr-only">{brand.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 ml-auto">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[14px] tracking-[-0.005em] transition-colors duration-[160ms] ${
                scrolled
                  ? "text-ink hover:text-forest"
                  : "text-on-dark hover:text-cream"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <span
            className={`w-px h-4 transition-colors duration-300 ${
              scrolled ? "bg-[var(--hairline)]" : "bg-on-dark/30"
            }`}
            aria-hidden
          />
          <Link
            href="/contact"
            className={`cta-pill text-[13px] py-2 px-4 ${
              scrolled ? "" : "cta-pill--on-dark"
            }`}
          >
            Schedule a Free Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden ml-auto flex flex-col gap-[5px] p-2 -mr-2"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span
            className={`block w-6 h-px transition-colors duration-300 ${
              scrolled ? "bg-ink" : "bg-on-dark"
            }`}
          />
          <span
            className={`block w-6 h-px transition-colors duration-300 ${
              scrolled ? "bg-ink" : "bg-on-dark"
            }`}
          />
          <span
            className={`block w-6 h-px transition-colors duration-300 ${
              scrolled ? "bg-ink" : "bg-on-dark"
            }`}
          />
        </button>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

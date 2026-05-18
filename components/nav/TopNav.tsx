"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, brand } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // backdrop-filter: blur() on a position:fixed element is a known iOS Safari bug —
  // the blur composites against a stale snapshot while scrolling, causing visible jitter.
  // Use a solid, more-opaque background on touch devices instead.
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

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

  const scrolledStyle = scrolled
    ? {
        background: isTouch
          ? "rgba(245, 241, 234, 0.97)"
          : "rgba(245, 241, 234, 0.78)",
        backdropFilter: isTouch ? "none" : "blur(20px) saturate(140%)",
        WebkitBackdropFilter: isTouch ? "none" : "blur(20px) saturate(140%)",
        borderBottom: "1px solid rgba(168,137,106,0.25)",
      }
    : {
        background: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottom: "1px solid transparent",
      };

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-[80] h-[64px] md:h-[88px] flex items-center px-5 md:px-12 transition-all duration-300"
        style={scrolledStyle}
      >
        <Link
          href="/"
          aria-label={brand.name}
          className="flex items-center gap-2 select-none relative"
        >
          <Image
            src="/brand/wingspan-logo-original.png"
            alt=""
            width={400}
            height={400}
            priority
            className={`h-10 md:h-[64px] w-auto transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/brand/wingspan-logo-white-original.png"
            alt=""
            width={400}
            height={400}
            priority
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-10 md:h-[64px] w-auto transition-opacity duration-300 ${
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
            Free Consultation
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden ml-auto flex flex-col gap-[5px] p-3 -mr-3 min-w-[44px] min-h-[44px] items-center justify-center"
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

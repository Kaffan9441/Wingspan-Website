"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { brand, nav, contact } from "@/lib/content";

/**
 * Full-screen overlay menu — deep forest on cream typography (UJ pattern).
 * Items are large centered display serif. Contact info at the bottom.
 */
export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[90] bg-forest text-on-dark flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center justify-between px-6 h-[68px]">
            <Image
              src="/brand/wingspan-logo-white-original.png"
              alt={brand.name}
              width={1563}
              height={1563}
              className="h-9 w-auto"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="text-on-dark text-2xl leading-none"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center gap-7 px-6">
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 + i * 0.06,
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="display uppercase text-[clamp(2.5rem,11vw,4.5rem)] leading-none tracking-[-0.018em] text-on-dark hover:text-cream transition-colors duration-[160ms]"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="px-6 pb-10 text-center">
            <div className="eyebrow text-on-dark/60 mb-3">Contact</div>
            <a
              href={`tel:${contact.phone[0].replace(/\s|-/g, "")}`}
              className="block display text-on-dark text-xl tracking-[-0.01em]"
            >
              {contact.phone[0]}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="block text-on-dark/80 text-sm mt-1 tracking-wide"
            >
              {contact.email}
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

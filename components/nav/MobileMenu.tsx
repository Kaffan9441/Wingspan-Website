"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { brand, nav, contact } from "@/lib/content";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Header row — safe-area top */}
          <div
            className="flex items-center justify-between px-5 h-[64px]"
            style={{ paddingTop: "env(safe-area-inset-top)" }}
          >
            <Image
              src="/brand/wingspan-logo-white-original.png"
              alt={brand.name}
              width={1563}
              height={1563}
              className="h-9 w-auto"
            />
            {/* 44×44 tap target for close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="text-on-dark flex items-center justify-center w-11 h-11 -mr-1 text-xl"
            >
              ✕
            </button>
          </div>

          {/* Nav items */}
          <div className="flex-1 flex flex-col justify-center items-center gap-6 px-6">
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.06 + i * 0.05,
                  duration: 0.45,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="display uppercase text-[clamp(2.8rem,11vw,4.5rem)] leading-none tracking-[-0.018em] text-on-dark hover:text-cream active:text-cream transition-colors duration-[160ms]"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact info — safe-area bottom */}
          <div
            className="px-6 text-center"
            style={{ paddingBottom: "max(40px, calc(32px + env(safe-area-inset-bottom)))" }}
          >
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

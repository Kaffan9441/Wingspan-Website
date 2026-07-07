import Link from "next/link";
import Image from "next/image";
import { brand, contact, nav } from "@/lib/content";

/**
 * Restrained footer (UJ pattern). Hairline-bordered, no badges, no clutter.
 * 4 columns on desktop, 2 on mobile, stacked on small mobile.
 */
export function Footer() {
  return (
    <footer className="bg-paper text-ink mt-16 md:mt-24">
      <div className="hairline" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="mb-10 md:mb-14">
          <Image
            src="/brand/wingspan-logo-original.png"
            alt={brand.name}
            width={1563}
            height={1563}
            className="w-[88px] h-auto"
          />
        </div>
        <div className="grid grid-cols-2 gap-10 md:gap-12">
          <div>
            <div className="eyebrow text-muted mb-4">Wingspan</div>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-ink hover:text-forest transition-colors duration-[160ms]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-muted mb-4">Contact</div>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-ink hover:text-forest transition-colors break-all"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="hairline mt-12" />
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="text-[12px] tracking-[0.04em] uppercase text-muted">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
          <div className="text-[12px] tracking-[0.04em] uppercase text-muted">
            Since {brand.since} · Karachi, Pakistan
          </div>
        </div>
      </div>
    </footer>
  );
}

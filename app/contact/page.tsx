import type { Metadata } from "next";
import { contact } from "@/lib/content";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Wingspan Innovations",
  description: "Schedule a free consultation. Karachi, Pakistan.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero band */}
      <section className="relative w-full min-h-[55vh] flex items-end px-5 md:px-12 pb-12 md:pb-24 bg-charcoal text-on-dark overflow-hidden pt-[64px] md:pt-[88px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/generated/atmosphere-tower-twilight.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/30" aria-hidden />

        <div className="relative max-w-[1280px] mx-auto w-full">
          <ScrollReveal>
            <div className="eyebrow text-on-dark/80 tracking-[0.22em] mb-5 md:mb-6">
              · GET IN TOUCH ·
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="display uppercase font-semibold text-[clamp(2.2rem,8vw,6rem)] leading-[0.92] tracking-[-0.022em] max-w-[14ch]">
              Schedule a free consultation.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-paper text-ink py-16 md:py-32 px-5 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Contact info */}
          <ScrollReveal delay={0.06} className="lg:col-span-4">
            <div className="eyebrow text-muted tracking-[0.22em] mb-4 md:mb-5">
              · DIRECTLY ·
            </div>
            <div className="space-y-3 text-[14px] md:text-[15px]">
              <a
                href={`mailto:${contact.email}`}
                className="block text-ink hover:text-forest transition-colors py-0.5 break-all"
              >
                {contact.email}
              </a>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.12} className="lg:col-span-8">
            <div className="eyebrow text-muted tracking-[0.22em] mb-4 md:mb-5">
              · TELL US ABOUT YOUR PROJECT ·
            </div>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

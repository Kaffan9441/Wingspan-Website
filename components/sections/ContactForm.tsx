"use client";

import { useState } from "react";
import { services } from "@/lib/content";

/**
 * Contact form — wired to a no-op submit handler for now.
 * At build/integration time we'll hook this to Server Actions + Resend (or Supabase).
 * Hairline-only inputs, no filled buttons.
 */
export function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "sent">("idle");

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setState("submitting");
        // Placeholder — real submission wiring deferred per plan
        setTimeout(() => setState("sent"), 700);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="block">
          <span className="eyebrow text-muted">Name</span>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full bg-transparent border-b border-[var(--hairline)] py-3.5 text-base text-ink focus:outline-none focus:border-forest transition-colors"
          />
        </label>
        <label className="block">
          <span className="eyebrow text-muted">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full bg-transparent border-b border-[var(--hairline)] py-3.5 text-base text-ink focus:outline-none focus:border-forest transition-colors"
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-muted">Company / Organization</span>
        <input
          type="text"
          name="company"
          className="mt-1 w-full bg-transparent border-b border-[var(--hairline)] py-3.5 text-base text-ink focus:outline-none focus:border-forest transition-colors"
        />
      </label>

      <label className="block">
        <span className="eyebrow text-muted">Service of interest</span>
        <select
          name="service"
          className="mt-1 w-full bg-transparent border-b border-[var(--hairline)] py-3.5 text-base text-ink focus:outline-none focus:border-forest transition-colors appearance-none"
          defaultValue=""
        >
          <option value="" disabled>
            Select…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </label>

      <label className="block">
        <span className="eyebrow text-muted">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-1 w-full bg-transparent border-b border-[var(--hairline)] py-3.5 text-base text-ink focus:outline-none focus:border-forest transition-colors resize-y"
        />
      </label>

      <div className="pt-4">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="cta-pill"
        >
          {state === "sent"
            ? "Sent. We'll be in touch."
            : state === "submitting"
            ? "Sending…"
            : "Send Message"}
          {state === "idle" ? <span aria-hidden>→</span> : null}
        </button>
        <p className="mt-3 text-xs text-muted">
          We&apos;ll respond within one business day.
        </p>
      </div>
    </form>
  );
}

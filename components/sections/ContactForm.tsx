"use client";

import { useState } from "react";
import { services } from "@/lib/content";

/**
 * Contact form — POSTs to /api/contact, which emails the submission via Resend.
 * Hairline-only inputs, no filled buttons.
 */
export function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "submitting") return;
    setState("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(
          payload.error || "Something went wrong. Please try again."
        );
      }
      form.reset();
      setState("sent");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Honeypot — hidden from users; bots that fill it are silently dropped. */}
      <div className="hidden" aria-hidden>
        <label>
          Do not fill this in
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

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
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Other">Other</option>
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
          disabled={state === "submitting" || state === "sent"}
          className="cta-pill"
        >
          {state === "sent"
            ? "Sent. We'll be in touch."
            : state === "submitting"
            ? "Sending…"
            : "Send Message"}
          {state === "idle" || state === "error" ? (
            <span aria-hidden>→</span>
          ) : null}
        </button>
        {state === "error" ? (
          <p className="mt-3 text-xs text-red-700" role="alert">
            {error}
          </p>
        ) : (
          <p className="mt-3 text-xs text-muted">
            We&apos;ll respond within one business day.
          </p>
        )}
      </div>
    </form>
  );
}

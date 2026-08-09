import { NextResponse } from "next/server";

/**
 * Contact form handler → sends the submission as an email via Resend's REST API.
 *
 * Env vars (set in .env.local for dev, and in the Vercel dashboard for prod):
 *   RESEND_API_KEY   – required. Your Resend API key (re_...).
 *   CONTACT_TO_EMAIL – where submissions are delivered.
 *                      Defaults to contact@wingspaninnovations.com.
 *   CONTACT_FROM_EMAIL – the verified sender. Must be on a domain you've
 *                      verified in Resend. Defaults to the Resend sandbox
 *                      sender (onboarding@resend.dev) so it works before you
 *                      verify your domain — but sandbox can only deliver to
 *                      the email you signed up with, so set a real one for prod.
 */

// Route Handlers are not cached; POST is always dynamic. Runs on the Node runtime.
export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@wingspaninnovations.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Escape user-provided text before embedding it in the HTML email body.
const esc = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const service = String(body.service ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body._gotcha ?? "").trim();

  // Silently accept bot submissions (honeypot filled) without sending.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (message.length > 5000 || name.length > 200) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact email.");
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const html = `
    <h2>New enquiry from the Wingspan Innovations website</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> ${esc(email)}</p>
    ${company ? `<p><strong>Company:</strong> ${esc(company)}</p>` : ""}
    ${service ? `<p><strong>Service of interest:</strong> ${esc(service)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${esc(message)}</p>
  `.trim();

  const text = [
    "New enquiry from the Wingspan Innovations website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    service ? `Service of interest: ${service}` : null,
    "",
    "Message:",
    message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Wingspan Website <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Website enquiry — ${name}${service ? ` · ${service}` : ""}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend API error:", res.status, detail);
      return NextResponse.json(
        { error: "Could not send your message. Please try again or email us directly." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Failed to reach Resend:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or email us directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

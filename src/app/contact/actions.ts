"use server";

import nodemailer from "nodemailer";

export type EnquiryState =
  | { status: "idle" }
  | { status: "invalid"; errors: Record<string, string>; values: Record<string, string> }
  | { status: "sent" }
  | { status: "not-configured"; mailto: string }
  | { status: "error"; mailto: string };

const FIELDS = ["name", "company", "email", "phone", "country", "interest", "coil", "output", "message"] as const;
const LABELS: Record<(typeof FIELDS)[number], string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  country: "Country",
  interest: "Machine of interest",
  coil: "Coil to wind",
  output: "Target output",
  message: "Requirement",
};
const TO_FALLBACK = "info@synthesis-winding.com";

const mailtoFor = (v: Record<string, string>) => {
  const body = FIELDS.filter((f) => v[f]).map((f) => `${LABELS[f]}: ${v[f]}`).join("\n");
  return `mailto:${TO_FALLBACK}?subject=${encodeURIComponent(`Enquiry — ${v.interest || "Winding machine"}`)}&body=${encodeURIComponent(body)}`;
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/**
 * Validates the enquiry and emails it over SMTP. Configuration (env, never committed):
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS — mail account (e.g. Gmail + app password)
 *   ENQUIRY_TO — where enquiries are delivered (defaults to SMTP_USER)
 * Without configuration, or if sending fails, the visitor is offered a pre-filled email — never a silent drop.
 */
export async function sendEnquiry(_prev: EnquiryState, form: FormData): Promise<EnquiryState> {
  if (String(form.get("website") ?? "")) return { status: "sent" }; // honeypot: bots fill the hidden field

  const v = Object.fromEntries(FIELDS.map((f) => [f, String(form.get(f) ?? "").trim().slice(0, 4000)])) as Record<string, string>;
  const errors: Record<string, string> = {};
  if (!v.name) errors.name = "Please enter your name.";
  if (!v.company) errors.company = "Please enter your company.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = "Please enter a valid email address.";
  if (!v.country) errors.country = "Please enter your country.";
  if (v.message.length < 10) errors.message = "Tell us a little about the coil or machine you need.";
  if (Object.keys(errors).length) return { status: "invalid", errors, values: v };

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return { status: "not-configured", mailto: mailtoFor(v) };
  const port = Number(SMTP_PORT || 465);
  const to = process.env.ENQUIRY_TO || SMTP_USER;

  const rows = FIELDS.map((f) => `<tr><td style="padding:6px 12px;color:#5c5d60;font:12px monospace;text-transform:uppercase;vertical-align:top">${LABELS[f]}</td><td style="padding:6px 12px;font:14px sans-serif;white-space:pre-wrap">${esc(v[f] || "—")}</td></tr>`).join("");

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transport.sendMail({
      from: `"Synthesis website" <${SMTP_USER}>`,
      to,
      replyTo: `"${v.name.replace(/"/g, "")}" <${v.email}>`,
      subject: `Website enquiry — ${v.interest || "Winding machine"} — ${v.company}`,
      text: FIELDS.map((f) => `${LABELS[f]}: ${v[f] || "—"}`).join("\n"),
      html: `<h2 style="font:600 18px sans-serif">New enquiry from the website</h2><table style="border-collapse:collapse">${rows}</table><p style="font:12px sans-serif;color:#5c5d60">Reply to this email to answer ${esc(v.name)} directly.</p>`,
    });
    return { status: "sent" };
  } catch (err) {
    console.error("[enquiry] SMTP send failed:", err instanceof Error ? err.message : err);
    return { status: "error", mailto: mailtoFor(v) };
  }
}

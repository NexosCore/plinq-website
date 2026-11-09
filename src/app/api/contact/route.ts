import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  escapeHtml,
  parseContactPayload,
} from "@/lib/contact-validation";
import { getClientIp, isRateLimited } from "@/lib/contact-rate-limit";

export const runtime = "nodejs";

function envRecipient(): string | null {
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  return to && to.length > 0 ? to : null;
}

function envSender(): string | null {
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  return from && from.length > 0 ? from : null;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "For mange forsøk. Prøv igjen om litt." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Ugyldig forespørsel." },
      { status: 400 },
    );
  }

  const parsed = parseContactPayload(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const { name, email, company, message, companyWebsite } = parsed.data;

  if (companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = envRecipient();
  const from = envSender();

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "Kontaktskjemaet er midlertidig utilgjengelig." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const subject = company
    ? `Ny henvendelse fra ${name} (${company})`
    : `Ny henvendelse fra ${name}`;

  const text = [
    `Navn: ${name}`,
    `E-post: ${email}`,
    company ? `Bedrift: ${company}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <p><strong>Navn:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(email)}</p>
    ${company ? `<p><strong>Bedrift:</strong> ${escapeHtml(company)}</p>` : ""}
    <hr />
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: "Kunne ikke sende meldingen. Prøv igjen senere." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

export const CONTACT_LIMITS = {
  nameMin: 2,
  nameMax: 120,
  emailMax: 254,
  companyMax: 120,
  messageMin: 10,
  messageMax: 5000,
} as const;

export type ContactFields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type ContactPayload = ContactFields & {
  companyWebsite?: string;
};

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function trimField(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function parseContactPayload(body: unknown): {
  ok: true;
  data: ContactPayload;
} | {
  ok: false;
  error: string;
} {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Ugyldig forespørsel." };
  }

  const raw = body as Record<string, unknown>;
  const name = trimField(raw.name, CONTACT_LIMITS.nameMax);
  const email = trimField(raw.email, CONTACT_LIMITS.emailMax).toLowerCase();
  const company = trimField(raw.company, CONTACT_LIMITS.companyMax);
  const message = trimField(raw.message, CONTACT_LIMITS.messageMax);
  const companyWebsite = trimField(raw.companyWebsite, 200);

  if (name.length < CONTACT_LIMITS.nameMin) {
    return { ok: false, error: "Oppgi navnet ditt." };
  }
  if (!email || email.length > CONTACT_LIMITS.emailMax || !EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Oppgi en gyldig e-postadresse." };
  }
  if (message.length < CONTACT_LIMITS.messageMin) {
    return { ok: false, error: "Meldingen må være minst 10 tegn." };
  }

  return {
    ok: true,
    data: { name, email, company, message, companyWebsite },
  };
}

export function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

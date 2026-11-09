"use client";

import { useId, useState } from "react";
import { CONTACT_LIMITS } from "@/lib/contact-validation";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      companyWebsite: String(data.get("companyWebsite") ?? ""),
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (response.ok && result?.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      setStatus("error");
      setErrorMessage(
        result?.error ??
          "Kunne ikke sende meldingen. Prøv igjen, eller skriv til support@plinq.no.",
      );
    } catch {
      setStatus("error");
      setErrorMessage(
        "Kunne ikke sende meldingen. Sjekk nettverket og prøv igjen.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="contact-form-success"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-semibold text-text">
          Takk for henvendelsen!
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          Vi tar kontakt med deg så snart vi kan.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-ocean-mint hover:underline"
          onClick={() => setStatus("idle")}
        >
          Send en ny melding
        </button>
      </div>
    );
  }

  return (
    <form
      id="kontakt-skjema"
      className="contact-form"
      onSubmit={onSubmit}
      noValidate
      aria-labelledby={`${formId}-title`}
    >
      <p id={`${formId}-title`} className="sr-only">
        Kontaktskjema
      </p>

      <div className="contact-form-field">
        <label htmlFor={`${formId}-name`}>Navn</label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          minLength={CONTACT_LIMITS.nameMin}
          maxLength={CONTACT_LIMITS.nameMax}
          disabled={status === "submitting"}
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor={`${formId}-email`}>E-post</label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={CONTACT_LIMITS.emailMax}
          inputMode="email"
          disabled={status === "submitting"}
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor={`${formId}-company`}>
          Bedrift <span className="text-text-muted">(valgfritt)</span>
        </label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={CONTACT_LIMITS.companyMax}
          disabled={status === "submitting"}
        />
      </div>

      <div className="contact-form-field">
        <label htmlFor={`${formId}-message`}>Melding</label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          minLength={CONTACT_LIMITS.messageMin}
          maxLength={CONTACT_LIMITS.messageMax}
          disabled={status === "submitting"}
        />
      </div>

      <HoneypotField aria-hidden tabIndex={-1} autoComplete="off" />

      {status === "error" && errorMessage ? (
        <p className="contact-form-error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        className="contact-form-submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sender …" : "Send henvendelse"}
      </button>
    </form>
  );
}

function HoneypotField(props: React.ComponentProps<"input">) {
  return (
    <input
      {...props}
      name="companyWebsite"
      className="contact-honeypot"
      defaultValue=""
    />
  );
}

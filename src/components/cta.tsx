import { ContactForm } from "@/components/contact-form";

export function Cta() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      className="scroll-mt-24 pb-20 pt-6 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="contact-panel rounded-3xl border border-border px-7 py-12 sm:px-14 sm:py-16">
          <div>
            <p className="pricing-eyebrow">LA OSS TA EN PRAT</p>
            <h2
              id="contact-title"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Hva vil du vise
              <br />
              på skjermene dine?
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-text-muted">
              Fortell oss om bedriften din, antall skjermer og lokasjoner. Vi
              hjelper deg med å finne et oppsett som passer.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

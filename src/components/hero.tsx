import { ConceptImage } from './concept-image';
import { contactHref } from '@/lib/business';

export function Hero() {
  return (
    <section className="business-hero relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="pricing-eyebrow reveal">DIGITAL REKLAME · PERSONLIG OPPSETT</p>
        <h1 className="reveal max-w-4xl text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.05em] sm:text-6xl lg:text-[4.5rem]">
          Digital reklame på TV –<br className="hidden sm:block" /> <span className="text-ocean-mint">enkelt for din bedrift.</span>
        </h1>
        <p className="reveal mt-7 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
          Publiser bilder og videoer direkte fra mobilen til skjermene i butikken. Plinq hjelper bedrifter med en enkel løsning for digital reklame.
        </p>
        <div className="reveal mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href={contactHref} className="business-button">Kontakt oss <span aria-hidden="true">↗</span></a>
          <a href="#slik-fungerer-det" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-ocean-mint">Se hvordan Plinq fungerer</a>
        </div>
        <p className="mt-7 text-xs tracking-wide text-text-muted">Personlig kontakt. Oppsett sammen med oss. En løsning for deres behov.</p>
        <div className="mt-12 sm:mt-16"><ConceptImage src="/images/plinq-mobil-tv.png" alt="Konseptillustrasjon av Plinq: samme reklame for bakervarer på en mobil og en TV i butikken." priority /></div>
      </div>
    </section>
  );
}

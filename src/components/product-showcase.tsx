import { ConceptImage } from './concept-image';

const workflow = [
  ['Last opp', 'Velg bilder eller videoer fra mobilen.'],
  ['Publiser', 'Velg hvilke tilkoblede skjermer innholdet skal vises på.'],
  ['Vis på TV', 'La butikkens skjermer vise reklamen.'],
];

export function ProductShowcase() {
  return <section id="slik-fungerer-det" className="scroll-mt-24 border-y border-border/50 bg-midnight-elevated/40 py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="pricing-eyebrow">FRA IDÉ TIL SKJERM</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Fra mobil til butikk-TV</h2>
        <p className="mt-4 leading-relaxed text-text-muted">Når løsningen er satt opp, kan ansatte laste opp bilder og videoer fra mobilen, velge skjermer og publisere.</p>
      </div>
      <ConceptImage src="/images/plinq-publisering.png" alt="Konseptillustrasjon: en ansatt fotograferer bakervarer, publiserer fra mobilen og viser reklamen på TV." />
      <ol className="mt-9 grid gap-6 sm:grid-cols-3">{workflow.map(([title, description], index) => <li key={title} className="border-t border-border pt-5"><span className="text-xs font-semibold text-ocean-mint">0{index + 1}</span><h3 className="mt-3 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p></li>)}</ol>
    </div>
  </section>;
}

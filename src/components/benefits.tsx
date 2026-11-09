const benefits = [
  "Publiser direkte fra mobilen",
  "Bilder og videoer",
  "Administrer flere skjermer",
  "Automatisk reklameavspilling",
  "Enkelt for ansatte å bruke",
  "Stabil avspilling med lokal lagring der det støttes",
] as const;

export function Benefits() {
  return (
    <section
      id="fordeler"
      className="scroll-mt-24 border-y border-border/50 bg-midnight-elevated/30 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
          Fordeler
        </h2>
        <p className="mt-3 max-w-xl text-text-muted">
          Fokus på det som teller i butikkhverdagen — ikke tunge administrasjonsverktøy.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-border/80 bg-midnight-soft/40 px-4 py-4 text-sm leading-relaxed text-text sm:px-5"
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ocean-mint/20 text-ocean-mint"
                aria-hidden
              >
                <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M2.5 6.5 4.5 8.5 9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

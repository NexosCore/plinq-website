const steps = [
  {
    title: "Fortell oss om bedriften din",
    description: "Vi starter med en prat om skjermene, lokasjonene og behovene deres.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 16V4m0 0 4 4m-4-4-4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Vi hjelper deg med oppsett og tilpasning",
    description: "Sammen avklarer vi løsningen og får skjermene klare til bruk.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M7 7h10M7 12h6M7 17h8" strokeLinecap="round" />
        <rect x="3" y="3" width="18" height="18" rx="3" />
      </svg>
    ),
  },
  {
    title: "Publiser reklame på skjermene dine",
    description: "Ansatte laster opp bilder og videoer fra mobilen og velger skjermene reklamen skal vises på.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="2" y="5" width="20" height="13" rx="2" />
        <path d="M8 21h8" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

export function Steps() {
  return (
    <section id="slik-hjelper-vi-deg" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
          Vi hjelper deg hele veien
        </h2>
        <p className="mt-3 max-w-xl text-text-muted">
          Personlig kontakt fra første samtale til dere publiserer selv.
        </p>
        <ol className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-midnight-elevated/60 p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-ocean-mint">
                  {step.icon}
                </span>
                <span className="text-sm font-semibold text-ocean-mint-dim">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

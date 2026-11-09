const APP_URL = "https://app.plinq.no";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="reveal mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-mint-dim">
          Lag reklame. Publiser. Vis på TV.
        </p>
        <h1 className="reveal max-w-3xl text-[2.35rem] font-bold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[3.35rem]">
          Din reklame. På skjermen. På sekunder.
        </h1>
        <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl">
          Gjør TV-skjermene i butikken levende. Last opp bilder og videoer fra
          mobilen, publiser med noen få trykk og la Plinq ta seg av resten.
        </p>
        <div
          className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "0.1s" }}
        >
          <a
            href={APP_URL}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ocean-mint px-7 text-base font-semibold text-midnight transition-[background,transform] hover:bg-[#8aefe4] active:scale-[0.98]"
          >
            Åpne Plinq
          </a>
          <a
            href="#slik-fungerer-det"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-midnight-elevated/80 px-7 text-base font-semibold text-text transition-colors hover:border-cyan/40 hover:bg-midnight-soft/50"
          >
            Se hvordan det fungerer
          </a>
        </div>
      </div>
    </section>
  );
}

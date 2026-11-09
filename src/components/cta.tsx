const APP_URL = "https://app.plinq.no";

export function Cta() {
  return (
    <section className="pb-20 pt-4 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-midnight-soft via-midnight-elevated to-midnight px-8 py-14 text-center sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 50% 0%, #2ec4dc33 0%, transparent 55%)",
            }}
          />
          <h2 className="relative text-2xl font-bold tracking-tight text-text sm:text-4xl">
            Klar for å gjøre skjermene dine levende?
          </h2>
          <a
            href={APP_URL}
            className="relative mt-8 inline-flex h-12 items-center justify-center rounded-full bg-ocean-mint px-8 text-base font-semibold text-midnight transition-[background,transform] hover:bg-[#8aefe4] active:scale-[0.98]"
          >
            Åpne Plinq
          </a>
        </div>
      </div>
    </section>
  );
}

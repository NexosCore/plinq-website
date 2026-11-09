import Image from "next/image";

function FlowConnector() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[38%] -translate-x-1/2 -translate-y-1/2 lg:block"
      aria-hidden
    >
      <svg viewBox="0 0 200 40" className="h-10 w-full animate-pulse-line">
        <defs>
          <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6ee7d8" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#6ee7d8" stopOpacity="1" />
            <stop offset="100%" stopColor="#2ec4dc" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M 4 20 Q 100 4 196 20"
          fill="none"
          stroke="url(#flow)"
          strokeWidth="2"
          strokeDasharray="6 4"
        />
        <circle cx="100" cy="12" r="3" fill="#6ee7d8" />
      </svg>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="animate-float mx-auto w-[min(100%,280px)]">
      <div className="rounded-[2rem] border border-border bg-midnight-elevated p-2.5 shadow-[0_24px_80px_-20px_#00000080]">
        <div className="overflow-hidden rounded-[1.5rem] bg-[#f5f6f8] text-[#202624]">
          <div className="flex items-center justify-between border-b border-[#dfe3e8] bg-white px-4 py-3">
            <span className="text-lg font-semibold tracking-tight text-[#173e34]">
              plinq
              <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-[#b8db87]" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[#626b66]">
              Reklamer
            </span>
          </div>
          <div className="space-y-3 p-3">
            <div className="rounded-xl border border-[#dfe3e8] bg-white p-3">
              <div className="mb-2 h-20 rounded-lg bg-[#173e34]" />
              <p className="text-sm font-semibold">30 % rabatt i dag</p>
              <p className="text-xs text-[#626b66]">Ekstra brød</p>
              <div className="mt-2 flex flex-wrap gap-1">
                <span className="rounded-full bg-[#eef7e7] px-2 py-0.5 text-[10px] font-semibold text-[#245345]">
                  Butikk A
                </span>
              </div>
            </div>
            <div
              className="w-full rounded-lg bg-[#245345] py-2.5 text-center text-xs font-bold text-white"
              aria-hidden
            >
              Publiser til skjerm
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-text-muted">
        Publiser fra mobilen
      </p>
    </div>
  );
}

function TvPreview() {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-border bg-midnight-soft p-3 shadow-[0_24px_80px_-20px_#00000080]">
        <div className="overflow-hidden rounded-xl border-[6px] border-[#102b24] bg-[#173e34] aspect-video relative">
          <Image
            src="/images/tv-reklame.png"
            alt="Reklame som vises på butikkens TV-skjerm"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="mx-auto mt-3 h-2 w-16 rounded-full bg-border" />
      </div>
      <p className="mt-4 text-center text-sm text-text-muted">
        Vises automatisk på TV
      </p>
    </div>
  );
}

export function ProductShowcase() {
  return (
    <section className="relative border-y border-border/50 bg-midnight-elevated/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Fra mobil til butikk-TV
          </h2>
          <p className="mt-3 text-text-muted">
            Det du publiserer i Plinq, vises på skjermene du har koblet til.
          </p>
        </div>
        <div className="relative mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <FlowConnector />
          <MobilePreview />
          <TvPreview />
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { BrandLogo } from "./brand-logo";

const APP_URL = "https://app.plinq.no";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-midnight/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <Link href="/" className="shrink-0" aria-label="Plinq forsiden">
          <BrandLogo />
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-text-muted md:flex"
          aria-label="Hovedmeny"
        >
          <Link href="/#slik-fungerer-det" className="transition-colors hover:text-text">
            Hvordan det fungerer
          </Link>
          <Link href="/#fordeler" className="transition-colors hover:text-text">
            Fordeler
          </Link>
          <a
            href={`${APP_URL}/login`}
            className="transition-colors hover:text-text"
          >
            Logg inn
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/priser" className="text-sm font-medium text-text hover:text-ocean-mint">Priser</Link>
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-medium text-text-muted transition-colors hover:text-text md:hidden"
          >
            Logg inn
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center rounded-full bg-ocean-mint px-4 py-2.5 text-sm font-semibold text-midnight transition-[background,transform] hover:bg-[#8aefe4] active:scale-[0.98] sm:px-5"
          >
            Åpne Plinq
          </a>
        </div>
      </div>
    </header>
  );
}

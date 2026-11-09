import Link from 'next/link';
import { BrandLogo } from './brand-logo';
import { contactHref } from '@/lib/business';

export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-border/60 bg-midnight/90 backdrop-blur-md">
    <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
      <Link href="/" aria-label="Plinq forsiden"><BrandLogo /></Link>
      <nav aria-label="Hovedmeny" className="hidden items-center gap-7 text-sm text-text-muted md:flex">
        <Link href="/#slik-fungerer-det" className="hover:text-text">Slik fungerer det</Link>
        <Link href="/priser" className="hover:text-text">For bedrifter</Link>
        <Link href="/#kontakt" className="hover:text-text">Kontakt</Link>
      </nav>
      <div className="flex items-center gap-4"><Link href="/priser" className="text-xs text-text-muted hover:text-text md:hidden">For bedrifter</Link><Link href={contactHref} className="rounded-full bg-ocean-mint px-4 py-2.5 text-xs font-semibold text-midnight transition-colors hover:bg-[#8aefe4] sm:text-sm">Kontakt oss</Link></div>
    </div>
  </header>;
}

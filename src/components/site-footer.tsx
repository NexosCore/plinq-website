import Link from 'next/link';
import { BrandLogo } from './brand-logo';
import { contactEmail } from '@/lib/business';

export function SiteFooter() {
  return <footer className="border-t border-border py-12">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:justify-between sm:px-8">
      <div><BrandLogo className="text-xl" /><p className="mt-3 text-sm text-text-muted">Digital reklame på TV – tilpasset din bedrift.</p><p className="mt-2 text-xs text-text-muted">Et produkt fra Nexos AS.</p></div>
      <nav aria-label="Bunnmeny" className="flex flex-col gap-4 text-sm text-text-muted"><Link href="/priser" className="hover:text-ocean-mint">For bedrifter</Link><a href={`mailto:${contactEmail}`} className="text-ocean-mint">{contactEmail}</a><a href="https://app.plinq.no/login" className="hover:text-text">Logg inn · eksisterende kunder</a></nav>
    </div>
  </footer>;
}

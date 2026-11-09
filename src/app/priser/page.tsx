import { ConceptImage } from '@/components/concept-image';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { BusinessSolution } from '@/components/business-solution';
import { Cta } from '@/components/cta';
import { businessFaq } from '@/lib/business';

const description = 'Digital reklame på TV – tilpasset din bedrift. Vi avklarer antall skjermer, lokasjoner, oppsett og tilpasninger sammen. Kontakt oss for tilbud.';
export const metadata: Metadata = {
  title: 'En løsning tilpasset din bedrift', description,
  alternates: { canonical: '/priser' },
  openGraph: { title: 'En løsning tilpasset din bedrift · Plinq', url: '/priser', description },
  twitter: { title: 'En løsning tilpasset din bedrift · Plinq', description },
};

export default function BusinessPage() {
  return <><SiteHeader /><main><BusinessSolution fullPage />
    <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20"><ConceptImage src="/images/plinq-bedrift.png" alt="Konseptillustrasjon av Plinq i et bakeri, med mobil, datamaskin og flere reklameskjermer." /></div>
    <section className="pricing-faq mx-auto max-w-6xl px-5 sm:px-8" aria-labelledby="faq-title">
      <div><p className="pricing-eyebrow">GODT Å VITE</p><h2 id="faq-title">Fra første prat<br />til butikkens skjermer.</h2><p>Her finner du svar på vanlige spørsmål om Plinq for bedrifter.</p></div>
      <div className="faq-items">{businessFaq.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
    </section><Cta />
  </main><SiteFooter /></>;
}

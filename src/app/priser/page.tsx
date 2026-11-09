import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Pricing } from '@/components/pricing';
import { plans, pricingFaq, planContactHref } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Priser',
  description: 'Gratis: 0 kr/mnd. for 1 skjerm. Standard: 99 kr per skjerm per måned. Enterprise: kontakt oss for pris. Finn abonnementet som passer din butikk.',
  alternates: { canonical: '/priser' },
  openGraph: { title: 'Priser · Plinq', url: '/priser', description: 'Tre abonnementer. Fra én skjerm til en tilpasset løsning.' },
};

export default function PricesPage() {
  return <><SiteHeader /><main><Pricing fullPage />
    <section className="pricing-faq mx-auto max-w-6xl px-5 sm:px-8" aria-labelledby="faq-title">
      <div><p className="pricing-eyebrow">GODT Å VITE</p><h2 id="faq-title">Lurer du på<br />noe?</h2><p>Her er svarene på vanlige<br className="hidden md:block" /> spørsmål om abonnementene.</p></div>
      <div className="faq-items">{pricingFaq.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
    </section>
    <section className="pricing-contact mx-auto max-w-6xl px-5 sm:px-8" aria-labelledby="contact-title">
      <p className="pricing-eyebrow">NESTE STEG</p><h2 id="contact-title">La oss finne din løsning.</h2><p>Fortell oss hvilket abonnement du ønsker og hvor mange skjermer du trenger.</p>
      <div className="contact-options">{plans.map(plan => <div key={plan.id} id={`kontakt-${plan.id}`} className="contact-option"><h3>{plan.name}</h3><p>Send oss en e-post for å komme i gang.</p><a href={planContactHref(plan.name)}>Kontakt oss om {plan.name} ↗</a></div>)}</div><p>Du kan også skrive direkte til <a className="text-ocean-mint" href="mailto:support@plinq.no">support@plinq.no</a>.</p>
    </section>
  </main><SiteFooter /></>;
}

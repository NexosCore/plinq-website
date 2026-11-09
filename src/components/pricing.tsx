import Link from 'next/link';
import { plans } from '@/lib/pricing';

export function Pricing({ fullPage = false }: { fullPage?: boolean }) {
  const Heading = fullPage ? 'h1' : 'h2';
  return (
    <section id="priser" aria-labelledby="pricing-heading" className={`pricing-section ${fullPage ? 'pricing-page' : ''}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="pricing-intro">
          <p className="pricing-eyebrow">PLINQ · PRISER</p>
          <Heading id="pricing-heading">Én skjerm eller flere.<br /><span>Finn din Plinq.</span></Heading>
          <p>Start med én skjerm. Velg Standard når du trenger flere,<br className="hidden sm:block" /> eller snakk med oss om en tilpasset løsning.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.id} className={`price-card ${plan.id === 'standard' ? 'price-card-featured' : ''}`} aria-labelledby={`plan-${plan.id}`}>
              <div className="plan-topline"><h3 id={`plan-${plan.id}`}>{plan.name}</h3>{plan.id === 'standard' && <span className="plan-badge">For flere skjermer</span>}</div>
              <p className="plan-description">{plan.description}</p>
              {plan.price === null ? (
                <div className="plan-price plan-price-contact"><strong>La oss<br />snakke.</strong></div>
              ) : (
                <div className="plan-price"><span className="price-prefix" aria-hidden="true">{'\u00a0'}</span><strong>{plan.price}</strong><span className="price-unit">{plan.unit}</span></div>
              )}
              <div className="plan-detail"><span aria-hidden="true">✓</span>{plan.detail}</div>
              <a className="plan-button" href={`/priser/#kontakt-${plan.id}`}>{plan.cta}<span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <p className="pricing-note">Vi hjelper deg i gang. Ta kontakt for å velge abonnement.</p>
        {!fullPage && <div className="pricing-more"><Link href="/priser">Se priser og vanlige spørsmål <span aria-hidden="true">→</span></Link></div>}
      </div>
    </section>
  );
}

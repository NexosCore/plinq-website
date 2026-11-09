import Link from 'next/link';
import { contactHref, solutionFactors } from '@/lib/business';

export function BusinessSolution({ fullPage = false }: { fullPage?: boolean }) {
  const Heading = fullPage ? 'h1' : 'h2';
  return <section className={`business-solution ${fullPage ? 'business-page' : ''}`} aria-labelledby="solution-title">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="business-intro">
        <p className="pricing-eyebrow">PLINQ FOR BEDRIFTER</p>
        <Heading id="solution-title">En løsning tilpasset<br className="hidden sm:block" /> din bedrift</Heading>
        <p>Plinq gjør det enkelt å vise reklamebilder og videoer på TV-skjermer. Vi hjelper deg med oppsett og en løsning som passer virksomheten din.</p>
        <a href={contactHref} className="business-button">Kontakt oss for tilbud <span aria-hidden="true">↗</span></a>
      </div>
      <div className="solution-factors">{solutionFactors.map(factor => <article key={factor.number}>
        <span className="factor-number" aria-hidden="true">{factor.number}</span><h3>{factor.title}</h3><p>{factor.description}</p>
      </article>)}</div>
      {!fullPage && <Link className="solution-link" href="/priser">Mer om løsningen for din bedrift <span aria-hidden="true">→</span></Link>}
    </div>
  </section>;
}

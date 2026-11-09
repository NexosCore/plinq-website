import Image from 'next/image';

export function ConceptImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return <figure>
    <div className="overflow-hidden rounded-2xl border border-border bg-midnight-elevated shadow-[0_24px_80px_-24px_#0008] sm:rounded-3xl">
      <Image src={src} alt={alt} width={1672} height={941} sizes="(max-width: 1152px) 100vw, 1088px" priority={priority} className="block h-auto w-full" />
    </div>
    <figcaption className="mt-3 text-xs leading-relaxed text-text-muted">Konseptillustrasjon av Plinq i bruk. Grensesnitt og innhold er illustrative.</figcaption>
  </figure>;
}

// Reserved for a future subscription launch. Do not import into public routes.
export const plans = [
  { id: 'gratis', name: 'Gratis', price: '0', unit: 'kr/mnd.', description: 'For små butikker som ønsker å komme i gang.', detail: '1 skjerm', cta: 'Kom i gang gratis' },
  { id: 'standard', name: 'Standard', price: '99', unit: 'kr per skjerm per måned', description: 'For butikker som trenger flere skjermer.', detail: 'Pris per skjerm', cta: 'Velg Standard' },
  { id: 'enterprise', name: 'Enterprise', price: null, unit: null, description: 'Skreddersydd for bedrifter.', detail: 'Tilpassede løsninger etter behov', cta: 'Kontakt oss for pris' },
] as const;

export const pricingFaq = [
  { question: 'Hva koster Plinq?', answer: 'Gratis koster 0 kr/mnd. og gjelder 1 skjerm. Standard koster 99 kr per skjerm per måned. Kontakt oss for pris på Enterprise.' },
  { question: 'Hvilket abonnement passer for min butikk?', answer: 'Gratis er for små butikker som ønsker å komme i gang med én skjerm. Standard er for butikker som trenger flere skjermer. Enterprise er for bedrifter som trenger en tilpasset løsning.' },
  { question: 'Hvordan beregnes prisen for Standard?', answer: 'Standard koster 99 kr per skjerm per måned. To skjermer koster dermed 198 kr per måned, og tre skjermer koster 297 kr per måned.' },
  { question: 'Hvordan kommer jeg i gang eller bytter abonnement?', answer: 'Kontakt oss med abonnementet du ønsker og hvor mange skjermer du trenger, så avklarer vi neste steg sammen.' },
  { question: 'Hva koster en tilpasset løsning?', answer: 'Kontakt oss for pris på Enterprise. Kontakt oss om behovene deres for å få en konkret pris.' },
];

export function planContactHref(name: string) {
  return `mailto:support@plinq.no?subject=${encodeURIComponent(`Plinq – ${name}`)}&body=${encodeURIComponent(`Hei! Jeg er interessert i ${name}.\n\nBedrift: \nAntall skjermer: \n\n`)}`;
}

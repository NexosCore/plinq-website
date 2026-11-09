# plinq-website

Offentlig markedsføringsside for [Plinq](https://plinq.no) — helt separat fra SaaS-appen på [app.plinq.no](https://app.plinq.no).

## Stack

- Next.js (statisk eksport)
- Tailwind CSS
- Ingen database, API eller innlogging

## Utvikling

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy

Vercel-prosjekt: **plinq-website**  
Planlagt domene: **plinq.no** (www → apex)

SaaS-appen deployes fra eget repo og Vercel-prosjekt (`plinq`).

## Offentlig bedriftsstrategi

Forsiden og `/priser` presenterer personlig kontakt, oppsett og tilpasning.
Kontaktpunkt: `support@plinq.no`. Ingen registrering eller betaling på nettstedet.
Tidligere prisdata og priskomponent beholdes i `src/lib/pricing.ts` og
`src/components/pricing.tsx`, men skal ikke importeres fra offentlige sider.

Verifiser etter bygg med `node --test tests/pricing.test.mjs`.
Testene kontrollerer også at planene ikke lekker inn i eksporterte sider og skript.

Produktillustrasjoner: De tre `public/images/plinq-*.png`-filene er levert av brukeren.
De vises med merking som konseptillustrasjoner, ikke som skjermbilder av dagens app.
Originalt TV-testbilde er bevart, men brukes ikke i offentlig presentasjon.

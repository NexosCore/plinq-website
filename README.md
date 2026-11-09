# plinq-website

Offentlig markedsføringsside for [Plinq](https://plinq.no) — helt separat fra SaaS-appen på [app.plinq.no](https://app.plinq.no).

## Stack

- Next.js (statiske sider + `POST /api/contact`)
- Tailwind CSS
- [Resend](https://resend.com) for kontaktskjema
- Ingen database, Turso, R2 eller innlogging på nettstedet

## Utvikling

```bash
npm install
cp .env.example .env.local
npm run dev
```

```bash
npm run lint
npm run typecheck
npm run build
npm test
```

## Miljøvariabler (Vercel)

| Variabel | Beskrivelse |
|----------|-------------|
| `RESEND_API_KEY` | Resend API-nøkkel (kun server) |
| `CONTACT_FROM_EMAIL` | Verifisert avsender, f.eks. `Plinq <kontakt@plinq.no>` |
| `CONTACT_TO_EMAIL` | Mottaker, f.eks. `support@plinq.no` |

## Deploy

Vercel-prosjekt: **plinq-website**  
Planlagt domene: **plinq.no** (www → apex)

SaaS-appen deployes fra eget repo og Vercel-prosjekt (`plinq`).

## Offentlig bedriftsstrategi

Forsiden og `/priser` leder til kontaktskjemaet (`/#kontakt-skjema`).
Ingen registrering eller betaling på nettstedet.

Tidligere prisdata beholdes i `src/lib/pricing.ts`, men brukes ikke på offentlige sider.

Verifiser med `npm test`.

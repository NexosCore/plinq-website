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

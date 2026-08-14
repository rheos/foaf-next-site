# FOAF Foundation website

This repository contains the 2025 Next.js implementation of the FOAF Foundation website. It explains FOAF's trust-based mutual-credit model, GrowOperative, the FOAF and RHEO token model, and the project roadmap.

Visit the current public site at [foaf.foundation](https://foaf.foundation).

## Status

The maintained website has moved to a newer codebase. This repository remains public as a record of the earlier implementation and should not be treated as the active production source.

The roadmap, token figures, and contact details in this snapshot are historical. Check the current website and the [FOAF Foundation organization](https://github.com/FOAF-Foundation) for current project information.

## What is here

- A responsive public-information site built with the Next.js App Router
- FOAF, GrowOperative, token-model, whitepaper, roadmap, and participation content
- Day and night themes stored in the browser
- Scroll-triggered section animation
- Open Graph and social-card metadata for `foaf.foundation`

## Stack

- Next.js 14
- React 18
- TypeScript with strict checking
- Tailwind CSS 3
- Framer Motion
- `react-intersection-observer`

## Routes

| Route | Content |
| --- | --- |
| `/` | FOAF overview, principles, mission, and first use case |
| `/growoperative` | GrowOperative model and example exchange flow |
| `/tokens` | FOAF and RHEO token model |
| `/whitepaper` | Embedded project whitepaper |
| `/roadmap` | Project phases as described in the 2025 site |
| `/get-involved` | Partnership and contact information from the 2025 site |

## Local development

The project uses npm and has no required environment variables.

```bash
git clone https://github.com/rheos/foaf-next-site.git
cd foaf-next-site
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run lint
npm run build
npm run start
```

`npm run start` serves the production build created by `npm run build`.

## Deployment

This version was built for a standard Vercel Next.js deployment. The deployment account, production domain assignment, and DNS configuration are managed outside this repository.

The maintained public site is [foaf.foundation](https://foaf.foundation). Confirm the active production source before changing its deployment or domain mapping.

## Project boundaries

This repository contains website code and public editorial content only. It does not contain:

- The FOAF protocol implementation or test vectors
- The GrowOperative application or API
- FOAF authentication, SDK, or on-chain components
- Wallets, credentials, deployment secrets, or operational records

Related protocol and tooling repositories are maintained separately under the [FOAF Foundation GitHub organization](https://github.com/FOAF-Foundation). Mention of FOAF, RHEO, or GrowOperative in this site does not mean their implementation lives here.

## Licence

This repository does not currently include an open-source licence. Public visibility does not grant permission to copy, redistribute, or reuse its code, design, or content.

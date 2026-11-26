# Cold Enough

Website for Cold Enough, a commercial refrigeration specialist covering London and surrounding areas.

Built with React, TypeScript, Vite, Tailwind CSS and React Router.

## Run locally

```bash
npm install
cp .env.example .env   # first time only
npm run dev            # http://localhost:5173
```

| Command | What it does |
|---|---|
| `npm run build` | Type-checks and builds to `dist/` |
| `npm run preview` | Serves the production build |
| `npm run lint` | Runs the linter |

## Enquiry form

The form sends enquiries through [Formspree](https://formspree.io). Set `VITE_FORMSPREE_ID` in `.env` (see `.env.example`). Without it, nothing is sent and visitors are offered email instead.

## Editing content

| What | Where |
|---|---|
| Phone numbers, email, hours, service area | `src/config/site.ts` |
| Service pages | `src/data/servicePages.ts` |
| FAQs | `src/data/faqs.ts` |
| Leak detection videos | `src/data/media.ts` |
| Projects page | `src/pages/Projects.tsx` |
| Photos and videos | `public/images/`, `public/videos/` |

Some details are also written directly into pages, so search `src/` when changing them.

When adding a video, use MP4 (H.264), remove its audio and add a cover image. Keep originals in `originals-videos/`, which Git ignores.

## Deployment

Deploy on Vercel using the Vite preset, and add `VITE_FORMSPREE_ID` as an environment variable. Redeploy after changing it. `vercel.json` makes direct links to pages such as `/projects` work.

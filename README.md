# C Technology Website

Modern multi-page corporate B2B website for **C Technology**, a fintech and banking technology company focused on banks and financial institutions.

## Stack

- React 18
- TypeScript
- Vite
- React Router
- Data-driven content layer with RU/EN localization

## Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Available Routes

- `/`
- `/about`
- `/solutions`
- `/infrastructure`
- `/customers`
- `/partners`
- `/technology`
- `/industries`
- `/services`
- `/case-studies`
- `/contact`

A `404` fallback route is also included.

## Project Structure

```text
src
├─ components
│  ├─ layout
│  ├─ sections
│  └─ ui
├─ context
├─ data
├─ lib
├─ pages
├─ styles
└─ types
```

## Architecture Notes

- `src/data/content.ts`
  Central content layer for the site.
- `src/context/SiteContentContext.tsx`
  Locale-aware content access and language switching.
- `src/components/ui`
  Reusable building blocks like cards, buttons, wrappers, and form UI.
- `src/components/sections`
  Page sections composed from the UI layer.
- `src/pages`
  Route-level page composition.
- `src/lib/contactApi.ts`
  Simple contact form submission helper with mock fallback.

## Localization

The site supports:

- `en`
- `ru`

Localized content is stored in the central content layer and switched through the header language control.

## SEO / PWA Assets

Files in `public/`:

- `favicon.svg`
- `og-cover.svg`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `_redirects` for Netlify SPA rewrites

## Contact Form

The form submits to:

```text
/api/contact
```

If no backend endpoint is available yet, the frontend falls back to a mock success response so the UI flow remains testable.

## Deployment Notes

- The project is a client-side routed SPA, so the hosting environment should rewrite unknown routes to `index.html`.
- `sitemap.xml` currently uses `https://ctechnology.kg` as the canonical domain. Update it if the production domain changes.
- Social and Open Graph assets are already wired in `index.html`.
- `vercel.json` is included for Vercel SPA rewrites.
- `public/_redirects` is included for Netlify SPA rewrites.

## Handoff Checklist

- Update the production domain in `public/sitemap.xml` and `public/robots.txt` if needed.
- Connect a real backend endpoint for `POST /api/contact` when the contact form moves beyond mock mode.
- Ensure the deploy platform serves `index.html` for unknown routes.
- Run `npm run build` before deployment.
- Verify EN/RU content, social preview image, and contact details on the production domain.

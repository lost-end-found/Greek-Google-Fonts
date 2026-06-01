# Greek Google Fonts

Hand-picked combinations of Greek-capable Google Fonts, with a live preview and copy-paste CSS. Built with Nuxt 4, TypeScript, and Tailwind CSS 4, and deployed to Cloudflare Workers.

Live at **[greek-fonts.withlarry.com](https://greek-fonts.withlarry.com/)**.

## Features

- **Live preview** — type your own Greek (or Latin) text and see every pairing update instantly.
- **Copy-paste CSS** — each pairing ships a ready-to-use Google Fonts `@import` plus `font-family` rules for your own site.
- **Curated pairings** — a Pinia store of editorial font combinations, each tagged serif / sans / display with a short Greek note.
- **Poetry gallery** (`/gallery`) — an immersive, full-bleed reading experience pairing background photography with Greek poems set in the showcased fonts.
- **Self-hosted fonts** — all showcase families are served via `@nuxt/fonts` (Greek + Latin subsets) for fast, privacy-friendly loading.

## Tech stack

- [Nuxt 4](https://nuxt.com/) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [Pinia](https://pinia.vuejs.org/) for the font-combination store
- [`@nuxt/fonts`](https://fonts.nuxt.com/) for self-hosted Google Fonts
- [Cloudflare Workers](https://workers.cloudflare.com/) static-asset hosting (`wrangler`)

## Setup

Install dependencies (Yarn is the committed lockfile):

```bash
yarn install
# or: npm install
```

## Development

Start the dev server on http://localhost:3000:

```bash
yarn dev
```

## Deployment

Deployment is automatic: pushing to the repository triggers a Cloudflare Workers build and deploy. `wrangler.jsonc` defines the build output (`.output/public`) and maps the custom domain `greek-fonts.withlarry.com`.

To build the static site locally:

```bash
yarn generate          # outputs to .output/public
```

## Project structure

```
pages/
  index.vue          # Hero, sticky live-preview control, pairings grid
  gallery.vue        # Scroll-based poetry gallery with dot navigation
components/
  FontPairCard.vue   # A single pairing with preview + copy button
  CopyCssButton.vue  # Copy-to-clipboard with "Copied!" confirmation
  Navigation.vue
composables/
  useCopyCss.ts       # Builds the @import + font-family snippet; clipboard helper
stores/
  fonts.ts            # Curated font combinations
data/
  poems.ts            # Gallery content (poems, photos, fonts)
nuxt.config.ts        # Showcase font list, @nuxt/fonts + SEO/head config
wrangler.jsonc        # Cloudflare Workers deployment
```

## Adding a font pairing

Add an entry to `combinations` in `stores/fonts.ts`, and make sure both family names appear in `SHOWCASE_FONTS` in `nuxt.config.ts` so the fonts are bundled.

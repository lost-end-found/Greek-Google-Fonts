# Greek Google Fonts

Hand-picked combinations of Greek-capable Google Fonts, with a live preview and copy-paste CSS. Built with Nuxt 4, TypeScript, and Tailwind CSS 4, tooled with [Vite+](https://viteplus.dev/) and [Bun](https://bun.com/), and deployed to Cloudflare Workers.

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
- [Vite+](https://viteplus.dev/) (`vp`) as the unified toolchain entry point
- [Bun](https://bun.com/) as the package manager and runtime (`bun.lock`)
- [Cloudflare Workers](https://workers.cloudflare.com/) static-asset hosting (`wrangler`)

## Prerequisites

Install [Bun](https://bun.com/) and [Vite+](https://viteplus.dev/) once:

```bash
curl -fsSL https://bun.sh/install | bash        # Bun
curl -fsSL https://viteplus.dev/install.sh | bash   # Vite+ (vp)
```

Vite+ delegates to Bun automatically because `bun.lock` is committed.

## Setup

Install dependencies:

```bash
vp install        # delegates to bun; or run `bun install` directly
```

## Development

Start the dev server on http://localhost:3000:

```bash
vp run dev
```

Other tasks (each delegates to the matching `package.json` script via Bun):

```bash
vp run generate   # static production build → .output/public
vp run preview    # preview a production build
```

> Note: use `vp run <script>` for this Nuxt app — Nuxt manages its own Vite,
> so the framework's CLI runs through the `package.json` scripts rather than
> Vite+'s direct `vp dev` / `vp build`.

## Deployment

Deployment is automatic: pushing to the repository triggers a Cloudflare Workers build and deploy. Cloudflare detects Bun from the committed `bun.lock`. `wrangler.jsonc` defines the build output (`.output/public`) and maps the custom domain `greek-fonts.withlarry.com`.

To build the static site locally:

```bash
vp run generate   # outputs to .output/public
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

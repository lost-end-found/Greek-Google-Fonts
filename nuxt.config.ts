import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

// Every Greek-capable family showcased on the site. They are referenced
// dynamically (`:style="{ fontFamily }"` on the grid) and via CSS classes on
// the gallery, so we inject each one globally — @nuxt/fonts can't detect a
// runtime font-family binding at build time.
const SHOWCASE_FONTS = [
  'GFS Didot', 'GFS Neohellenic', 'Open Sans', 'Roboto', 'Roboto Slab',
  'Ubuntu', 'Ubuntu Condensed', 'Cardo', 'Caudex', 'Fira Sans', 'Alegreya',
  'Noto Sans', 'Noto Serif', 'Comfortaa', 'Play', 'Advent Pro',
  'Didact Gothic', 'Jura', 'Tinos',
]

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts',
  ],
  css: ['~/assets/style.css'],
  fonts: {
    defaults: {
      weights: [300, 400, 500, 700],
      styles: ['normal'],
      subsets: ['greek', 'latin'],
    },
    families: SHOWCASE_FONTS.map((name) => ({ name, provider: 'google', global: true })),
  },
  app: {
    head: {
      htmlAttrs: { lang: 'el' },
      titleTemplate: '%s · Greek Google Fonts',
      title: 'Συνδυασμοί Ελληνικών γραμματοσειρών',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Διαλεγμένοι συνδυασμοί Ελληνικών γραμματοσειρών από το Google Fonts, με ζωντανή προεπισκόπηση — έτοιμοι για το site σας.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Greek Google Fonts' },
        { property: 'og:locale', content: 'el_GR' },
        { property: 'og:image', content: 'https://greek-fonts.withlarry.com/img/greek-google-fonts.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://greek-fonts.withlarry.com/img/greek-google-fonts.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: [
        {
          defer: true,
          'data-domain': 'greek-fonts.withlarry.com',
          src: 'https://analytics.rakun.ie/js/script.js'
        }
      ]
    }
  },
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ['**/*.html']
  }
})

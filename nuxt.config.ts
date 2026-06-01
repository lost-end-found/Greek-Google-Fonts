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
        { property: 'og:title', content: 'Greek Google Fonts Combinations' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://greek-fonts.withlarry.com/' },
        { property: 'og:image', content: 'https://greek-fonts.withlarry.com/img/greek-google-fonts.jpg' },
        { property: 'og:description', content: 'Συνδυασμοί Ελληνικών γραμματοσειρών από το Google Fonts για να βάλετε στο site σας.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://greek-fonts.withlarry.com/' }
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

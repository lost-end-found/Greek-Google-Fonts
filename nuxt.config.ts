import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: ['~/assets/style.css'],
  app: {
    head: {
      title: 'Greek Google Fonts Combinations',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Greek Google Fonts Combinations' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://chatwithlarry.gr/greek-google-fonts/' },
        { property: 'og:image', content: 'https://chatwithlarry.gr/greek-google-fonts/img/greek-google-fonts.jpg' },
        { property: 'og:description', content: 'Συνδυασμοί Ελληνικών γραμματοσειρών από το Google Fonts για να βάλετε στο site σας.' }
      ],
      link: [
        { rel: 'publisher', href: 'https://plus.google.com/+LarryIoannidis' }
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
  nitro: {
    publicAssets: [
      {
        baseURL: '/classic',
        dir: 'classic',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      }
    ]
  },
  vite: {
    assetsInclude: ['**/*.html']
  }
}) 
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
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
        { property: 'og:url', content: 'https://greek-fonts.withlarry.com/' },
        { property: 'og:image', content: 'https://greek-fonts.withlarry.com/img/greek-google-fonts.jpg' },
        { property: 'og:description', content: 'Συνδυασμοί Ελληνικών γραμματοσειρών από το Google Fonts για να βάλετε στο site σας.' }
      ]
    }
  },
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ['**/*.html']
  }
})

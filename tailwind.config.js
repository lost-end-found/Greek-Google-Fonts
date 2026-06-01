/** @type {import('tailwindcss').Config} */
// `content` is intentionally omitted — @nuxtjs/tailwindcss injects Nuxt-aware
// defaults (app.vue, pages, components, composables, plugins). The previous
// `./src/**` globs were wrong for a Nuxt app and excluded .vue files.
module.exports = {
    theme: {
        extend: {
            colors: {
                paper: '#faf8f4',
                ink: '#1c1a17',
                soft: '#6b6258',
                accent: '#b4471f',
            },
            fontFamily: {
                heading: ["'GFS Didot'", 'serif'],
                alegreya: ["'Alegreya'", 'serif'],
            },
            maxWidth: {
                read: '65ch',
            },
            boxShadow: {
                card: '0 1px 2px rgb(28 26 23 / 0.04), 0 8px 24px -12px rgb(28 26 23 / 0.14)',
                'card-hover': '0 2px 6px rgb(28 26 23 / 0.06), 0 18px 40px -16px rgb(28 26 23 / 0.24)',
            },
            borderRadius: {
                card: '1rem',
            },
        },
    },
    plugins: [],
}

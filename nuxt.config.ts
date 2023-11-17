// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@unocss/nuxt',
    'nuxt-icon',
    'nuxt-simple-sitemap',
  ],
})

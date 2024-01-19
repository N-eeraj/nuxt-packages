// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate/nuxt',
    'nuxt-simple-sitemap',
  ],
  runtimeConfig: {
    public: {
      siteURL: process.env.NUXT_SITE_URL || '/',
      siteName: process.env.NUXT_SITE_NAME || 'Nuxt Packages',
    }
  },
  site: {
    url: process.env.NUXT_SITE_URL,
  },
})

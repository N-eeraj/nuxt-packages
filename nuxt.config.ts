// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    '@formkit/auto-animate/nuxt',
    'nuxt-headlessui',
    '@vee-validate/nuxt',
    'nuxt-simple-sitemap',
  ],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
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

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
    'nuxt-icon',
    'nuxt-icons',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@vee-validate/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@nuxtjs/device',
    'nuxt-marquee',
    '@nuxtjs/device',
    'nuxt-simple-sitemap',
    "nuxt-shiki"
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
  googleFonts: {
    families: {
      'DM Sans': true,
      Montserrat: true,
      Lato: [100, 900],
      'Protest Revolution': {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  shiki: {
    theme: 'material-theme-palenight',
    langs: [
      'vue',
      'js',
      'ts',
      'bash',
    ],
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
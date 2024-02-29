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
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    'nuxt-swiper',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
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
    theme: 'github-light',
    lang: 'javascript',
    themes: ['material-theme-palenight'],
    langs: [
      'vue',
      'javascript',
      'typescript',
      'json',
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
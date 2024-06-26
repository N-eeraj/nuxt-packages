// https://nuxt.com/docs/api/configuration/nuxt-config
const projectName = process.env.NUXT_SITE_NAME || 'Nuxt Packages'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
    'nuxt-shiki',
    'nuxt-icon',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-icons',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@vee-validate/nuxt',
    '@nuxt/image',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-swiper',
    'nuxt-aos',
    '@nuxtjs/i18n',
    'nuxt-marquee',
    '@nuxtjs/device',
    'dayjs-nuxt',
    'nuxt-snackbar',
    'nuxt-bootstrap-icons',
    'nuxt-simple-sitemap',
  ],
  shiki: {
    defaultTheme: 'material-theme-palenight',
    bundledLangs: [
      'vue',
      'js',
      'ts',
      'bash',
    ],
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
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: projectName,
      short_name: projectName,
      icons: [
        {
          src: '/images/pwa/192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/images/pwa/512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/images/pwa/maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: '/images/pwa/maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],
      start_url: '/',
      display: 'fullscreen',
      background_color: '#020420',
      theme_color: '#00DC82',
      lang:'en',
      description: 'Supercharge your web development with Nuxt.js! Explore powerful packages, seamless Vue.js integration, and unleash your creativity today.',
    },
    includeAssets: [
      '/images/pwa/favicon.ico',
      '/images/pwa/apple-touch-icon.png',
      '/images/pwa/mask-icon.svg',
    ],
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
    },
  },
  snackbar: {
    bottom: true,
    right: true,
    duration: 3000
  },
  bootstrapIcons: {
    display: 'inline',
  },
  runtimeConfig: {
    public: {
      siteURL: process.env.NUXT_SITE_URL || '/',
      siteName: projectName,
    }
  },
  site: {
    url: process.env.NUXT_SITE_URL,
  },
})
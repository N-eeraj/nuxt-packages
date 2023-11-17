import siteDescription from '/data/description.txt?raw'

interface MetaObject {
  pageTitle?: string
  pageDescription?: string
  pageKeywords?: string
  pageImage?: string
}

const useMeta = ({ pageTitle, pageDescription, pageKeywords, pageImage }: MetaObject) => {
  const runtimeConfig = useRuntimeConfig()

  const siteName = runtimeConfig.public.siteName
  const siteURL = runtimeConfig.public.siteURL
  const nuxtIcon = '/images/nuxt-icon.svg'

  useHead({
    htmlAttrs: { lang: 'en' },
    title: pageTitle || siteName,
    meta: [
      { name: 'title', content: pageTitle },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: pageTitle },
      { name: 'og:url', content: siteURL },
      { name: 'description', content: pageDescription || siteDescription },
      { name: 'og:description', content: pageDescription || siteDescription },
      { name: 'og:site_name', content: siteName },
      { name: 'og:image', content: pageImage || nuxtIcon },
      { hid: 'og-image', property: 'og:image', content: pageImage || nuxtIcon },
      { name: 'twitterCard', content: 'summary_large_image' },
      { name: 'keywords', content: pageKeywords || siteDescription },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: nuxtIcon,
      },
    ],
  })
}

export default useMeta

interface MetaObject {
  title?: string
  description?: string
  keywords?: string
  image?: string
}

const useMeta = ({ title, description, keywords, image }: MetaObject) => {
  const siteName = 'Nuxt Packages'
  const siteURL = 'https://nuxt-packages.netlify.app/'
  const siteDescription = 'Supercharge your web development with Nuxt.js! Explore powerful packages, seamless Vue.js integration, and unleash your creativity today.'
  const nuxtIcon = '/images/nuxt-icon.svg'

  useHead({
    htmlAttrs: { lang: 'en' },
    title: title || siteName,
    meta: [
      { name: 'title', content: title },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: title },
      { name: 'og:url', content: siteURL },
      { name: 'description', content: description || siteDescription },
      { name: 'og:description', content: description || siteDescription },
      { name: 'og:site_name', content: siteName },
      { name: 'og:image', content: image || nuxtIcon },
      { hid: 'og-image', property: 'og:image', content: image || nuxtIcon },
      { name: 'twitterCard', content: 'summary_large_image' },
      { name: 'keywords', content: keywords || siteName },
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

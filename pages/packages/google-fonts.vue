<script setup>
const installationCode = `npm i -D @nuxtjs/google-fonts`
const setUpCode = `modules: ['@nuxtjs/google-fonts'],
googleFonts: {
  families: {
    Montserrat: true,
    Lato: [100, 900],
    'Protest Revolution': {
      wght: [100, 400],
      ital: [100]
    },
  }
},`

definePageMeta({
  name: 'Google Fonts',
  logo: 'google-fonts.avif',
  category: 'Fonts',
  description: 'Google Fonts module for Nuxt',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoGoogleFonts />
  </PackagesLayout>
</template>

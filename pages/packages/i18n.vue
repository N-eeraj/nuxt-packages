<script setup>
const installationCode = `npm i @nuxtjs/i18n --save-dev`
const setUpCode = `modules: ['@nuxtjs/i18n']`

definePageMeta({
  name: 'i18n',
  logo: 'i18n.avif',
  category: 'Extensions',
  description: 'i18n features for your Nuxt project so you can easily add internationalization.',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoI18n />
  </PackagesLayout>
</template>

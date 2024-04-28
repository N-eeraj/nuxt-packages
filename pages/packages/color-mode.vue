<script setup>
const installationCode = `npm i -D @nuxtjs/color-mode`
const setUpCode = `modules: ['@nuxtjs/color-mode']`

definePageMeta({
  name: 'Color Mode',
  logo: 'color-mode.avif',
  category: 'UI',
  description: 'Dark and Light mode for Nuxt with auto detection',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoColorMode />
  </PackagesLayout>
</template>

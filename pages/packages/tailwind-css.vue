<script setup>
const installationCode = `npm i @nuxtjs/tailwindcss`
const setUpCode = `modules: ['@nuxtjs/tailwindcss']`

definePageMeta({
  name: 'Tailwind CSS',
  logo: 'tailwindcss.svg',
  category: 'UI',
  description: 'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoTailwind />
  </PackagesLayout>
</template>

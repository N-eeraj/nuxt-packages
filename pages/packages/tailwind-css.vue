<script setup>
const installationCode = `bun i @nuxtjs/tailwindcss`
const setUpCode = `modules: ['@nuxtjs/tailwindcss']`

definePageMeta({
  name: 'Tailwind CSS',
  logo: 'tailwindcss.svg',
  category: 'UI',
  description: 'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS',
})
</script>

<template>
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoTailwind />
  </PackagesLayout>
</template>

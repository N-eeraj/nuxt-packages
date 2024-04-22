<script setup>
const installationCode = `npx nuxi@latest module add @vite-pwa/nuxt`
const setUpCode = `modules: ['@vite-pwa/nuxt']`

definePageMeta({
  name: 'Vite PWA',
  logo: 'vite-pwa.svg',
  category: 'Performance',
  description: 'Zero-config PWA Plugin for Nuxt',
})
</script>

<template>
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoVitePWA />
  </PackagesLayout>
</template>

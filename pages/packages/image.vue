<script setup>
const installationCode = `bun add @nuxt/image`
const setUpCode = `modules: ['@nuxt/image']`

definePageMeta({
  name: 'Image',
  logo: 'image.avif',
  category: 'Images',
  description: 'Optimised images for Nuxt, with progressive processing, lazy-loading, real-time resizes and providers support.',
})
</script>

<template>
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoImage />
  </PackagesLayout>
</template>

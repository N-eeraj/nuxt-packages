<script setup>
const installationCode = `npx nuxi@latest module add image`
const setUpCode = `modules: ['@nuxt/image']`

definePageMeta({
  name: 'Image',
  logo: 'image.avif',
  category: 'Images',
  description: 'Optimised images for Nuxt, with progressive processing, lazy-loading, real-time resizes and providers support.',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoImage />
  </PackagesLayout>
</template>

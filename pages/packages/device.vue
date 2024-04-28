<script setup>
const installationCode = `npm i -D @nuxtjs/device`
const setUpCode = `modules: ['@nuxtjs/device']`

definePageMeta({
  name: 'Devices',
  category: 'Extensions',
  description: 'Device detection module for Nuxt',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoDevice />
  </PackagesLayout>
</template>

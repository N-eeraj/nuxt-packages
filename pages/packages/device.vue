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
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoDevice />
  </PackagesLayout>
</template>

<script setup>
const installationCode = `bun i @pinia/nuxt`
const setUpCode = `modules: ['@pinia/nuxt']`

definePageMeta({
  name: 'Pinia',
  logo: 'pinia.svg',
  category: 'Extensions',
  description: 'The Vue Store that you will enjoy using',
})
</script>

<template>
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoPinia />
  </PackagesLayout>
</template>

<script setup>
const installationCode = `bun i @vueuse/nuxt`
const setUpCode = `modules: ['@vueuse/nuxt']`

definePageMeta({
  name: 'VueUse',
  logo: 'vueuse.svg',
  category: 'Libraries',
  description: 'Collection of Essential Vue Composition Utilities',
})
</script>

<template>
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoVueUse />
  </PackagesLayout>
</template>

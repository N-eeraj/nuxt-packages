<script setup>
const installationCode = `npm i @vueuse/nuxt`
const setUpCode = `modules: ['@vueuse/nuxt']`

definePageMeta({
  name: 'VueUse',
  logo: 'vueuse.svg',
  category: 'Libraries',
  description: 'Collection of Essential Vue Composition Utilities',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoVueUse />
  </PackagesLayout>
</template>

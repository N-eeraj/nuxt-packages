<script setup>
const installationCode = `npm i @pinia/nuxt`
const setUpCode = `modules: ['@pinia/nuxt']`

definePageMeta({
  name: 'Pinia',
  logo: 'pinia.svg',
  category: 'Extensions',
  description: 'The Vue Store that you will enjoy using',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoPinia />
  </PackagesLayout>
</template>

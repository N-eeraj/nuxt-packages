<script setup>
const installationCode = `npm i @unocss/nuxt`
const setUpCode = `modules: ['@unocss/nuxt']`

definePageMeta({
  name: 'UnoCSS',
  logo: 'unocss.svg',
  category: 'UI',
  description: 'The instant on-demand atomic CSS engine',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoUnoCSS />
  </PackagesLayout>
</template>

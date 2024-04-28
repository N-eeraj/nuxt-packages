<script setup>
const installationCode = `npm i -D dayjs-nuxt`
const setUpCode = `modules: ['dayjs-nuxt']`

definePageMeta({
  name: 'dayjs',
  logo: 'day-js.avif',
  category: 'Libraries',
  description: 'Day.js module for Nuxt',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoDayJs />
  </PackagesLayout>
</template>

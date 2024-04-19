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
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoDayJs />
  </PackagesLayout>
</template>

<script setup>
const installationCode = `npm i -D @samk-dev/nuxt-vcalendar`
const setUpCode = `modules: ['@samk-dev/nuxt-vcalendar']`

definePageMeta({
  name: 'VCalendar',
  logo: 'vcalendar.avif',
  category: 'Libraries',
  description: 'VCalendar module for Nuxt',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoVCalendar />
  </PackagesLayout>
</template>

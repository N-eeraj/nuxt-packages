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
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoVCalendar />
  </PackagesLayout>
</template>

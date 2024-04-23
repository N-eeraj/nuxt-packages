<script setup>
const installationCode = `npm i -D nuxt-headlessui`
const setUpCode = `modules: ['nuxt-headlessui']`

definePageMeta({
  name: 'Headless UI',
  logo: 'headlessui.avif',
  category: 'UI',
  description: 'Headless UI integration for Nuxt. Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoHeadlessUI />
  </PackagesLayout>
</template>

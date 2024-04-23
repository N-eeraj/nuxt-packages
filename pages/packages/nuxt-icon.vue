<script setup>
const installationCode = `npm i -D nuxt-icon`
const setUpCode = `modules: ['nuxt-icon']`

definePageMeta({
  name: 'Nuxt Icon',
  logo: 'nuxt-icon.avif',
  category: 'UI',
  description: 'Icon module for Nuxt with 100,000+ ready to use icons from Iconify',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoNuxtIcon />
  </PackagesLayout>
</template>

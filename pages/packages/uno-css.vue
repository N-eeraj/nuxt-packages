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
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoUnoCSS />
  </PackagesLayout>
</template>

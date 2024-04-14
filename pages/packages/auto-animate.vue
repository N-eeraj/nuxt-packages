<script setup>
const installationCode = `npm i @formkit/auto-animate`
const setUpCode = `modules: ['@formkit/auto-animate/nuxt']`

definePageMeta({
  name: 'Auto Animate',
  logo: 'auto-animate.svg',
  category: 'Libraries',
  description: 'Automatic animations for your Nuxt app with a single line of code',
})
</script>

<template>
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoAutoAnimate />
  </PackagesLayout>
</template>

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
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoAutoAnimate />
  </PackagesLayout>
</template>

<script setup>
const installationCode = `npm i -D nuxt-marquee`
const setUpCode = `modules: ['nuxt-marquee']`

definePageMeta({
  name: 'Marquee',
  logo: 'marquee.avif',
  category: 'UI',
  description: 'A lightweight Nuxt 3 module that harnesses the power of CSS animations to create silky smooth marquees.',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoMarquee />
  </PackagesLayout>
</template>

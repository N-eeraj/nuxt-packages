<script setup>
const installationCode = `npm i nuxt-swiper`
const setUpCode = `modules: ['nuxt-swiper']`

definePageMeta({
  name: 'Swiper',
  logo: 'swiper.svg',
  category: 'Libraries',
  description: 'Nuxt module for Swiper.js - Most modern mobile touch slider with hardware accelerated transitions.',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoSwiper />
  </PackagesLayout>
</template>

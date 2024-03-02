<script setup>
const installationCode = `bun i nuxt-swiper`
const setUpCode = `modules: ['nuxt-swiper']`

definePageMeta({
  name: 'Swiper',
  logo: 'swiper.svg',
  category: 'Libraries',
  description: 'Nuxt module for Swiper.js - Most modern mobile touch slider with hardware accelerated transitions.',
})
</script>

<template>
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoSwiper />
  </PackagesLayout>
</template>

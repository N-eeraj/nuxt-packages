<script setup>
definePageMeta({
  name: 'Swiper',
  logo: 'swiper.svg',
  category: 'Libraries',
  description: 'Nuxt module for Swiper.js - Most modern mobile touch slider with hardware accelerated transitions.',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i nuxt-swiper</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['nuxt-swiper']</pre>
    </template>

    <PackagesDemoSwiper />
  </PackagesLayout>
</template>

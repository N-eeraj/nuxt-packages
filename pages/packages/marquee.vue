<script setup>
const installationCode = `bun i -D nuxt-marquee`
const setUpCode = `modules: ['nuxt-marquee']`

definePageMeta({
  name: 'Marquee',
  logo: 'marquee.avif',
  category: 'UI',
  description: 'A lightweight Nuxt 3 module that harnesses the power of CSS animations to create silky smooth marquees.',
})
</script>

<template>
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <PackagesDemoMarquee />
  </PackagesLayout>
</template>

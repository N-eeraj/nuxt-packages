<script setup>
const installationCode = `npm i -D nuxt-aos`
const setUpCode = `modules: ['nuxt-aos']`

definePageMeta({
  name: 'AOS',
  logo: 'aos.avif',
  category: 'Libraries',
  description: 'A Nuxt module that adds Animate On Scroll',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoAOS />
  </PackagesLayout>
</template>

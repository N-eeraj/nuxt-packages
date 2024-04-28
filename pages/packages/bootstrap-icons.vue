<script setup>
const installationCode = `npm i -D nuxt-bootstrap-icons`
const setUpCode = `modules: ['@formkit/auto-animate/nuxt'],
bootstrapIcons: {
  display: 'inline',
},`

definePageMeta({
  name: 'Bootstrap Icons',
  logo: 'bootstrap-icons.svg',
  category: 'UI',
  description: 'Just a simple integration for Bootstrap Icons',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <PackagesDemoBootstrapIcons />
  </PackagesLayout>
</template>

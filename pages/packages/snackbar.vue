<script setup>
const installationCode = `npm i nuxt-snackbar`
const setUpCode = `modules: ['nuxt-snackbar']
snackbar: {
  bottom: true,
  right: true,
  duration: 3000
},`
const appCode = `<template>
  <NuxtSnackbar />
</template>`

definePageMeta({
  name: 'Snackbar',
  logo: 'snackbar.avif',
  category: 'UI',
  description: 'Nuxt Snackbar module using vue3-snackbar',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>
    <span class="text-light">
      Add the following component to the
      <code class="py-1 px-2 bg-background-code text-sm rounded">app.vue</code>
      file
    </span>
    <BaseCodeSnippet file-name="app.vue" :code="appCode" class="mb-4" />
    <PackagesDemoSnackbar />
  </PackagesLayout>
</template>

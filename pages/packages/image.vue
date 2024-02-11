<script setup>
definePageMeta({
  name: 'Image',
  logo: 'image.avif',
  category: 'Images',
  description: 'Optimised images for Nuxt, with progressive processing, lazy-loading, real-time resizes and providers support.',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun add @nuxt/image</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@nuxt/image']</pre>
    </template>

    <PackagesDemoImage />
  </PackagesLayout>
</template>

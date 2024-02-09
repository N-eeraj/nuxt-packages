<script setup>
definePageMeta({
  name: 'Color Mode',
  logo: 'color-mode.avif',
  category: 'UI',
  description: 'Dark and Light mode for Nuxt with auto detection',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i -D @nuxtjs/color-mode</pre>
    </template>

    <template #setup-description>
      Add the following lines to nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@nuxtjs/color-mode']</pre>
    </template>

    <PackagesDemoColorMode />
  </PackagesLayout>
</template>

<script setup>
definePageMeta({
  name: 'Devices',
  category: 'Extensions',
  description: 'Device detection module for Nuxt',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i -D @nuxtjs/device</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@nuxtjs/device']</pre>
    </template>

    <PackagesDemoDevice />
  </PackagesLayout>
</template>

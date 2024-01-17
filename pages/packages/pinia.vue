<script setup>
definePageMeta({
  name: 'Pinia',
  logo: 'pinia.svg',
  category: 'Extensions',
  description: 'The Vue Store that you will enjoy using',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i @pinia/nuxt</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@pinia/nuxt']</pre>
    </template>

    <PackagesDemoPinia />
  </PackagesLayout>
</template>

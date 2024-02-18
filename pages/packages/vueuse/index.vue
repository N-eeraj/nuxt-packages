<script setup>
definePageMeta({
  name: 'VueUse',
  logo: 'vueuse.svg',
  category: 'Libraries',
  description: 'Collection of Essential Vue Composition Utilities',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i @vueuse/nuxt</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@vueuse/nuxt']</pre>
    </template>

    <PackagesDemoVueUse />
  </PackagesLayout>
</template>

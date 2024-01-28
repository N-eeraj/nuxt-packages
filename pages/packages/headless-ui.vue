<script setup>
definePageMeta({
  name: 'Headless UI',
  logo: 'headlessui.avif',
  category: 'UI',
  description: 'Headless UI integration for Nuxt. Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i -D nuxt-headlessui</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['nuxt-headlessui']</pre>
    </template>

    <PackagesDemoHeadlessUI />
  </PackagesLayout>
</template>

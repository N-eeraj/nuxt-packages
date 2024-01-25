<script setup>
definePageMeta({
  name: 'Nuxt Icon',
  logo: 'nuxt-icon.avif',
  category: 'UI',
  description: 'Icon module for Nuxt with 100,000+ ready to use icons from Iconify',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i -D nuxt-icon</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['nuxt-icon']</pre>
    </template>

    <PackagesDemoNuxtIcon/>
  </PackagesLayout>
</template>

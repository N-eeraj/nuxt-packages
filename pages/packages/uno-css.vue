<script setup>
definePageMeta({
  name: 'UnoCSS',
  logo: 'unocss.svg',
  category: 'UI',
  description: 'The instant on-demand atomic CSS engine',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i @unocss/nuxt</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@unocss/nuxt']</pre>
    </template>

    <PackagesDemoUnoCSS />
  </PackagesLayout>
</template>

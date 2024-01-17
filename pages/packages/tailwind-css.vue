<script setup>
definePageMeta({
  name: 'Tailwind CSS',
  logo: 'tailwindcss.svg',
  category: 'UI',
  description: 'Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i @nuxtjs/tailwindcss</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@nuxtjs/tailwindcss']</pre>
    </template>

    <PackagesDemoTailwind />
  </PackagesLayout>
</template>

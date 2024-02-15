<script setup>
definePageMeta({
  name: 'i18n',
  logo: 'i18n.avif',
  category: 'Extensions',
  description: 'i18n features for your Nuxt project so you can easily add internationalization.',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i @nuxtjs/i18n --save-dev</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@nuxtjs/i18n']</pre>
    </template>

    <PackagesDemoI18n />
  </PackagesLayout>
</template>

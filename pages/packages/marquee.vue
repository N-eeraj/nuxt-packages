<script setup>
definePageMeta({
  name: 'Marquee',
  logo: 'marquee.avif',
  category: 'UI',
  description: 'A lightweight Nuxt 3 module that harnesses the power of CSS animations to create silky smooth marquees.',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i -D nuxt-marquee</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['nuxt-marquee']</pre>
    </template>

    <PackagesDemoMarquee />
  </PackagesLayout>
</template>

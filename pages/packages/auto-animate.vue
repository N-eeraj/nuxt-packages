<script setup>
definePageMeta({
  name: 'Auto Animate',
  logo: 'auto-animate.svg',
  category: 'Libraries',
  description: 'Automatic animations for your Nuxt app with a single line of code',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i @formkit/auto-animate</pre>
    </template>

    <template #setup-description>
      Add the following line to the modules section of nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@formkit/auto-animate/nuxt']</pre>
    </template>

    <PackagesDemoAutoAnimate />
  </PackagesLayout>
</template>

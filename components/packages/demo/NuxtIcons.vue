<script setup>
const { nuxtIconsDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="nuxtIconsDemo" file-name="Icons.vue" class="w-full mb-4" />

    <NuxtIcon name="home" class="inline-block text-white text-3xl" />
    <NuxtIcon name="tech/html" filled class="inline-block text-3xl" />
  </section>
</template>

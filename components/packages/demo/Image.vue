<script setup>
const { imageDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="imageDemo" file-name="Image.vue" class="mb-4" />
    <NuxtImg format="webp" src="/images/nuxt-image-demo.jpg" width="128" quality="50" />
  </section>
</template>

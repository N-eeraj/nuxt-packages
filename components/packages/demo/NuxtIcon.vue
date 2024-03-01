<script setup>
const { nuxtIconDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="nuxtIconDemo" file-name="Icon.vue" class="w-full mb-4" />

    <p class="text-light">
      You can use any name from the
      <NuxtLink to="https://icones.js.org" target="_blank" rel="nofollow" class="text-primary">
        https://icones.js.org
      </NuxtLink>
      collection
    </p>

    <Icon name="uil:github" color="white" size="36" />
    <Icon name="🚀" size="36" />
  </section>
</template>

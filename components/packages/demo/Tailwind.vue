<script setup>
import tailwindConfig from '@/tailwind.config?raw'
const { tailwindDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <div class="flex gap-x-5 flex-wrap mb-4">
      <BaseCodeSnippet :code="tailwindConfig" lang="ts" file-name="tailwind.config.ts" class="flex-1 w-full md:w-5/12" />
      <BaseCodeSnippet :code="tailwindDemo" file-name="Tailwind.vue" class="flex-1 w-full md:w-5/12" />
    </div>

    <h1 class="p-4 bg-tailwind-dark text-tailwind-primary border border-tailwind-primary rounded">
      A utility-first CSS framework packed with classes.
    </h1>
  </section>
</template>

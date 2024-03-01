<script setup>
import unoConfig from '@/uno.config?raw'
const { unoCSSDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <div class="flex gap-x-5 flex-wrap mb-4">
      <BaseCodeSnippet :code="unoConfig" lang="ts" file-name="uno.config.ts" class="flex-1 w-full md:w-5/12" />
      <BaseCodeSnippet :code="unoCSSDemo" file-name="UnoCSS.vue" class="flex-1 w-full md:w-5/12" />
    </div>

    <h1 class="p-4 bg-background-grey text-primary border border-primary rounded">
      UnoCSS: Instant On-demand Atomic CSS Engine
    </h1>
  </section>
</template>

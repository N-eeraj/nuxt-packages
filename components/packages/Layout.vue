<script setup>
const { meta } = useRoute()
</script>

<template>
  <div class="flex flex-col gap-y-2 h-30">
    <div class="flex items-center gap-x-4">
      <img :src="`/images/logos/${meta.logo}`" :alt="meta.name" class="w-12" />
      <h1 class="text-white text-3xl font-bold">
        {{ meta.name }}
      </h1>
    </div>
    <p class="text-light-extra text-base">
      {{ meta.description }}
    </p>
  </div>

  <section class="mb-5">
    <BaseCodeSnippet>
      <template #title>
        <NuxtLink to="#installation" class="package-subtitle">
          Installation
        </NuxtLink>
      </template>
      <slot name="installation" />
    </BaseCodeSnippet>
  </section>

  <section class="mb-5">
    <BaseCodeSnippet>
      <template #title>
        <NuxtLink to="#setup" class="package-subtitle">
          Setup
        </NuxtLink>
      </template>
      <template #description>
        <slot name="setup-description" />
      </template>
      <slot name="setup" />
    </BaseCodeSnippet>
  </section>

  <section class="pb-5">
    <slot />
  </section>
</template>

<script setup>
const { meta } = useRoute()
</script>

<template>
  <div class="flex flex-col gap-y-2 h-32">
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
        <NuxtLink to="#installation" class="text-white text-2xl font-bold">
          Installation
        </NuxtLink>
      </template>
      <slot name="installation" />
    </BaseCodeSnippet>
  </section>

  <section class="mb-5">
    <BaseCodeSnippet>
      <template #title>
        <NuxtLink to="#usage" class="text-white text-2xl font-bold">
          Usage
        </NuxtLink>
      </template>
      <template #description>
        <slot name="usage-description" />
      </template>
      <slot name="usage" />
    </BaseCodeSnippet>
  </section>

  <slot />
</template>

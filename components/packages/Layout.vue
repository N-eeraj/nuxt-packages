<script setup>
defineProps({
  installationCode: {
    type: String,
    required: false,
    default: '',
  },
  setUpCode: {
    type: String,
    required: false,
    default: '',
  },
})
const { meta } = useRoute()

const pageImage = `/images/logos/${meta.logo}`
useMeta({
  pageTitle: `${meta.name} | Nuxt Packages`,
  pageDescription: meta.description,
  pageImage,
})
</script>

<template>
  <div class="flex flex-col gap-y-2 h-30">
    <div class="flex items-center gap-x-4">
      <img v-if="meta.logo" :src="pageImage" :alt="meta.name" class="w-12" />
      <Icon v-else :name="packageCategoriesIcons[meta.category]"  class="box-content w-6 h-6 p-3 bg-gray-800 text-gray-400 rounded-lg" />
      <h1 class="text-white text-3xl font-bold">
        {{ meta.name }}
      </h1>
    </div>
    <p class="text-light-extra text-base">
      {{ meta.description }}
    </p>
  </div>

  <section class="mb-5">
    <BaseCodeSnippet :code="installationCode" lang="bash">
      <template #title>
        <NuxtLink to="#installation" class="package-subtitle">
          Installation
        </NuxtLink>
      </template>
    </BaseCodeSnippet>
  </section>

  <section class="mb-5">
    <BaseCodeSnippet :code="setUpCode" lang="ts">
      <template #title>
        <NuxtLink to="#setup" class="package-subtitle">
          Setup
        </NuxtLink>
      </template>
      <template #description>
        <slot name="setup-description">
          Add the following lines to the modules section of nuxt.config.{ts,js}
        </slot>
      </template>
      <slot name="setup" />
    </BaseCodeSnippet>
  </section>

  <section class="pb-5">
    <slot />
  </section>
</template>

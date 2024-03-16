<script setup>
import { useFetch } from '@vueuse/core'
const { data, isFetching } = useFetch('https://pokeapi.co/api/v2/pokemon/pikachu')
const name = computed(() => JSON.parse(data.value)?.name)

definePageMeta({
  name: 'useFetch',
  category: 'Network',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <PackagesDemoVueUseLayout name="useFetch">
    <template #description>
      Reactive
      <NuxtLink to="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank" rel="nofollow" class="text-primary underline">
        Fetch API
      </NuxtLink>
      provides the ability to abort requests, intercept requests before they are fired, automatically refetch requests when the url changes, and create your own useFetch with predefined options.
    </template>

    <BaseCodeSnippet :code="vueUseDemos.network.useFetch" file-name="useFetch.vue" class="w-fit" />

    <span v-if="isFetching" class="text-white">
      Loading Data...
    </span>
    <span v-else class="text-white">
      {{ name }}
    </span>
  </PackagesDemoVueUseLayout>
</template>

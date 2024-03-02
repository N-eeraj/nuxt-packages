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
  <h1 class="text-white text-2xl">
    useFetch
  </h1>

  <BaseCodeSnippet :code="vueUseDemos.network.useFetch" file-name="useFetch.vue" class="w-fit" />

  <span v-if="isFetching" class="text-white">
    Loading Data...
  </span>
  <span v-else class="text-white">
    {{ name }}
  </span>
</template>

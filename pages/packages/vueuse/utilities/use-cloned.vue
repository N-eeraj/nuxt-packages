<script setup>
import { useCloned } from '@vueuse/core'
const original = ref({ key: 'value' })
const { cloned } = useCloned(original)
original.value.key = 'some new value'
console.log(original.value.key)
console.log(cloned.value.key)

definePageMeta({
  name: 'useCloned',
  category: 'Utilities',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <h1 class="text-white text-2xl">
    useCloned
  </h1>

  <BaseCodeSnippet :code="vueUseDemos.utilities.useCloned" file-name="clone.vue" class="w-fit" />
</template>

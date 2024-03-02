<script setup>
import { useToggle } from '@vueuse/core'
const [refVal, toggleValue] = useToggle()
console.log(refVal.value)
toggleValue()
console.log(refVal.value)

definePageMeta({
  name: 'useToggle',
  category: 'Utilities',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <h1 class="text-white text-2xl">
    useToggle
  </h1>

  <BaseCodeSnippet :code="vueUseDemos.utilities.useToggle" file-name="toggle.vue" class="w-fit" />
</template>

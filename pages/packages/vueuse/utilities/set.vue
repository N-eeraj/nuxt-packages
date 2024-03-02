<script setup>
import { set } from '@vueuse/core'
const refVal = ref('before')
console.log(refVal.value)
set(refVal, 'after')
console.log(refVal.value)

definePageMeta({
  name: 'set',
  category: 'Utilities',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <h1 class="text-white text-2xl">
    set
  </h1>

  <BaseCodeSnippet :code="vueUseDemos.utilities.set" file-name="set.vue" class="w-fit" />
</template>

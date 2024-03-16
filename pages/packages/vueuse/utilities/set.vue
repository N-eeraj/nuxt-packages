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
  <PackagesDemoVueUseLayout name="set">
    <template #description>
      Shorthand for ref.value = x
    </template>
    <BaseCodeSnippet :code="vueUseDemos.utilities.set" file-name="set.vue" class="w-fit" />
  </PackagesDemoVueUseLayout>
</template>

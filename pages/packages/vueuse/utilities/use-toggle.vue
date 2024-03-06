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
  <PackagesDemoVueUseLayout name="useToggle">
    <template #description>
      A boolean switcher with utility functions.
    </template>
    <BaseCodeSnippet :code="vueUseDemos.utilities.useToggle" file-name="toggle.vue" class="w-fit" />
  </PackagesDemoVueUseLayout>
</template>

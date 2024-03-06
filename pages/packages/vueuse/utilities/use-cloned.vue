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
  <PackagesDemoVueUseLayout name="useCloned">
    <template #description>
      Reactive clone of a ref. By default, it use JSON.parse(JSON.stringify()) to do the clone.
    </template>
    <BaseCodeSnippet :code="vueUseDemos.utilities.useCloned" file-name="clone.vue" class="w-fit" />
  </PackagesDemoVueUseLayout>
</template>

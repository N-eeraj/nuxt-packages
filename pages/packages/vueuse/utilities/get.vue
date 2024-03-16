<script setup>
import { get } from '@vueuse/core'
const refVal = ref('test')
console.log(get(refVal))

definePageMeta({
  name: 'get',
  category: 'Utilities',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <PackagesDemoVueUseLayout name="get">
    <template #description>
      Shorthand for accessing ref.value
    </template>
    <BaseCodeSnippet :code="vueUseDemos.utilities.get" file-name="get.vue" class="w-fit" />
  </PackagesDemoVueUseLayout>
</template>

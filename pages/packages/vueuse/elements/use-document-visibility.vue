<script setup>
import { useDocumentVisibility } from '@vueuse/core'

const visibility = useDocumentVisibility()
const message = ref('Minimize the page or switch tab then return')
watch(visibility, (current, prev) => {
  if (current === 'visible' && prev === 'hidden')
    message.value = 'Welcome Back!'
})

definePageMeta({
  name: 'useDocumentVisibility',
  category: 'Elements',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <PackagesDemoVueUseLayout name="useDocumentVisibility">
    <template #description>
      Reactively track
      <NuxtLink to="https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState" target="_blank" rel="nofollow" class="text-primary underline">
      document.visibilityState
      </NuxtLink>
    </template>

    <BaseCodeSnippet :code="vueUseDemos.elements.useDocumentVisibility" file-name="useDocumentVisibility.vue" class="w-fit" />
  </PackagesDemoVueUseLayout>

  <span class="text-white">
    {{ message }}
  </span>
</template>

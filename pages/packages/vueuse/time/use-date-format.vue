<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
const dateTime = useDateFormat(useNow(), 'dddd, MMM Do YYYY hh:mm:ss A')

definePageMeta({
  name: 'useDateFormat',
  category: 'Time',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <h1 class="text-white text-2xl">
    useClipboard    
  </h1>

  <BaseCodeSnippet :code="vueUseDemos.time.useDateFormat" file-name="Clipboard.vue" class="w-fit" />

  <span class="text-primary">
    {{ dateTime }}
  </span>
</template>

<script setup>
import { useTimeAgo } from '@vueuse/core'
const date = new Date(2000, 0, 1)
const timeAgo = useTimeAgo(date)

definePageMeta({
  name: 'useTimeAgo',
  category: 'Time',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <h1 class="text-white text-2xl">
    useTimeAgo    
  </h1>

  <BaseCodeSnippet :code="vueUseDemos.time.useTimeAgo" file-name="TimeAgo.vue" class="w-fit" />

  <div class="text-white">
    <strong class="text-primary">
      {{ timeAgo }}
    </strong>
    since
    {{ date.toLocaleDateString() }}
  </div>
</template>

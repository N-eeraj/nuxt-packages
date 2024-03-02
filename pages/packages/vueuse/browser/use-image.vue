<script setup>
import { useImage } from '@vueuse/core'
import { ref } from 'vue'

const imageOptions = ref({ src: 'https://place-hold.it/300x200/' })
const { isLoading, error } = useImage(imageOptions, { delay: 1000 })

const change = () => {
  imageOptions.value.src = ''
  imageOptions.value.src = 'https://place-hold.it/300x200/'
}

definePageMeta({
  name: 'useImage',
  category: 'Browser',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <h1 class="text-white text-2xl">
    useImage    
  </h1>

  <BaseCodeSnippet :code="vueUseDemos.browser.useImage" file-name="image.vue" class="mb-4" />

  <div v-if="isLoading" class="w-75 h-50 p-2 animate-pulse bg-primary/25 text-white">
    Loading...
  </div>
  <div v-else-if="error" class="text-red">
    Failed
  </div>
  <img v-else :src="imageOptions.src" class="w-75 h-50">

  <div class="flex gap-x-2 mt-4">
    <button v-if="!isLoading" class="w-32 p-2 bg-primary hover:bg-primary/75 text-background rounded" @click="change">
      Change
    </button>
    
    <button v-if="!isLoading" class="w-32 p-2 text-primary border border-primary hover:border-primary/75 rounded" @click="imageOptions.src = ''">
      Create Error
    </button>
  </div>
</template>
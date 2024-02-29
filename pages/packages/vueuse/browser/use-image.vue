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
</script>

<template>
  <h1 class="text-white text-2xl">
    useImage    
  </h1>

  <BaseCodeSnippet file-name="image.vue" class="mb-4">
    <pre class="overflow-auto">&lt;script setup&gt;
import { useImage } from '@vueuse/core'
import { ref } from 'vue'

const imageOptions = ref({ src: 'https://place-hold.it/300x200/' })
const { isLoading, error } = useImage(imageOptions, { delay: 1000 })

const change = () => {
  imageOptions.value.src = ''
  imageOptions.value.src = 'https://place-hold.it/300x200/'
}
&lt;/script&gt;

&lt;template&gt;
  &lt;div v-if="isLoading"&gt;
    Loading...
  &lt;/div&gt;
  &lt;div v-else-if="error"&gt;
    Failed
  &lt;/div&gt;
  &lt;img v-else :src="imageOptions.src"&gt;

  &lt;div&gt;
    &lt;button v-if="!isLoading" @click="change"&gt;
      Change
    &lt;/button&gt;
    
    &lt;button v-if="!isLoading" @click="imageOptions.src = ''"&gt;
      Create Error
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>
  </BaseCodeSnippet>

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
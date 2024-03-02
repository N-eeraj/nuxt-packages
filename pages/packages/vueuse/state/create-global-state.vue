<script setup>
import store from '@/stores/vueUse.js?raw'
const count = useVueUseStore()

definePageMeta({
  name: 'createGlobalState',
  category: 'State',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <h1 class="text-white text-2xl">
    createGlobalState    
  </h1>

  <div class="flex gap-x-5 flex-wrap">
    <BaseCodeSnippet :code="store" lang="js" file-name="store.js" class="flex-1 w-full md:w-5/12" />
    <BaseCodeSnippet :code="vueUseDemos.state.createGlobalState" file-name="Counter.vue" class="flex-1 w-full md:w-5/12" />
  </div>

  <div class="flex gap-x-1">
    <button class="w-32 mt-8 p-2 bg-primary hover:bg-primary/75 text-background rounded" @click="count++">
      Count is:
      {{ count }}
    </button>
    <button v-if="count" class="w-32 mt-8 p-2 text-primary border border-primary hover:border-primary/75 rounded" @click="count=0">
      Reset
    </button>
  </div>
</template>
<script setup>
import store from '@/stores/demo.js?raw'
import { storeToRefs } from 'pinia'
const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)
const { updateCount } = demoStore
const { piniaDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <div class="flex gap-x-5 flex-wrap">
      <BaseCodeSnippet :code="store" lang="js" file-name="store.js" class="flex-1 w-full md:w-5/12" />
      <BaseCodeSnippet :code="piniaDemo" file-name="Counter.vue" class="flex-1 w-full md:w-5/12" />
    </div>

    <button class="w-32 mt-8 p-2 bg-primary hover:bg-primary/75 text-background rounded" @click="updateCount">
      Count is:
      {{ counter }}
    </button>
  </section>
</template>

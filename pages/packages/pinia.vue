<script setup>
import { storeToRefs } from 'pinia'
const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)
const { updateCount } = demoStore

definePageMeta({
  name: 'Pinia',
  logo: 'pinia.svg',
  category: 'Extensions',
  description: 'The Vue Store that you will enjoy using',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
<pre class="overflow-auto">bun i @pinia/nuxt</pre>
    </template>
    <template #usage-description>
      Add the following line to nuxt.config.js
    </template>

    <template #usage>
<pre class="overflow-auto">modules: ['@pinia/nuxt']</pre>
    </template>

    <section>
      <NuxtLink to="#usage" class="text-white text-2xl font-bold">
        <h2>
          Demo
        </h2>
      </NuxtLink>

      <div class="flex gap-x-5 flex-wrap">
        <BaseCodeSnippet file-name="store.js" class="flex-1">
<pre class="overflow-auto">import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const counter = ref(0)
  const updateCount = () => counter.value++

  return { counter, updateCount }
})
</pre>
      </BaseCodeSnippet>
      <BaseCodeSnippet file-name="Counter.vue" class="flex-1">
<pre class="overflow-auto">
import { storeToRefs } from 'pinia'
const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)
const { updateCount } = demoStore
</pre>
        </BaseCodeSnippet>
      </div>

      <button class="min-w-[180px] mt-5 p-2 bg-primary hover:bg-primary/75 text-background rounded" @click="updateCount">
        Count is:
        {{ counter }}
      </button>
    </section>
  </PackagesLayout>
</template>

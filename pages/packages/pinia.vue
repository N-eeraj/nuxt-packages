<script setup>
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
    <template #demo-description>
      Add the following line to nuxt.config.js
    </template>

    <template #demo>
<pre class="overflow-auto">modules: ['@pinia/nuxt']</pre>
    </template>

    <section>
      <NuxtLink to="#demo" class="package-subtitle">
        <h2>
          Demo
        </h2>
      </NuxtLink>

      <div class="flex gap-x-5 flex-wrap">
        <BaseCodeSnippet file-name="store.js" class="flex-1 w-5/12">
<pre class="overflow-auto">import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const counter = ref(0)
  const updateCount = () => counter.value++

  return { counter, updateCount }
})
</pre>
      </BaseCodeSnippet>
      <BaseCodeSnippet file-name="Counter.vue" class="flex-1 w-5/12">
<pre class="overflow-auto">
&lt;script setup&gt;
import { storeToRefs } from 'pinia'
const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)
const { updateCount } = demoStore
&lt;/script&gt;

&lt;template&gt;
  &lt;button class="w-32 mt-8 p-2 bg-primary hover:bg-primary/75 text-background rounded" @click="updateCount"&gt;
    Count is:
    &#123;&#123; counter &#125;&#125;
  &lt;/button&gt;
&lt;/template&gt;
</pre>
        </BaseCodeSnippet>
      </div>

      <PackagesDemoPinia />
    </section>
  </PackagesLayout>
</template>

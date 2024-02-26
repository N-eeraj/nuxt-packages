<script setup>
import { get } from '@vueuse/core'
const refVal = ref('test')
console.log(get(refVal))

definePageMeta({
  name: 'get',
  category: 'Utilities',
})
</script>

<template>
  <h1 class="text-white text-2xl">
    get
  </h1>

  <BaseCodeSnippet file-name="get.vue" class="w-fit">
    <pre class="overflow-auto">&lt;script setup&gt;
  import { get } from '@vueuse/core'
  const refVal = ref('test')
  console.log(get(refVal))
&lt;/script&gt;</pre>
  </BaseCodeSnippet>
</template>

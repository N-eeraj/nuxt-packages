<script setup>
import { set } from '@vueuse/core'
const refVal = ref('')
console.log(refVal.value)
set(refVal, 'test')
console.log(refVal.value)

definePageMeta({
  name: 'set',
  category: 'Utilities',
})
</script>

<template>
  <h1 class="text-white text-2xl">
    set
  </h1>

  <BaseCodeSnippet file-name="set.vue" class="w-fit">
    <pre class="overflow-auto">&lt;script setup&gt;
  import { set } from '@vueuse/core'
  const refVal = ref('')
  console.log(refVal)
  set(refVal, 'test')
  console.log(refVal)
&lt;/script&gt;</pre>
  </BaseCodeSnippet>
</template>

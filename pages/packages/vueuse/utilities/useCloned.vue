<script setup>
import { useCloned } from '@vueuse/core'
const original = ref({ key: 'value' })
const { cloned } = useCloned(original)
original.value.key = 'some new value'
console.log(original.value.key)
console.log(cloned.value.key)

definePageMeta({
  name: 'useCloned',
  category: 'Utilities',
})
</script>

<template>
  <h1 class="text-white text-2xl">
    useCloned
  </h1>

  <BaseCodeSnippet file-name="clone.vue" class="w-fit">
    <pre class="overflow-auto">&lt;script setup&gt;
  import { useCloned } from '@vueuse/core'
  const original = ref({ key: 'value' })
  const { cloned } = useCloned(original)
  original.value.key = 'some new value'
  console.log(original.value.key)
  console.log(cloned.value.key)
&lt;/script&gt;</pre>
  </BaseCodeSnippet>
</template>

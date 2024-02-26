<script setup>
import { useToggle } from '@vueuse/core'
const [refVal, toggleValue] = useToggle()
console.log(refVal.value)
toggleValue()
console.log(refVal.value)

definePageMeta({
  name: 'useToggle',
  category: 'Utilities',
})
</script>

<template>
  <h1 class="text-white text-2xl">
    useToggle
  </h1>

  <BaseCodeSnippet file-name="toggle.vue" class="w-fit">
    <pre class="overflow-auto">&lt;script setup&gt;
  import { useToggle } from '@vueuse/core'
  const [refVal, toggleValue] = useToggle()
  console.log(refVal.value)
  toggleValue()
  console.log(refVal.value)
&lt;/script&gt;</pre>
  </BaseCodeSnippet>
</template>

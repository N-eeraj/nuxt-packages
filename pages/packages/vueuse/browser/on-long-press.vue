<script setup>
import { onLongPress } from '@vueuse/core'
const btnRef = ref(null)
const longPressed = ref(false)
onLongPress(btnRef, () => longPressed.value = true, { delay: 1000 })

definePageMeta({
  name: 'onLongPress',
  category: 'Browser',
})
</script>

<template>
  <h1 class="text-white text-2xl">
    onLongPress    
  </h1>

  <BaseCodeSnippet file-name="LongPress.vue" class="w-fit">
    <pre class="overflow-auto">&lt;script setup&gt;
  import { onLongPress } from '@vueuse/core'
  const btnRef = ref(null)
  const longPressed = ref(false)
  onLongPress(btnRef, () => longPressed.value = true, { delay: 1000 })
&lt;/script&gt;

&lt;template&gt;
  &lt;span&gt;
    Long Pressed:
    &#123;&#123; longPressed &#125;&#125;
  &lt;/span&gt;

  &lt;button ref="btnRef"&gt;
    Press long
  &lt;/button&gt;
  &lt;button v-if="longPressed" @click="longPressed=false"&gt;
    Reset
  &lt;/button&gt;
&lt;/template&gt;</pre>
  </BaseCodeSnippet>

  <div class="flex flex-col gap-y-4 mt-4">
    <span class="text-white">
      Long Pressed:
      {{ longPressed }}
    </span>

    <div class="flex gap-x-4">
      <button ref="btnRef" class="w-32 p-2 bg-primary hover:bg-primary/75 text-background rounded">
        Press long
      </button>
      <button v-if="longPressed" class="w-32 p-2 text-primary border border-primary hover:border-primary/75 rounded" @click="longPressed=false">
        Reset
      </button>
    </div>
  </div>
</template>

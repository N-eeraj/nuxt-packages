<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
const dateTime = useDateFormat(useNow(), 'dddd, MMM Do YYYY hh:mm:ss A')

definePageMeta({
  name: 'useDateFormat',
  category: 'Time',
})
</script>

<template>
  <h1 class="text-white text-2xl">
    useClipboard    
  </h1>

  <BaseCodeSnippet file-name="Counter.vue" class="flex-1 w-full md:w-5/12">
      <pre class="overflow-auto">&lt;script setup&gt;
  import { useDateFormat, useNow } from '@vueuse/core'
  const dateTime = useDateFormat(useNow(), 'dddd, MMM Do YYYY hh:mm:ss A')
&lt;/script&gt;

&lt;template&gt;
  &lt;span class="text-primary"&gt;
    &#123;&#123; dateTime &#125;&#125;
  &lt;/span&gt;
&lt;/template&gt;</pre>
  </BaseCodeSnippet>

  <span class="text-primary">
    {{ dateTime }}
  </span>
</template>

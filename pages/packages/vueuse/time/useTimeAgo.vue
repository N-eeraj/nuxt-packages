<script setup>
import { useTimeAgo } from '@vueuse/core'
const date = new Date(2000, 0, 1)
const timeAgo = useTimeAgo(date)

definePageMeta({
  name: 'useTimeAgo',
  category: 'Time',
})
</script>

<template>
  <h1 class="text-white text-2xl">
    useTimeAgo    
  </h1>

  <BaseCodeSnippet file-name="TimeAgo.vue" class="w-fit">
    <pre class="overflow-auto">&lt;script setup&gt;
  import { useTimeAgo } from '@vueuse/core'
  const date = new Date(2000, 0, 1)
  const timeAgo = useTimeAgo(date)
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;strong&gt;
      &#123;&#123; timeAgo &#125;&#125;
    &lt;/strong&gt;
    since
    &#123;&#123; date.toLocaleDateString() &#125;&#125;
  &lt;/div&gt;
&lt;/template&gt;</pre>
  </BaseCodeSnippet>

  <div class="text-white">
    <strong class="text-primary">
      {{ timeAgo }}
    </strong>
    since
    {{ date.toLocaleDateString() }}
  </div>
</template>

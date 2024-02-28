<script setup>
import { useFetch } from '@vueuse/core'
const { data, isFetching } = useFetch('https://pokeapi.co/api/v2/pokemon/pikachu')
const name = computed(() => JSON.parse(data.value)?.name)

definePageMeta({
  name: 'useFetch',
  category: 'Network',
})
</script>

<template>
  <h1 class="text-white text-2xl">
    useFetch
  </h1>

  <BaseCodeSnippet file-name="useFetch.vue" class="w-fit">
    <pre class="overflow-auto">&lt;script setup&gt;
  import { useFetch } from '@vueuse/core'
  const { data, isFetching } = useFetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  const name = computed(() => JSON.parse(data.value)?.name)
&lt;/script &gt;

&lt;template&gt;
  &lt;span v-if="isFetching"&gt;
    Loading Data...
  &lt;/span&gt;
  &lt;span v-else&gt;
    &#123;&#123; name &#125;&#125;
  &lt;/span&gt;
&lt;template&gt;</pre>
  </BaseCodeSnippet>

  <span v-if="isFetching" class="text-white">
    Loading Data...
  </span>
  <span v-else class="text-white">
    {{ name }}
  </span>
</template>

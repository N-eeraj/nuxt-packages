<script setup>
const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })

definePageMeta({
  name: 'useClipboard',
  category: 'Browser',
})
</script>

<template>
  <h1 class="text-white text-2xl">
    useClipboard    
  </h1>

  <BaseCodeSnippet file-name="Clipboard.vue" class="flex-1 w-full">
    <pre class="overflow-auto">&lt;script setup&gt;
  const source = ref('Hello')
  const { text, copy, copied, isSupported } = useClipboard({ source })
&lt;/script&gt;

&lt;template&gt;
  &lt;div v-if="isSupported"&gt;
    &lt;input v-model="source" type="text" /&gt;
    &lt;p &gt;
      Current copied:
      &lt;code&gt;
        {{ text || 'none' }}
      &lt;/code&gt;
    &lt;/p&gt;
    &lt;button @click="copy(source)"&gt;
      &lt;span v-if="!copied">Copy&lt;/span&gt;
      &lt;span v-else>Copied!&lt;/span&gt;
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;p v-else&gt;
    Your browser does not support Clipboard API
  &lt;/p&gt;
&lt;/template&gt;</pre>
  </BaseCodeSnippet>

  <div v-if="isSupported" class="mt-4 flex flex-col gap-y-2">
    <input v-model="source" type="text" class="p-2 bg-background-grey text-light-extra" />
    <p class=" text-white-light">
      Current copied:
      <code>
        {{ text || 'none' }}
      </code>
    </p>
    <button class="w-32 p-2 bg-primary hover:bg-primary/75 text-background rounded" @click="copy(source)">
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </button>
  </div>
  <p v-else class="text-light">
    Your browser does not support Clipboard API
  </p>
</template>

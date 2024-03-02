<script setup>
const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })

definePageMeta({
  name: 'useClipboard',
  category: 'Browser',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <h1 class="text-white text-2xl">
    useClipboard    
  </h1>

  <BaseCodeSnippet :code="vueUseDemos.browser.useClipboard" file-name="Clipboard.vue" class="flex-1 w-full" />

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

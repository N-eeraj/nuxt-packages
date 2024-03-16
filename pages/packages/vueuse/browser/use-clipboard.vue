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
  <PackagesDemoVueUseLayout name="useClipboard">
    <template #description>
      Reactive
      <NuxtLink to="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API" target="_blank" rel="nofollow" class="text-primary underline">
        Clipboard API.
      </NuxtLink>
      Provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard.
      Access to the contents of the clipboard is gated behind the Permissions API.
      Without user permission, reading or altering the clipboard contents is not permitted.
    </template>
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
  </PackagesDemoVueUseLayout>
</template>

<script setup>
import { onLongPress } from '@vueuse/core'
const btnRef = ref(null)
const longPressed = ref(false)
onLongPress(btnRef, () => longPressed.value = true, { delay: 1000 })

definePageMeta({
  name: 'onLongPress',
  category: 'Browser',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <PackagesDemoVueUseLayout name="onLongPress">
    <template #description>
      Listen for a long press on an element using VueUse library.
    </template>

    <BaseCodeSnippet :code="vueUseDemos.browser.onLongPress" file-name="LongPress.vue" class="w-fit" />

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
  </PackagesDemoVueUseLayout>
</template>

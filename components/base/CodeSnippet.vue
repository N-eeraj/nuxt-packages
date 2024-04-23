<script setup>
const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: false,
  },
  lang: {
    type: String,
    required: false,
    default: 'vue',
  },
})

const { setToast } = useToastStore()

const copyIcon = ref('ph:copy')

const copyCode = () => {
  copyIcon.value = 'ph:check-square-duotone'
  navigator.clipboard.writeText(props.code)
  setToast(true, 'Copied to clipboard')
  setTimeout(() => {
    copyIcon.value = 'ph:copy'
  }, 2000)
}
</script>

<template>
  <section class="flex flex-col gap-y-2">
    <h2>
      <slot name="title" />
    </h2>
    <p class="text-light-extra">
      <slot name="description" />
    </p>
    <div class="relative flex flex-col min-w-50 rounded-md overflow-hidden">
      <code v-if="fileName" class="w-full p-3 bg-background-grey text-light text-sm">
        {{ fileName }}
      </code>
      <Shiki :code="code || ''" :lang theme="material-theme-palenight" :title="fileName" class="block max-w-full min-h-8 max-h-72 p-2 overflow-x-auto bg-[#292D3E] overflow-y-auto" />
      <Icon :name="copyIcon" class="absolute top-3 right-4 text-light cursor-pointer z-1" @click="copyCode" />
    </div>
  </section>
</template>

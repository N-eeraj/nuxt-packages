<script setup>
defineProps({
  fileName: {
    type: String,
    required: false,
  },
})

const code = ref(null)
const copyCode = () => navigator.clipboard.writeText(code.value.innerText)
</script>

<template>
  <section class="flex flex-col gap-y-2">
    <h2>
      <slot name="title" />
    </h2>
    <p class="text-light-extra">
      <slot name="description" />
    </p>
    <div class="relative flex flex-col bg-bluegray-800 border border-light-extra/25 rounded-md overflow-hidden">
      <code v-if="fileName" class="w-full p-3 bg-background-grey text-light text-sm">
        {{ fileName }}
      </code>
      <code ref="code" class="block min-h-12 p-3 text-light text-sm">
        <slot />
      </code>
      <Icon name="ph:copy" class="absolute top-4 right-4 text-light cursor-pointer" @click="copyCode" />
    </div>
  </section>
</template>

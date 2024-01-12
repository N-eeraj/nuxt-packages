<script setup>
const code = ref(null)
const copyCode = () => navigator.clipboard.writeText(code.value.innerText)
</script>

<template>
  <section class="flex flex-col gap-y-2 w-full">
    <h2>
      <slot name="title" />
    </h2>
    <p class="text-light-extra">
      <slot name="description" />
    </p>
    <div class="relative min-h-12 bg-bluegray-800 border border-light-extra/25 p-3 rounded-md">
      <code ref="code" class="text-light">
        <slot />
      </code>
      <Icon name="ph:copy" class="absolute top-4 right-4 text-light cursor-pointer" @click="copyCode" />
    </div>
  </section>
</template>

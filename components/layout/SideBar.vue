<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <aside class="fixed md:sticky top-0 left-0 flex-shrink-0 w-screen md:w-56 h-full max-sm:px-4 max-sm:pt-20 pb-6 bg-background overflow-y-auto z-1" :class="{'max-md:hidden': !modelValue}">
    <ul class="flex flex-col gap-y-2.5 text-light/80 text-sm">
      <li v-for="i in 50">{{ i }}</li>
    </ul>
  </aside>
</template>

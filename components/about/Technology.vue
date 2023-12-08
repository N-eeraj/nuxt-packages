<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink :to="url" target="_blank" rel="nofollow" class="flex flex-col gap-y-2 h-full p-5 bg-gray-800/70 hover:bg-gray-700/70 rounded-lg border border-transparent hover:border-primary duration-200">
    <img :src="logo" :alt="name" class="w-12 aspect-square object-contain" />
    <strong class="text-white">
      {{ name }}
    </strong>
    <p class="text-light-extra font-light">
      {{ description }}
    </p>
  </NuxtLink>
</template>

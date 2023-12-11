<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink :to="path" class="flex flex-col gap-y-3 max-h-60 p-5 bg-gray-900 hover:bg-transparent ring ring-gray-800 hover:ring-primary rounded duration-400">
    <img :src="`/images/logos/${logo}`" :alt="name" class="w-12 aspect-square object-contain" />
    <strong class="text-light text-lg">
      {{ name }}
    </strong>
    <p class="text-light-extra line-clamp-2">
      {{ description }}
    </p>
  </NuxtLink>
</template>

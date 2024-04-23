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
  category: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink :to="path" class="flex flex-col gap-y-3 max-h-60 p-5 bg-gray-900 hover:bg-transparent ring ring-gray-800 hover:ring-primary rounded duration-400">
    <img v-if="logo" :src="`/images/logos/${logo}`" :alt="name" class="w-12 aspect-square object-contain" />
    <Icon v-else :name="packageCategoriesIcons[category]" class="box-content w-6 h-6 p-3 bg-gray-800 text-gray-400 rounded-lg" />
    <strong class="text-light text-lg">
      {{ name }}
    </strong>
    <p class="text-light-extra line-clamp-2">
      {{ description }}
    </p>
  </NuxtLink>
</template>

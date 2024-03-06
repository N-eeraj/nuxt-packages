<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex items-center gap-x-2">
    <NuxtLink to="/packages/vueuse" class="text-light-extra hover:text-light text-2xl">
      <Icon name="ph:arrow-left" />
    </NuxtLink>
    <h2 class="text-white text-2xl">
      {{ name }}
    </h2>
  </div>

  <section class="text-light">
    <slot name="description" />
  </section>

  <slot />
</template>

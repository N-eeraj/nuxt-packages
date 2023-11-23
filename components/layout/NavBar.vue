<script setup>
defineProps({
  sideBar: {
    type: Boolean,
    required: true,
  }
})
</script>

<template>
  <nav class="fixed top-0 flex justify-between items-center w-full h-16 screen-padding bg-background/80 backdrop-blur z-1">
    <NuxtLink to="/" class="flex items-center gap-x-1 h-full">
      <img src="/images/nuxt-icon.svg" alt="nuxt-icon" class="w-9">
      <strong class="text-white text-3xl">
        Nuxt
      </strong>
    </NuxtLink>
    <button class="!md:hidden" @click="$emit('update:sideBar', !sideBar)">
      <Icon :name="sideBar ? 'ph:x' : 'ph:list'" class="text-white text-xl" />
    </button>
  </nav>
</template>

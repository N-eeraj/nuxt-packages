<script setup>
defineProps({
  sideBar: {
    type: Boolean,
    required: true,
  }
})
</script>

<template>
  <nav class="fixed top-0 flex justify-between items-center w-full h-16 pl-screen pr-screen bg-background/80 max-md:border-b-0.3 max-md:border-b-light/50 backdrop-blur z-1">
    <NuxtLink to="/" class="flex items-center gap-x-1 h-full">
      <img src="/images/logos/nuxt.svg" alt="nuxt-icon" class="w-9">
      <strong class="text-white text-3xl">
        Nuxt
      </strong>
    </NuxtLink>
    <button class="!md:hidden" @click="$emit('update:sideBar', !sideBar)">
      <Icon :name="sideBar ? 'ph:x' : 'ph:list'" class="text-white text-xl" />
    </button>
  </nav>
</template>

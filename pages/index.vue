<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="fixed flex flex-col justify-center items-center gap-y-6 md:gap-y-8 w-screen h-screen p-4 text-center bg-background">
    <img src="/images/path.svg" alt="decoration vector" class="fixed select-none animate-pulse" />
    <HomeTitle class="relative z-1" />
    <HomeText class="relative z-1" />
    <HomeActions class="relative z-1" />
  </div>
</template>

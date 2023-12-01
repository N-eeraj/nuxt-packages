<script setup>
definePageMeta({
  layout: 'blank',
  name: 'Home',
  icon: 'ant-design:home-filled',
})
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-y-6 md:gap-y-8 full-screen p-4 text-center bg-background">
    <img src="/images/path.svg" alt="decoration vector" class="fixed select-none animate-pulse" />
    <HomeTitle class="relative z-1" />
    <HomeText class="relative z-1" />
    <HomeActions class="relative z-1" />
  </div>
</template>

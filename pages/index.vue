<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="fixed flex flex-col justify-center items-center gap-y-6 md:gap-y-8 w-screen h-screen p-4 text-center bg-background md:bg-[url('/path.svg')] bg-contain bg-no-repeat bg-center">
    <HomeTitle />
    <HomeText />
    <HomeActions />
  </div>
</template>

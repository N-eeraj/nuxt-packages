<script setup>
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <section class="grid place-items-center place-content-center w-screen h-screen bg-background">
    <span class="text-primary">
      404
    </span>
    <h1 class="text-white font-bold text-5xl">
      Error
    </h1>
    <span class="mt-6 text-light-extra">
      Page not found: 
      {{ $route.path }}
    </span>
    <NuxtLink to="/" class="mt-10">
      <BaseButton class="flex justify-center gap-x-2.5 bg-primary hover:bg-primary/90 text-background" @click="showNuxtVideo = true">
        Go back home
      </BaseButton>
    </NuxtLink>
  </section>
</template>

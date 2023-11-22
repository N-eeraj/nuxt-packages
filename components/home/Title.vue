<template>
  <header class="flex flex-col items-center">
    <NuxtLink to="/about" class="w-fit">
      <BaseChip tabindex="-1" class="flex justify-center items-center gap-x-1 hover:bg-primary/10 text-primary border-primary/50 hover:border-primary text-xs">
        About this Project
        <Icon name="ph:arrow-right" size="18" />
      </BaseChip>
    </NuxtLink>

    <NuxtLink to="https://nuxt.com/" target="_blank" rel="nofollow">
      <h1 class="flex justify-center items-center gap-x-3 text-white text-7xl md:text-8xl font-semibold">
        <img src="/images/nuxt-icon.svg" alt="nuxt-icon" class="w-20 md:w-32">
        Nuxt
      </h1>
    </NuxtLink>

    <h2 class="text-white text-5xl md:text-6xl font-medium md:font-semibold">
      The Intuitive
      <br>
      <span class="text-primary">
        Vue Framework
      </span>
    </h2>
  </header>
</template>
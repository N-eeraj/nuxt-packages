<template>
  <nav class="fixed top-0 left-0 flex justify-between items-center w-full h-16 px-8 bg-background/80 backdrop-blur z-1">
    <div class="flex items-center gap-x-1 h-full">
      <img src="/images/nuxt-icon.svg" alt="nuxt-icon" class="w-9">
      <strong class="text-white text-3xl">
        Nuxt
      </strong>
    </div>
  </nav>
  <main class="full-screen p-4 pt-20 bg-background overflow-y-auto">
    <slot />
  </main>
  <footer>
    Footer
  </footer>
</template>

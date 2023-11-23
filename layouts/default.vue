<script setup lang="ts">
const openSideBar = ref(false)
</script>

<template>
  <LayoutNavBar v-model:side-bar="openSideBar" />
  <main class="relative full-screen md:flex gap-x-4 screen-padding pt-20 bg-background overflow-y-auto">
    <LayoutSideBar v-model:open="openSideBar" />
    <section>
      <slot />
    </section>
  </main>
</template>

<script setup>
const openSideBar = ref(!false)
</script>

<template>
  <LayoutNavBar />
  <main class="relative full-screen md:flex gap-x-4 screen-padding pt-20 bg-background overflow-y-auto">
    <LayoutSideBar v-model="openSideBar" />
    <section>
      <slot />
    </section>
  </main>
</template>

<script setup>
const openSideBar = ref(false)
</script>

<template>
  <LayoutNavBar v-model:side-bar="openSideBar" />
  <main class="relative full-screen md:flex gap-x-4 pl-screen pt-20 pb-10 bg-background overflow-y-auto">
    <LayoutSideBar v-model:open="openSideBar" />
    <section class="w-full p-1 pr-screen overflow-x-hidden">
      <slot />
    </section>
  </main>
  <BaseToast />
</template>

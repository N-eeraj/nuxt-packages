<template>
  <LayoutNavBar />
  <main class="relative full-screen screen-padding pt-20 bg-background overflow-y-auto">
    <LayoutSideBar />
    <section class="absolute top-0 w-[calc(100vw-320px)] mt-20 pl-60">
      <slot />
    </section>
  </main>
</template>

<script setup>
const { marqueeDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="marqueeDemo" file-name="Marquee.vue" class="mb-4" />

    <NuxtMarquee :speed="240" pause-on-hover>
      <div v-for="i of 5" class="grid place-items-center w-25vw h-24 bg-background-grey text-primary text-3xl border border-primary" :key="i">
        {{ i }}
      </div>
    </NuxtMarquee>
  </section>
</template>

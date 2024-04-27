<script setup>
const { bootstrapIconsDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="bootstrapIconsDemo" file-name="BootstrapIcons.vue" class="w-full mb-4" />

    <p class="text-light">
      You can use any name from the
      <NuxtLink to="https://icons.getbootstrap.com/" target="_blank" rel="nofollow" class="text-[#7836fa]">
        https://icons.getbootstrap.com/
      </NuxtLink>
      collection
    </p>

    <BootstrapIcon name="airplane-engines-fill" class="text-white text-3xl" />
    <BootstrapIcon name="train-front" class="text-white text-3xl" />
  </section>
</template>

<script setup>
const { googleFontsDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="googleFontsDemo" file-name="Fonts.vue" class="mb-4" />

    <p class="text-white font-['Montserrat']">
      Montserrat
    </p>
    <p class="text-white font-['Lato'] font-thin">
      Lato: 100
    </p>
    <p class="text-white font-['Lato'] font-black">
      Lato: 900
    </p>
    <p class="text-white font-['Protest_Revolution'] italic">
      Protest Revolution
    </p>
  </section>
</template>

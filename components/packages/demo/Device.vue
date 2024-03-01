<script setup>
const { colorModeDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="colorModeDemo" file-name="Device.vue" class="mb-4" />

    <div class="text-white">
      <template v-if="$device.isDesktop">
        Desktop
      </template>
      <template v-else-if="$device.isTablet">
        Tablet
      </template>
      <template v-else>
        Mobile
      </template>
    </div>
  </section>
</template>

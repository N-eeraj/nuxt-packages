<script setup>
const colorModes = ref([
  'System',
  'Light',
  'Dark',
  'Sepia',
])

const { colorModeDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="colorModeDemo" file-name="ColorMode.vue" class="mb-4" />

    <h1 class="demo-text p-2 rounded">
      Color mode: {{ $colorMode.value }}
    </h1>
    <select v-model="$colorMode.preference" class="demo-select mt-4 p-1">
      <option v-for="mode of colorModes" :value="mode.toLocaleLowerCase()" :key="mode">
        {{ mode }}
      </option>
    </select>
  </section>
</template>

<style scoped>
.dark-mode .demo-text, .dark-mode .demo-select {
  background-color: black !important;
  color: white !important;
}
.light-mode .demo-text, .dark-mode .demo-select {
  background-color: white;
  color: black;
}
.sepia-mode .demo-text, .sepia-mode .demo-select {
  background-color: #FED;
  color: #300;
}
</style>

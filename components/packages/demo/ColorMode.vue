<script setup>
const colorModes = ref([
  'System',
  'Light',
  'Dark',
  'Sepia',
])
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet file-name="Fonts.vue" class="mb-4">
      <pre class="overflow-auto">&lt;template&gt;
  &lt;h1 class="demo-text"&gt;
    Color mode: &#123;&#123; $colorMode.value &#125;&#125;
  &lt;/h1&gt;
  &lt;select v-model="$colorMode.preference" class="demo-select"&gt;
    &lt;option value="system"&gt;
      System
    &lt;/option&gt;
    &lt;option value="light"&gt;
      Light
    &lt;/option&gt;
    &lt;option value="dark"&gt;
      Dark
    &lt;/option&gt;
    &lt;option value="sepia"&gt;
      Sepia
    &lt;/option&gt;
  &lt;/select&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.dark-mode .demo-text, .dark-mode .demo-select {
  background-color: black;
  color: white;
}
.light-mode .demo-text, .dark-mode .demo-select {
  background-color: white;
  color: black;
}
.sepia-mode .demo-text, .sepia-mode .demo-select {
  background-color: #FED;
  color: #300;
}
&lt;/style&gt;</pre>
    </BaseCodeSnippet>

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

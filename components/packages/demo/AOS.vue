<script setup>
const { aosDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <div data-aos="fade-up" class="mt-4 py-2 px-5 bg-background-grey text-light border border-light-extra rounded">
      Hello
    </div>

    <BaseCodeSnippet :code="aosDemo" lang="vue" file-name="AOS.vue" />
  </section>
</template>

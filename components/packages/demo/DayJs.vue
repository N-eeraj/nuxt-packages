<script setup>
const { dayJsDemo } = useDemoCode()

const dayjs = useDayjs()
const dateTime = computed(() => dayjs().format('DD MMM, YYYY') )
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="dayJsDemo" lang="vue" file-name="DayJs.vue" />

    <span class="text-primary">
      {{ dateTime }}
    </span>
  </section>
</template>

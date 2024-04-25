<script setup>
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

const { vCalendarDemo } = useDemoCode()

const date = ref(new Date())
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="vCalendarDemo" lang="vue" file-name="Calendar.vue" />

    <DatePicker v-model="date" is-dark class="mt-6" />
  </section>
</template>

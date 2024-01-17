<script setup>
import { storeToRefs } from 'pinia'
const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)
const { updateCount } = demoStore
</script>

<template>
  <button class="w-32 mt-8 p-2 bg-primary hover:bg-primary/75 text-background rounded" @click="updateCount">
    Count is:
    {{ counter }}
  </button>
</template>

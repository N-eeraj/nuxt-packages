<script setup lang="ts">
const { options } = useRouter()

definePageMeta({
  layout: 'blank',
  name: 'All Packages',
  icon: 'ph:package-duotone',
})
</script>

<template>
  <div>
    {{ options.routes }}
  </div>
</template>

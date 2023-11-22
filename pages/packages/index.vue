<script setup>
const { options } = useRouter()

definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div>
    {{ options.routes }}
  </div>
</template>
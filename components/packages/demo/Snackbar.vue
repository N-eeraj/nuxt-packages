<script setup>
const snackbar = useSnackbar()
const showSnackbar = () => {
  const random = Math.random()
  let type, text
  if (random < 0.25) {
    type = 'error'
    text = 'Error Text'
  }
  else if (random < 0.5) {
    type = 'warning'
    text = 'Warning Text'
  }
  else if (random < 0.75) {
    type = 'info'
    text = 'Info Text'
  }
  else {
    type = 'success'
    text = 'Success Text'
  }
  snackbar.add({ type, text })
}

const { snackbarDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="snackbarDemo" file-name="Snackbar.vue" class="mb-4" />

    <BaseButton class="bg-primary" @click="showSnackbar">
      Show Snackbar
    </BaseButton>
  </section>
</template>

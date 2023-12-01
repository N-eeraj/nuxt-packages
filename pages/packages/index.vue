<script setup>
const { options } = useRouter()

const packages = computed(() => {
  const allPackages = []
  options.routes.forEach(({ path, meta }) => {
    if (path.startsWith('/packages/'))
      allPackages.push({ path, ...meta })
  })
  return allPackages
})

definePageMeta({
  name: 'All Packages',
  icon: 'ph:package-duotone',
})
</script>

<template>
  <div>
    <h1 class="text-white text-3xl font-medium">
      Nuxt Packages
    </h1>
    <div class="grid md:grid-cols-2">
      <div v-for="i in packages">
        {{ i }}
      </div>
    </div>
  </div>
</template>

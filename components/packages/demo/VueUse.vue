<script setup>
const { options } = useRouter()

const demos = computed(() => {
  const categories = {}
  options.routes.forEach(({ path, meta }) => {
    if (path.startsWith('/packages/vueuse/')) {
      if (categories.hasOwnProperty(meta.category))
        categories[meta.category].push({ meta, path })
      else
        categories[meta.category] = [{ meta, path }]
    }
  })
  return categories
})
</script>

<template>
  <NuxtLink to="#demo" class="package-subtitle">
    Demos
  </NuxtLink>
  <div v-for="([ category, list ]) of Object.entries(demos)" class="mt-4" :key="category">
    <h2 class="text-light text-xl">
      {{ category }}
    </h2>
    <div class="flex flex-col gap-y-1">
      <NuxtLink v-for="({ meta, path }) in list" :to="path" class="block w-fit text-primary opacity-75 hover:opacity-100" :key="path">
        {{ meta.name }}
      </NuxtLink>
    </div>
  </div>
</template>
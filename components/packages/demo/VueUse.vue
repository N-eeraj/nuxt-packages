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
  <details v-for="([ category, list ]) of Object.entries(demos)" class="mt-4" :key="category">
    <summary class=" text-light text-xl cursor-pointer">
      {{ category }}
    </summary>
    <ul class="pl-4">
      <li v-for="({ meta, path }) in list" :key="path">
        <NuxtLink :to="path" class="block w-fit text-primary opacity-75 hover:opacity-100">
          {{ meta.name }}
        </NuxtLink>
      </li>
    </ul>
  </details>
</template>
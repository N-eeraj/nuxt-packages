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

const categories = computed(() => Array.from(new Set(packages.value.map(({ category }) => category))))

const handleCategorySelect = category => {
  console.log(category)
}

definePageMeta({
  name: 'All Packages',
  icon: 'ph:package-duotone',
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <h1 class="text-white text-3xl font-medium">
      Nuxt Packages
    </h1>

    <div class="flex gap-x-2">
      <div class="flex-shrink-0 max-sm:hidden w-72">
        <span class="text-white">
          Categories
        </span>
        <ul class="mt-3">
          <li v-for="category in categories" :key="category">
            <button class="w-full py-1 pl-3 text-light-extra text-start border-l border-l-light-extra/20" @click="handleCategorySelect(category)">
              {{ category }}
            </button>
          </li>
        </ul>
      </div>

      <div class="grid md:grid-cols-3 lg:grid-cols-4">
        <div v-for="i in packages">
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
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

const filteredCategory = computed(() => route.query.category)
const filteredPackages = computed(() => packages.value.filter(({ category }) => filteredCategory.value === category))

const packagesList = computed(() => filteredCategory.value ? filteredPackages.value : packages.value)

definePageMeta({
  name: 'All Packages',
  icon: 'ph:package-duotone',
})
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <h1 class="text-white text-3xl font-medium">
      Nuxt Packages
    </h1>

    <div class="flex gap-x-2">
      <div class="flex-shrink-0 max-lg:hidden w-60">
        <span class="text-white">
          Categories
        </span>
        <ul class="mt-3">
          <PackagesCategory v-for="category in categories" :category="category" :key="category" />
        </ul>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        <PackagesSearch />

        <PackagesCard v-for="({ name, path, description, logo }) in packagesList" :name="name" :path="path" :description="description" :logo="logo" :key="name" />
      </div>
    </div>
  </div>
</template>

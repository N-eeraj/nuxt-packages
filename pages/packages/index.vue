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

const categories = computed(() => Array.from(new Set(packages.value.map(({ category }) => category))).toSorted())

const filteredCategory = computed(() => route.query.category)
const filteredPackages = computed(() => packages.value.filter(({ category }) => filteredCategory.value === category))

const packagesList = computed(() => (filteredCategory.value ? filteredPackages.value : packages.value).filter(({ name }) => name.toLowerCase().includes(route.query.q?.toLowerCase() || '')))

definePageMeta({
  name: 'All Packages',
  icon: 'ph:package-duotone',
})
</script>

<template>
  <div class="flex flex-col gap-y-5 w-full">
    <h1 class="text-white text-3xl font-medium">
      Nuxt Packages
    </h1>

    <div class="flex gap-x-2 w-full">
      <div class="flex-shrink-0 max-lg:hidden w-60">
        <span class="text-white">
          Categories
        </span>
        <ul class="mt-3">
          <PackagesCategory v-for="category in categories" :category="category" :key="category" />
        </ul>
      </div>

      <div class="flex flex-col gap-8 w-full">
        <div class="col-span-1 sm:col-span-2 xl:col-span-3">
          <PackagesSearch />
        </div>

        <div v-auto-animate class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <PackagesCard v-for="({ name, path, description, logo }) in packagesList" :name="name" :path="path" :description="description" :logo="logo" :key="name" />
        </div>
      </div>
    </div>
  </div>
</template>

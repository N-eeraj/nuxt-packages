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
  <div class="flex flex-col gap-y-5">
    <h1 class="text-white text-3xl font-medium">
      Nuxt Packages
    </h1>

    <div class="flex gap-x-2">
      <div class="flex-shrink-0 max-sm:hidden w-60">
        <span class="text-white">
          Categories
        </span>
        <ul class="mt-3">
          <li v-for="category in categories" :key="category">
            <button class="w-full py-1 pl-3 text-light-extra hover:text-light text-start border-l border-l-light-extra/20 hover:border-l-light duration-400" @click="handleCategorySelect(category)">
              {{ category }}
            </button>
          </li>
        </ul>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        <NuxtLink v-for="({ name, path, description, logo }) in packages" :to="path" class="flex flex-col gap-y-3 max-h-60 p-5 bg-gray-900 hover:bg-transparent ring ring-gray-800 hover:ring-primary rounded duration-400">
          <img :src="`/images/logos/${logo}`" :alt="name" class="w-12 aspect-square object-contain" />
          <strong class="text-light text-lg">
            {{ name }}
          </strong>
          <p class="text-light-extra line-clamp-2">
            {{ description }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

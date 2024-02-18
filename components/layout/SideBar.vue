<script setup>
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
})

const { options } = useRouter()
const route = useRoute()

const mainNavigations = computed(() =>
  options.routes.filter(({ path }) => [ '/', '/about', '/packages' ].includes(path))
    .sort(({ path: firstPath }, { path: secondPath }) => {
      if (firstPath < secondPath) return -1
      return 1
    })
)

const packagesNavigations = computed(() =>
  options.routes.filter(({ path }) => path.startsWith('/packages/') && path.split('/').length === 3)
    .sort(({ path: firstPath }, { path: secondPath }) => {
      if (firstPath < secondPath) return -1
      return 1
    })
)

const currentPath = computed(() => route.path)
</script>

<template>
  <aside class="fixed md:sticky top-0 left-0 flex-shrink-0 w-screen md:w-56 h-full max-sm:px-4 max-sm:pt-20 pb-6 bg-background overflow-y-auto z-1" :class="{'max-md:hidden': !open}">
    <ul class="flex flex-col gap-y-2.5 p-1 text-light/80 text-sm">
      <li v-for="({ name, path, meta }) in mainNavigations" :key="path">
        <NuxtLink :to="path" class="flex items-center gap-x-2 w-full cursor-pointer text-xl md:text-lg hover:text-light" :class="{ '!text-primary': currentPath === path }" @click="$emit('update:open', false)">
          <Icon :name="meta?.icon" />
          <span>
            {{ name }}
          </span>
        </NuxtLink>
      </li>
    </ul>

    <hr class="my-3 border-light-extra/25" />

    <ul class="flex flex-col gap-y-2.5 p-1 text-light/80 text-sm">
      <li v-for="({ name, path, meta }) in packagesNavigations" :key="path">
        <NuxtLink :to="path" class="flex items-center gap-x-2 w-full cursor-pointer text-xl md:text-lg hover:text-light" :class="{ '!text-primary': currentPath === path }" @click="$emit('update:open', false)">
          <img v-if="meta.logo" :src="`/images/logos/${meta.logo}`" :alt="name" class="w-4" />
          <Icon v-else name="ph:puzzle-piece-duotone" class="box-content w-4 h-4 text-gray-400" />
          <span>
            {{ name }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

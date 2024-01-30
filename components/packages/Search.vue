<script setup>
const route = useRoute()
const { replace } = useRouter()

const searchInput = ref(null)

const setQuery = () => replace({
  query: {
    ...route.query,
    q: searchInput.value.value,
  },
  ...route
})

const handleSearchChange = (event) => {
  if (event.key === '/') {
    if (searchInput.value !== document.activeElement)
      event.preventDefault()
    searchInput.value.focus()
  }
  setQuery()
}

const clearSearch = () => {
  searchInput.value.value = null
  setQuery()
}

const focusSearch = () => searchInput.value.focus()

onMounted(() => {
  document.addEventListener('keyup', handleSearchChange)
})

onBeforeUnmount(() => {
  document.removeEventListener('keyup', handleSearchChange)
})
</script>

<template>
  <div class="relative w-full sm:w-3/5 max-w-66 sm:max-w-56">
    <Icon name="ph:magnifying-glass-duotone" size="20" class="absolute position-center-y left-3 text-light-extra" @click="focusSearch" />
    <input ref="searchInput" :value="route.query?.q" placeholder="Search..." class="w-full pl-10 py-2 bg-gray-900 text-white placeholder:text-light-extra/30 text-sm border border-light-extra/30 focus:border-primary rounded-md focus:rounded-md focus:outline-none" @input="handleSearchChange" />
    <div class="absolute position-center-y right-3">
      <button v-if="route.query?.q" @click="clearSearch">
        <Icon name="ph:x" size="16" class="text-light-extra" />
      </button>
      <kbd v-else class="flex-center w-5 aspect-square bg-gray-800 text-light text-xs rounded border border-light-extra/30" @click="focusSearch">/</kbd>
    </div>
  </div>
</template>

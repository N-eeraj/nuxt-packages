<script setup>
const route = useRoute()
const { replace } = useRouter()

const searchInput = ref(null)

const handleSearchChange = (event) => {
  if (event.key === '/') {
    if (searchInput.value !== document.activeElement)
      event.preventDefault()
    searchInput.value.focus()
  }
  replace({
    query: {
      ...route.query,
      q: searchInput.value.value,
    } ,
    ...route
  })
}

onMounted(() => {
  document.addEventListener('keyup', handleSearchChange)
})

onBeforeUnmount(() => {
  document.removeEventListener('keyup', handleSearchChange)
})
</script>

<template>
  <div class="relative col-span-1 sm:col-span-2 xl:col-span-3">
    <input ref="searchInput" placeholder="Search..." class="w-full sm:w-3/5 max-w-66 sm:max-w-56 px-4 py-2 bg-gray-900 text-white placeholder:text-light-extra/30 text-sm border border-light-extra/30 focus:border-primary rounded-md focus:rounded-md focus:outline-none" @input="handleSearchChange" />
  </div>
</template>

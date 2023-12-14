<script setup>
defineProps({
  category: {
    type: String,
    required: true,
  }
})

const route = useRoute()
const { replace } = useRouter()

const filteredCategory = computed(() => route.query.category)

const handleCategorySelect = category => {
  replace({
    query: {
      ...route.query,
      category: category === filteredCategory.value ? null : category,
    } ,
    ...route
  })
}
</script>

<template>
  <li>
    <button class="flex items-center gap-x-1 w-full py-1 pl-3 text-start border-l duration-400" :class="category === filteredCategory ? 'text-primary border-l-primary': 'text-light-extra hover:text-light border-l-light-extra/20 hover:border-l-light'" @click="handleCategorySelect(category)">
      <Icon :name="packageCategoriesIcons[category]" />
      <span>
        {{ category }}
      </span>
    </button>
  </li>
</template>

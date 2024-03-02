<script setup>
const items = ref([])

const setItems = () => items.value = [
  'React',
  'Vue',
  'Svelte',
  'Angular',
  'Next',
  'Nuxt',
  'SvelteKit',
]

const randomize = () => items.value.sort(() => Math.random() > 0.5 ? 1 : -1)
const removeItem = item => items.value = items.value.filter(i => item !== i)

setItems()

const { autoAnimateDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>
    
    <BaseCodeSnippet :code="autoAnimateDemo" file-name="List.vue" class="mb-4" />

    <template v-if="items.length">
      <ul v-auto-animate class="grid md:grid-cols-4 gap-4">
        <li v-for="item in items" class="p-2 bg-background text-primary border border-primary rounded cursor-pointer" :key="item" @click="removeItem(item)">
          {{ item }}
        </li>
      </ul>
    <button class="w-32 mt-4 p-2 bg-primary text-dark rounded cursor-pointer" @click="randomize">
      Randomize
    </button>
    </template>
    <button v-else class="w-32 p-2 bg-primary text-dark rounded cursor-pointer" @click="setItems">
      Reset
    </button>
  </section>
</template>

<script setup>
const enabled = ref(false)

const { headlessUIDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="headlessUIDemo" file-name="Switch.vue" class="mb-4" />

    <HeadlessSwitch v-model="enabled" :class="enabled ? 'bg-gradient-to-r from-[#62D1F5] to-[#6E6CF6]' : 'bg-white/25'" class="relative inline-flex h-7 w-14 items-center rounded-full">
      <span :class="enabled ? 'translate-x-8' : 'translate-x-1'" class="inline-block w-5 aspect-square transform rounded-full bg-white duration-400 ease-in-out" />
    </HeadlessSwitch>

    <p class="text-light mt-4">
      Checkout more Headless UI components at the official site
      <NuxtLink to="https://headlessui.com/" target="_blank" rel="nofollow" class="text-primary">
        https://headlessui.com/
      </NuxtLink>
    </p>
  </section>
</template>

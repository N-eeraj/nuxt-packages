<script setup>
import pageDescription from '/data/descriptions/about.txt?raw'
definePageMeta({
  name: 'About',
  icon: 'ph:info-duotone',
})

useMeta({
  pageTitle: 'Nuxt Packages: About',
  pageDescription,
})
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <h1 class="text-white text-4xl font-semibold">
      About Nuxt Packages
    </h1>

    <section class="flex flex-col gap-y-6">
      <AboutArticle />

      <article class="flex flex-col gap-y-4">
        <h2 class="text-white text-2xl font-medium">
          This project was build using:
        </h2>

        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li v-for="({ name, logo, url, description }) in techStack" class="cols-1" :key="url">
            <AboutTechnology :name="name" :logo="logo" :url="url" :description="description" />
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

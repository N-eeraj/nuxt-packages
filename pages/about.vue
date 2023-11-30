<script setup lang="ts">
definePageMeta({
  name: 'About',
  icon: 'ph:info-duotone',
})
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <h1 class="text-white text-4xl font-semibold">
      About Nuxt Packages
    </h1>

    <section class="flex flex-col gap-y-6">
      <article class="flex flex-col gap-y-3 text-light-extra leading-7">
        <p>
          Welcome to our webpage all about Nuxt.js and its incredible libraries and modules! 🚀
        </p>
        <p>
          Nuxt.js is a powerful framework built on top of Vue.js, designed to make the development of universal
          (server-side rendered) Vue applications effortless. It provides a streamlined setup and a variety of useful
          features that help developers build performant and scalable web applications.
        </p>
        <p>
          This project will help you use some common packages & modules in Nuxt JS. There will be steps for you to follow
          from installation to use it in some simple ways.
        </p>
      </article>

      <article class="flex flex-col gap-y-4">
        <h2 class="text-white text-2xl font-medium">
          This project was build using:
        </h2>
        <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li v-for="({ name, logo, url, description }) in techStack" class="cols-1" :key="url">
            <NuxtLink :to="url" target="_blank" rel="nofollow" class="flex flex-col gap-y-2 h-full p-5 bg-gray-800/70 hover:bg-gray-700/70 rounded-lg border border-transparent hover:border-primary duration-200">
              <img :src="logo" :alt="name" class="w-12 aspect-square object-contain" />
              <strong class="text-white">
                {{ name }}
              </strong>
              <p class="text-light-extra font-light">
                {{ description }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

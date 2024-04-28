<script setup>
const installationCode = `npm i nuxt-icons`
const setUpCode = `modules: ['nuxt-icons']`

const usageSteps = [
  'Create a icons folder in assets: assets/icons',
  'Drop your icons with the .svg extension into the icons folder',
  'In the project, use <NuxtIcon name="" />, where name is the name of your svg icon from the folder',
]

definePageMeta({
  name: 'Nuxt Icons',
  logo: 'nuxt-icons.avif',
  category: 'UI',
  description: 'Use your own automatically imported SVG icons',
})
</script>

<template>
  <PackagesLayout :installation-code :set-up-code>

    <section class="mb-5">
      <NuxtLink to="#usage" class="package-subtitle">
        Usage
      </NuxtLink>
      <ol class="my-4 text-light">
        <li v-for="(step, index) of usageSteps" :key="index" class="flex gap-x-2">
          <span class="text-light-extra">
            {{ index + 1 }}.
          </span>
          {{ step }}
        </li>
      </ol>

      <p class="text-light">
        If you need to use the original color from the svg file (for example, if your icon has defs) you need to use the filled attribute: &lt;nuxt-icon name="mySuperIcon" filled /&gt;
      </p>
    </section>

    <PackagesDemoNuxtIcons />
  </PackagesLayout>
</template>

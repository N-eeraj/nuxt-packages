<script setup>
const { vitePWADemo } = useDemoCode()

const installationCode = `npm i @vite-pwa/nuxt -D`
const setUpCode = `modules: ['@vite-pwa/nuxt']\n${vitePWADemo}`

definePageMeta({
  name: 'Vite PWA',
  logo: 'vite-pwa.svg',
  category: 'Performance',
  description: 'Zero-config PWA Plugin for Nuxt',
})
</script>

<template>
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following lines to the modules section of nuxt.config.{ts,js}
    </template>
    <div class="flex flex-col gap-y-1 mt-6">
      <span class="text-light-extra text-sm">
        Make sure the icons are in the public directory & the src values are correct in the manifest.
      </span>
      <span class="text-white">
        That's it your project is now
        <span class="text-primary">
          installable!
        </span>
      </span>
    </div>
  </PackagesLayout>
</template>

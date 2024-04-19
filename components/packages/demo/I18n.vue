<script setup>
import i18nConfig from '@/i18n.config?raw'
const { locale } = useI18n()
const { i18nDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <div class="flex gap-x-5 flex-wrap mb-4">
      <BaseCodeSnippet :code="i18nConfig" lang="ts" file-name="i18n.config.ts" class="flex-1 w-full md:w-5/12" />
      <BaseCodeSnippet :code="i18nDemo" file-name="Heading.vue" class="flex-1 w-full md:w-5/12" />
    </div>

    <select v-model="locale">
      <option value="en">
        English
      </option>
      <option value="fr">
        French
      </option>
    </select>

    <p class="text-white">
      {{ $t('welcome') }}
    </p>
  </section>
</template>

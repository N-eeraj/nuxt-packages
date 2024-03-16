<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
const dateTime = useDateFormat(useNow(), 'dddd, MMM Do YYYY hh:mm:ss A')

definePageMeta({
  name: 'useDateFormat',
  category: 'Time',
})

const { vueUseDemos } = useDemoCode()
</script>

<template>
  <PackagesDemoVueUseLayout name="useDateFormat">
    <template #description>
      Get the formatted date according to the string of tokens passed in, inspired by
      <NuxtLink to="https://github.com/iamkun/dayjs" target="_blank" rel="nofollow" class="text-primary underline">
        dayjs
      </NuxtLink>.
    </template>

    <BaseCodeSnippet :code="vueUseDemos.time.useDateFormat" file-name="Clipboard.vue" class="w-fit" />

    <span class="text-primary">
      {{ dateTime }}
    </span>
  </PackagesDemoVueUseLayout>
</template>

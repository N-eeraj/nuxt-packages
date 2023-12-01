<script setup>
const showNuxtVideo = ref(false)
</script>

<template>
  <div class="grid justify-items-center gap-6 w-full max-w-fit">
    <NuxtLink to="https://nuxt.com/docs/getting-started/installation" target="_blank" rel="nofollow" class="w-full">
      <BaseButton tabindex="-1" class="flex justify-center gap-x-2.5 w-full bg-primary hover:bg-primary/90 text-background">
        <Icon name="ph:rocket-launch-duotone" size="24" />
        Get Started
      </BaseButton>
    </NuxtLink>

    <BaseButton class="flex justify-center gap-x-2.5 w-full bg-gray-800/50 hover:bg-white/10 text-white border-0.5 border-light/50 hover:border-white transition-400" @click="showNuxtVideo = true">
      <Icon name="ph:video-duotone" size="24" />
      What is Nuxt?
    </BaseButton>

    <NuxtLink to="/packages" class="col-span-2">
      <BaseButton tabindex="-1" class="flex justify-center gap-x-2.5 w-full hover:bg-primary/10 text-primary border-0.5 border-primary/50 hover:border-primary transition-400">
        <Icon name="ph:package-duotone" size="24" />
        Explore Packages
      </BaseButton>
    </NuxtLink>

    <BasePopUp v-model="showNuxtVideo" class="bg-gray-800/75">
      <iframe src="https://www.youtube-nocookie.com/embed/dCxSsr5xuL8?si=zF_bb19X95YCxunh&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="fixed position-center w-11/12 max-w-xl aspect-video p-3 bg-gray-900 rounded-lg" @click.stop />
    </BasePopUp>
  </div>
</template>

<template>
  <div class="grid grid-cols-2 justify-items-center gap-x-6 gap-y-5 w-90% max-w-fit">
    <NuxtLink to="https://nuxt.com/docs/getting-started/installation" target="_blank" class="w-full">
      <BaseButton tabindex="-1" class="flex justify-center gap-x-2 w-full bg-primary hover:bg-primary/90 text-background">
        <Icon name="ph:rocket-launch-duotone" size="24" />
        Get Started
      </BaseButton>
    </NuxtLink>

    <BaseButton class="flex justify-center gap-x-2 w-full hover:bg-white/10 text-white border-0.5 border-light/50 hover:border-white transition-400">
      <Icon name="ph:video-duotone" size="24" />
      What is Nuxt?
    </BaseButton>

    <NuxtLink to="/about">
      <BaseButton tabindex="-1" class="flex justify-center gap-x-2 w-full bg-white hover:bg-white/90 text-background border-0.5 border-white/50 hover:border-white">
        <Icon name="ph:info-duotone" size="24" />
        About this Project
      </BaseButton>
    </NuxtLink>

    <NuxtLink to="/packages">
      <BaseButton tabindex="-1" class="flex justify-center gap-x-2 w-full hover:bg-primary/20 text-primary border-0.5 border-primary/50 hover:border-primary transition-400">
        <Icon name="ph:package-duotone" size="24" />
        Explore Packages
      </BaseButton>
    </NuxtLink>
  </div>
</template>

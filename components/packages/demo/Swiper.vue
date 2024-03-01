<script setup>
const { swiperDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet :code="swiperDemo" file-name="Swiper.vue" class="mb-4" />

    <Swiper
      :modules="[ SwiperAutoplay ]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 2000 }">
      <SwiperSlide
        v-for="index in 5"
        :key="index"
        class="grid place-items-center p-4 bg-primary text-4xl">
        {{ index }}
      </SwiperSlide>
    </Swiper>
  </section>
</template>

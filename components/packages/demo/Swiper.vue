<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet file-name="Swiper.vue" class="mb-4">
      <pre class="overflow-auto">&lt;template&gt;
  &lt;Swipe&gt;
    :modules="[ SwiperAutoplay ]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 2000 }"&gt;
    &lt;SwiperSlid&gt;
      v-for="index in 5"
      :key="index"&gt;
      &#123;&#123; index &#125;&#125;
    &lt;/SwiperSlide&gt;
  &lt;/Swiper&gt;
&lt;/template&gt;</pre>
    </BaseCodeSnippet>

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

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet file-name="Marquee.vue" class="mb-4">
      <pre class="overflow-auto">&lt;template&gt;
  &lt;NuxtMarquee :speed="240" pause-on-hover&gt;
    &lt;div v-for="i of 5" :key="i"&gt;
      &#123;&#123; i &#125;&#125;
    &lt;/div&gt;
  &lt;/NuxtMarquee&gt;
&lt;/template&gt;</pre>
    </BaseCodeSnippet>

    <NuxtMarquee :speed="240" pause-on-hover>
      <div v-for="i of 5" class="grid place-items-center w-25vw h-24 bg-background-grey text-primary text-3xl border border-primary" :key="i">
        {{ i }}
      </div>
    </NuxtMarquee>
  </section>
</template>

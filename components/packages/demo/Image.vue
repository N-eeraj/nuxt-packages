<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet file-name="Image.vue" class="mb-4">
      <pre class="overflow-auto">&lt;template&gt;
  &lt;NuxtImg format="webp" src="/images/nuxt-image-demo.jpg" width="128" quality="50" /&gt;
&lt;/template&gt;</pre>
    </BaseCodeSnippet>

    <NuxtImg format="webp" src="/images/nuxt-image-demo.jpg" width="128" quality="50" />
  </section>
</template>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet file-name="App.vue" class="flex-1 w-full mb-4">
        <pre class="overflow-auto">&lt;template&gt;
  &lt;NuxtIcon name="home" /&gt;
  &lt;NuxtIcon name="tech/html" filled /&gt;
&lt;/template&gt;</pre>
    </BaseCodeSnippet>

    <NuxtIcon name="home" class="inline-block text-white text-3xl" />
    <NuxtIcon name="tech/html" filled class="inline-block text-3xl" />
  </section>
</template>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet file-name="App.vue" class="flex-1 w-full mb-4">
        <pre class="overflow-auto">&lt;template&gt;
  &lt;Icon name="uil:github" color="white" size="36" /&gt;
  &lt;Icon name="🚀" size="36" /&gt;
&lt;/template&gt;</pre>
    </BaseCodeSnippet>

    <p class="text-light">
      You can use any name from the
      <NuxtLink to="https://icones.js.org" target="_blank" rel="nofollow" class="text-primary">
        https://icones.js.org
      </NuxtLink>
      collection
    </p>

    <Icon name="uil:github" color="white" size="36" />
    <Icon name="🚀" size="36" />
  </section>
</template>

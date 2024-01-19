<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <div class="flex gap-x-5 flex-wrap mb-4">
      <BaseCodeSnippet file-name="tailwind.config.ts" class="flex-1 w-full md:w-5/12">
        <pre>import type { Config } from 'tailwindcss'

export default &lt;Partial&lt;Config&gt;&gt;{
  theme: {
    extend: {
      colors: {
        tailwind: {
          primary: '#38bdf9',
          dark: '#0f172a',
        },
      },
    },
  },
}</pre>
      </BaseCodeSnippet>
      <BaseCodeSnippet file-name="Heading.vue" class="flex-1 w-full md:w-5/12">
        <pre class="overflow-auto">&lt;template&gt;
  &lt;h1 class="p-4 bg-tailwind-dark text-tailwind-primary border border-tailwind-primary rounded"&gt;
    A utility-first CSS framework packed with classes.
  &lt;/h1&gt;
&lt;/template&gt;</pre>
      </BaseCodeSnippet>
    </div>

    <h1 class="p-4 bg-tailwind-dark text-tailwind-primary border border-tailwind-primary rounded">
      A utility-first CSS framework packed with classes.
    </h1>
  </section>
</template>

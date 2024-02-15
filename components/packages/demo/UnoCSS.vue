<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <div class="flex gap-x-5 flex-wrap mb-4">
      <BaseCodeSnippet file-name="uno.config.ts" class="flex-1 w-full md:w-5/12">
        <pre>import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      background: {
        DEFAULT: '#020420',
        grey: '#0F172A',
      },
      primary: '#00DC82',
      light: {
        DEFAULT: '#CBD5E1',
        extra: '#CBD5E199',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})</pre>
      </BaseCodeSnippet>

      <BaseCodeSnippet file-name="Heading.vue" class="flex-1 w-full md:w-5/12">
        <pre class="overflow-auto">&lt;template&gt;
  &lt;h1 class="p-4 bg-background-grey text-primary border border-primary rounded"&gt;
    UnoCSS: Instant On-demand Atomic CSS Engine
  &lt;/h1&gt;
&lt;/template&gt;</pre>
      </BaseCodeSnippet>
    </div>

    <h1 class="p-4 bg-background-grey text-primary border border-primary rounded">
      UnoCSS: Instant On-demand Atomic CSS Engine
    </h1>
  </section>
</template>

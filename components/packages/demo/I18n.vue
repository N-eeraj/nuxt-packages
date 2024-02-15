<script setup>
const { locale } = useI18n()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

<div class="flex gap-x-5 flex-wrap mb-4">
  <BaseCodeSnippet file-name="i18n.config.ts" class="flex-1 w-full md:w-5/12">
    <pre>export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome'
    },
    fr: {
      welcome: 'Bienvenue'
    }
  }
}))
</pre>
  </BaseCodeSnippet>

  <BaseCodeSnippet file-name="Heading.vue" class="flex-1 w-full md:w-5/12">
    <pre class="overflow-auto">&lt;script setup&gt;
  const { locale } = useI18n()
&lt;/script&gt;

&lt;template&gt;
  &lt;select v-model="locale"&gt;
    &lt;option value="en"&gt;
      English
    &lt;/option&gt;
    &lt;option value="fr"&gt;
      French
    &lt;/option&gt;
  &lt;/select&gt;

  &lt;p class="text-white"&gt;
    {{ $t('welcome') }}
  &lt;/p&gt;
&lt;/template&gt;</pre>
  </BaseCodeSnippet>
</div>

    <select v-model="locale">
      <option value="en">
        English
      </option>
      <option value="fr">
        French
      </option>
    </select>

    <p class="text-white">
      {{ $t('welcome') }}
    </p>
  </section>
</template>

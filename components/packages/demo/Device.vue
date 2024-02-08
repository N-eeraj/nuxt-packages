<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <BaseCodeSnippet file-name="Device.vue" class="mb-4">
      <pre class="overflow-auto">&lt;template&gt;
  &lt;div"&gt;
    &lt;template v-if="$device.isDesktop"&gt;
      Desktop
    &lt;/template&gt;
    &lt;template v-else-if="$device.isTablet"&gt;
      Tablet
    &lt;/template&gt;
    &lt;template v-else&gt;
      Mobile
    &lt;/template&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>
    </BaseCodeSnippet>

    <div class="text-white">
      <template v-if="$device.isDesktop">
        Desktop
      </template>
      <template v-else-if="$device.isTablet">
        Tablet
      </template>
      <template v-else>
        Mobile
      </template>
    </div>
  </section>
</template>

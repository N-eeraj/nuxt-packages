<script setup>
definePageMeta({
  name: 'Google Fonts',
  logo: 'google-fonts.avif',
  category: 'Fonts',
  description: 'Google Fonts module for Nuxt',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i -D @nuxtjs/google-fonts</pre>
    </template>

    <template #setup-description>
      Add the following lines to nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@nuxtjs/google-fonts'],
googleFonts: {
  families: {
    Montserrat: true,
    Lato: [100, 900],
    'Protest Revolution': {
      wght: [100, 400],
      ital: [100]
    },
  }
},</pre>
    </template>

    <PackagesDemoGoogleFonts />
  </PackagesLayout>
</template>

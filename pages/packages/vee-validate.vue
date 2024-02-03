<script setup>
definePageMeta({
  name: 'vee-validate',
  logo: 'vee-validate.png',
  category: 'Libraries',
  description: 'Painless Vue forms for Nuxt',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre class="overflow-auto">bun i @vee-validate/nuxt</pre>
    </template>

    <template #setup-description>
      Add the following lines to nuxt.config.{ts,js}
    </template>
    <template #setup>
      <pre class="overflow-auto">modules: ['@vee-validate/nuxt']
veeValidate: {
  // disable or enable auto imports
  autoImports: true,
  // Use different names for components
  componentNames: {
    Form: 'VeeForm',
    Field: 'VeeField',
    FieldArray: 'VeeFieldArray',
    ErrorMessage: 'VeeErrorMessage',
  },
},</pre>
    </template>

    <PackagesDemoVeeValidate />
  </PackagesLayout>
</template>

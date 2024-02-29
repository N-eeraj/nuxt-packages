<script setup>
const installationCode = `bun i @vee-validate/nuxt`
const setUpCode = `modules: ['@vee-validate/nuxt']
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
},`

definePageMeta({
  name: 'vee-validate',
  logo: 'vee-validate.png',
  category: 'Libraries',
  description: 'Painless Vue forms for Nuxt',
})
</script>

<template>
  <PackagesLayout :installation-code="installationCode" :set-up-code="setUpCode">
    <template #setup-description>
      Add the following lines to nuxt.config.{ts,js}
    </template>
    <PackagesDemoVeeValidate />
  </PackagesLayout>
</template>

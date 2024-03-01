<script setup>
const isRequired = value => {
  if (!value?.trim())
    return 'This field is required'
  return true
}
const { veeValidateDemo } = useDemoCode()
</script>

<template>
  <section>
    <NuxtLink to="#demo" class="package-subtitle">
      <h2>
        Demo
      </h2>
    </NuxtLink>

    <div class="flex gap-x-5 flex-wrap mb-4">
      <BaseCodeSnippet :code="veeValidateDemo" file-name="Form.vue" class="flex-1 w-full md:w-5/12" />
    </div>

    <VeeForm class="max-w-xs flex flex-col">
      <VeeField name="field" placeholder="Enter value" :rules="isRequired" class="p-1" />
      <VeeErrorMessage name="field" class="text-red-500" />
    </VeeForm>

  <p class="text-light mt-4">
    To learn more visit the
    <NuxtLink to="https://vee-validate.logaretm.com/v4/guide/overview/" target="_blank" rel="nofollow" class="text-primary">
      vee-validate website
    </NuxtLink>
  </p>
  </section>
</template>

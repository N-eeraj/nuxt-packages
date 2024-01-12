<script setup>
definePageMeta({
  name: 'Pinia',
  logo: 'pinia.svg',
  category: 'Extensions',
  description: 'The Vue Store that you will enjoy using',
})
</script>

<template>
  <PackagesLayout>
    <template #installation>
      <pre>
<span class="text-[#FFCB6B]">bun</span> <span class="text-[#C3E88D]">i @pinia/nuxt</span></pre>
    </template>
    <template #usage-description>
      Add the following to nuxt.config.js
    </template>

    <template #usage>
      <pre>
<span class="text-[#89DDFF]">modules:</span> [<span class="text-[#C3E88D]">'@pinia/nuxt'</span>]</pre>
    </template>

    <section>
      
    </section>
  </PackagesLayout>
</template>

<script setup lang="ts">
const { options } = useRouter()
console.log(options.routes)

definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div>
    <h1>
      Nuxt
    </h1>
    <h2>
      The Intuitive Vue Framework
    </h2>
    <p>
      Nuxt is an open source framework that makes web development intuitive and powerful.
      Create performant and production-grade full-stack web apps and websites with confidence.
    </p>
    <div>
      <button>
        Get Started
      </button>
      <button>
        What is Nuxt?
      </button>
      <button>
        Explore Packages
      </button>
    </div>
  </div>
</template>

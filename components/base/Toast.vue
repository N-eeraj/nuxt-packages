<script setup>
import { storeToRefs } from 'pinia'
const toastStore = useToastStore()
const { showToast, textToast } = storeToRefs(toastStore)
const { setToast } = toastStore

const timeLeft = ref(null)
const interval = ref(null)
const timer = () => {
  timeLeft.value -= 1
  if (timeLeft.value > 0) return
  clearInterval(interval.value)
  setToast(false)
}

watch(() => showToast.value, (to) => {
  if (!to) return
  timeLeft.value = 100
  interval.value = setInterval(timer, 20)
})
</script>

<template>
  <Transition>
    <div v-if="showToast" class="fixed right-8 bottom-8 w-xs p-4 bg-background text-white border border-light-extra/25 rounded overflow-hidden">
      <span>
        {{ textToast }}
      </span>
      <div :style="`width: ${timeLeft}%`" class=" absolute bottom-0 left-0 w-full h-1 bg-primary" />
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 400ms;
}

.v-enter-from,
.v-leave-to {
  right: 0;
  transform: translateX(100%);
}
</style>

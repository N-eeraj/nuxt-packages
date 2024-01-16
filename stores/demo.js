import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const counter = ref(0)
  const updateCount = () => counter.value++

  return { counter, updateCount }
})

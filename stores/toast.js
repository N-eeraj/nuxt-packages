import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', () => {
  const showToast = ref(false)
  const textToast = ref(null)

  const setToast = (show, text=null) => {
    showToast.value = show
    textToast.value = text
  }

  return { showToast, textToast, setToast }
})

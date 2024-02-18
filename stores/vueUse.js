import { createGlobalState, useStorage } from '@vueuse/core'

export const useVueUseStore = createGlobalState(() => useStorage('vueuse-local-storage-counter', 0))
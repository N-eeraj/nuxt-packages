<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  persistant: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])

const handleOverlayClick = () => {
  if (!props.persistant)
    emit('update:modelValue', false)
}
</script>

<template>
  <Transition name="pop-up">
    <div v-if="modelValue" class="full-screen" @click="handleOverlayClick">
      <slot />
    </div>
  </Transition>
</template>

<style src="@/styles/animation.css">
</style>

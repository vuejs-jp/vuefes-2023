<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue'
import RoundButton from '~/components/button/RoundButton.vue'

/* eslint-disable-next-line vue/prop-name-casing */
type _SubmitButtonProps = Omit<ButtonHTMLAttributes, 'disabled' | 'onClick'>
type SubmitButtonProps = {
  /**
   * Booleanish ではなく boolean として型定義をしなおす
   */
  disabled?: boolean
} & _SubmitButtonProps
type SubmitButtonEmit = (e: 'on-click') => void
const props = defineProps<SubmitButtonProps>()
const { disabled = false } = toRefs(props)
const emit = defineEmits<SubmitButtonEmit>()
const handleClick = () => {
  emit('on-click')
}
</script>

<template>
  <RoundButton type="submit" :disabled="disabled" @click="handleClick">
    <slot />
  </RoundButton>
</template>

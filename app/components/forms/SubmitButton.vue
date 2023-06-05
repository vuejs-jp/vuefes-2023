<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue'
import RoundButton from '~/components/button/RoundButton.vue'

type _SubmitButtonProps = Omit<ButtonHTMLAttributes, 'disabled' | 'onClick'>
interface SubmitButtonProps extends _SubmitButtonProps {
  /**
   * Booleanish ではなく boolean として型定義をしなおす
   */
  disabled?: boolean
}
interface SubmitButtonEmit {
  (e: 'on-click'): void
}
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

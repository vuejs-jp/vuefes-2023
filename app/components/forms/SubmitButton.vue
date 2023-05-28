<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue'
import RoundButton from '@/components/button/RoundButton.vue'

type _SubmitButtonProps = Omit<ButtonHTMLAttributes, 'disabled' | 'onClick'>
interface SubmitButtonProps extends _SubmitButtonProps {
  titleLabel: string
  /**
   * Booleanish ではなく boolean として型定義をしなおす
   */
  disabled?: boolean
}
interface SubmitButtonEmit {
  (e: 'on-click'): void
}
const props = defineProps<SubmitButtonProps>()
const { titleLabel, disabled = false } = toRefs(props)
const emit = defineEmits<SubmitButtonEmit>()
const handleClick = () => {
  emit('on-click')
}
</script>

<template>
  <RoundButton type="submit" class="form-button" :disabled="disabled" @click="handleClick">{{
    titleLabel
  }}</RoundButton>
</template>

<style lang="ts" scoped>
css({
  '.form-button': {
    margin: '0 auto',
  },
})
</style>

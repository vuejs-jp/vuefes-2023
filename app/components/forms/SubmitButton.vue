<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue'

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
  <button type="submit" class="form-button" :disabled="disabled" @click="handleClick">
    {{ titleLabel }}
  </button>
</template>

<style lang="ts" scoped>
css({
  '.form-button': {
    padding: '32px 148px',
    display: 'grid',
    placeItems: 'center',
    width: '342px',
    margin: '0 auto',
    borderRadius: '50px',
    background: (props) => props.disabled ? '#C9DAEA' : '{color.vue.green}',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    '&:hover': {
      background: (props) => props.disabled ? '#C9DAEA' : 'linear-gradient(0deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.24)), {color.vue.green}',
      boxShadow: (props) => props.disabled ? 'none' : '0px 8px 24px rgba(0, 0, 0, 0.24)',
      transition: (props) => props.disabled ? 'none' : '.2s',
    },
  },
})
</style>

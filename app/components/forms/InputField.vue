<script setup lang="ts">
import { InputHTMLAttributes } from 'vue'

type _InputFieldProps = Omit<InputHTMLAttributes, 'onInput' | 'onBlur'>
type InputFieldProps = {
  titleLabel: string
  error: string
  value?: string
  /**
   * FIXME 削除したい (削除できなさそう)
   */
  placeholder?: string
  disabled?: boolean
} & _InputFieldProps
type InputFieldEmit = {
  (e: 'input', value: string): void
  (e: 'blur', value: string): void
}
const props = defineProps<InputFieldProps>()
const {
  id,
  name,
  placeholder = '',
  type,
  required = false,
  disabled = false,
  titleLabel,
  error = '',
  value,
} = toRefs(props)
const emit = defineEmits<InputFieldEmit>()
function handleInput(e: Event) {
  if (!(e.target instanceof HTMLInputElement)) {
    return
  }
  emit('input', e.target.value)
}
function handleFocusOut(e: Event) {
  if (!(e.target instanceof HTMLInputElement)) {
    return
  }
  emit('blur', e.target.value)
}
</script>

<template>
  <label :for="id" class="input-root">
    {{ titleLabel }}
    <input
      :id="id"
      :name="name"
      :type="type"
      class="form-input"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      :disabled="disabled"
      @input="handleInput"
      @blur="handleFocusOut"
    />
    <p v-if="error" class="error">{{ error }}</p>
  </label>
</template>

<style lang="ts" scoped>
css({
  '.input-root': {
    fontWeight: 'bold',
    color: '{color.vue.blue}',
  },
  '.form-input': {
    padding: '14px 16px',
    marginTop: '10px',
    width: '100%',
    height: '48px',
    color: '{color.vue.blue}',
    background: '#F2F7FF',
    borderRadius: '8px',
    '&::placeholder': {
      fontWeight: 500,
    },
    '&:disabled': {
      pointerEvents: 'none',
      background: '#E2E2E2',
    },
  },
  '.error': {
    marginTop: '10px',
    fontSize: '14px',
    color: '#F17C67',
  },
})
</style>

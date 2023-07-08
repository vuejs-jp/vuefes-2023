<script setup lang="ts">
import { TextareaHTMLAttributes } from 'vue'

type _TextareaFieldProps = Omit<TextareaHTMLAttributes, 'onInput' | 'onBlur'>
interface TextareaFieldProps extends /* @vue-ignore */ _TextareaFieldProps {
  titleLabel: string
  error: string
  /**
   * FIXME 削除したい (削除できなさそう)
   */
  placeholder?: string
}
interface TextareaFieldEmit {
  (e: 'input', value: string): void
  (e: 'blur', value: string): void
}
const props = defineProps<TextareaFieldProps>()
const { id, name, placeholder = '', rows, required = false, titleLabel, error = '' } = toRefs(props)
const emit = defineEmits<TextareaFieldEmit>()
const handleInput = (e: Event) => {
  if (!(e.target instanceof HTMLTextAreaElement)) {
    return
  }
  emit('input', e.target.value)
}
const handleFocusOut = (e: Event) => {
  if (!(e.target instanceof HTMLTextAreaElement)) {
    return
  }
  emit('blur', e.target.value)
}
</script>

<template>
  <label :for="id" class="textarea-root">
    {{ titleLabel }}
    <textarea
      :id="id"
      :name="name"
      class="form-textarea"
      :rows="rows"
      :placeholder="placeholder"
      :required="required"
      @input="handleInput"
      @blur="handleFocusOut"
    />
    <p v-if="error" class="error">{{ error }}</p>
  </label>
</template>

<style lang="ts" scoped>
css({
  '.textarea-root': {
    fontWeight: 'bold',
    color: '{color.vue.blue}',
  },
  '.form-textarea': {
    padding: '14px 16px',
    marginTop: '10px',
    width: '100%',
    height: '128px',
    color: '{color.vue.blue}',
    background: '#F2F7FF',
    borderRadius: '8px',
    '&::placeholder': {
      fontWeight: 500,
    },
  },
  '.error': {
    marginTop: '10px',
    fontSize: '14px',
    color: '#F17C67',
  },
})
</style>

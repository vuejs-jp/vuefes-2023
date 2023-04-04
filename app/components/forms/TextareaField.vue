<script setup lang="ts">
interface TextareaFieldEmit {
  (e: 'input', value: string): void
  (e: 'blur', value: string): void
}
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  idLabel: {
    type: String,
    required: true,
  },
  titleLabel: {
    type: String,
    required: true,
  },
  rows: {
    type: Number,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
})
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
  <label :for="idLabel" class="textarea-root">
    {{ titleLabel }}
    <textarea
      :id="idLabel"
      :name="name"
      class="form-textarea"
      :rows="rows"
      :placeholder="placeholder"
      :required="required"
      @input="handleInput"
      @blur="handleFocusOut"
    />
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
    border: '1px solid {color.vue.blue}',
    borderRadius: '8px',
  },
})
</style>

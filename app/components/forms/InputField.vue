<script setup lang="ts">
interface InputFieldEmit {
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
  type: {
    type: String,
    default: 'text',
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
  <label :for="idLabel" class="input-root">
    {{ titleLabel }}
    <input
      :id="idLabel"
      :name="name"
      :type="type"
      class="form-input"
      :placeholder="placeholder"
      :required="required"
      @input="handleInput"
      @blur="handleFocusOut"
    />
  </label>
</template>

<style lang="ts" scoped>
css({
  '.input-root': {
    //
  },
  '.form-input': {
    //
  },
})
</style>

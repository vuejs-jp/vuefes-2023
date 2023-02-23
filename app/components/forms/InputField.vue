<script setup lang="ts">
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
</script>

<template>
  <label :for="idLabel" class="root">
    {{ titleLabel }}
    <input
      :id="idLabel"
      :name="name"
      :type="type"
      class="form-input"
      :placeholder="placeholder"
      :required="required"
    />
  </label>
</template>

<style lang="ts" scoped>
css({
  '.root': {
    //
  },
  '.form-input': {
    //
  },
})
</style>

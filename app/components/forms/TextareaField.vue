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
</script>

<template>
  <label :for="idLabel" class="root">
    {{ titleLabel }}
    <textarea
      :id="idLabel"
      :name="name"
      class="form-textarea"
      :rows="rows"
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
  '.form-textarea': {
    //
  },
})
</style>

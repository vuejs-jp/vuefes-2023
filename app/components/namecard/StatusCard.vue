<script setup lang="ts">
const props = defineProps({
  hasError: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="root">
    <div class="root-body">
      <p class="title">{{ title }}</p>
      <p class="detail">{{ detail }}</p>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.root': {
    padding: '0 calc({space.8} * 3)'
  },
  '.root-body': {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc({space.8} * 1)',
    padding: 'calc({space.8} * 3)',
    maxWidth: '760px',
    background: '{color.white}',
    color: (props) => !props.hasError  ? '{color.vue.green}' : '{color.sangosyo}',
    border: (props) => !props.hasError  ? '4px solid {color.vue.green}' : '4px solid {color.sangosyo}',
    borderRadius: '8px',
  },
  '.title': {
    fontSize: 'calc(24*{fontSize.base})',
    fontWeight: 900,
  },
  '.detail': {
    fontSize: 'calc(14*{fontSize.base})',
    fontWeight: 400,
    whiteSpace: 'pre-wrap',
  },
  '@mobile': {
    '.root-body': {
      width: '100%',
    },
  },
})
</style>

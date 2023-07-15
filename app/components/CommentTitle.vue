<script setup lang="ts">
import { Color } from '~/types/app'

const props = defineProps({
  color: {
    type: String as PropType<Color>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p class="comment">
    <span class="comment-main">{{ title }}</span>
  </p>
</template>

<style lang="ts" scoped>
css({
  '.comment': {
    textAlign: 'center',
  },
  '.comment-main': {
    color: (props) => `{color.${props.color}}`,
    fontSize: 'calc(16*{fontSize.base})',
    fontWeight: 700,
    '&::before,&::after': {
      position: 'relative',
      content: '""',
      display: 'inline-block',
      verticalAlign: 'middle',
      width: '2px',
      height: '2em',
      margin: '0 1em',
      background: (props) => `{color.${props.color}}`,
    },
    '&::before': {
      transform: 'rotate(-35deg)',
    },
    '&::after': {
      transform: 'rotate(35deg)',
    },
  },
})
</style>

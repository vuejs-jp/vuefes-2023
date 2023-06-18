<script setup lang="ts">
import { Color } from '../types/app'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  color: {
    type: String as PropType<Color>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  yamatoTitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h2 :id="id" class="title">
    <span class="title-main">{{ title }}</span>
    <br />
    <span class="title-sub">{{ yamatoTitle }}</span>
  </h2>
</template>

<style lang="ts" scoped>
css({
  '.title': {
    textAlign: 'center',
    lineHeight: '1',
  },
  '.title-main': {
    color: (props) => `{color.${props.color}}`,
    fontSize: '40px',
    fontWeight: 'bold',
    lineHeight: '1',
  },
  '.title-sub': {
    textAlign: 'center',
    color: (props) => `{color.${props.color}}`,
    fontSize: '20px',
    fontWeight: 'normal',
    lineHeight: '1',
    marginTop: '18px',
    display: 'grid',
    gridTemplateColumns: '96px max-content 96px',
    justifyContent: 'center',
    placeItems: 'center',
    columnGap: '16px',
    '&::before, &::after': {
      content: '""',
      display: 'inline-block',
      background: (props) => `{color.${props.color}}`,
      width: '96px',
      height: '1px',
    },
  },
  '@media(min-width: 768px)': {
    '.title-main': {
      fontSize: 'calc(40*{fontSize.base})',
    },
    '.title-sub': {
      fontSize: 'calc(20*{fontSize.base})',
    },
  },
})
</style>

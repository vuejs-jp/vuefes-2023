<script setup lang="ts">
import ArrowDownLogo from '~/assets/logo/arrow_down_logo.svg'
import { Color } from '~/types/app'

const props = defineProps({
  color: {
    type: String as PropType<Color>,
    required: true,
  },
})
</script>

<template>
  <div class="process-root">
    <slot name="icon" />
    <slot />
    <component :is="ArrowDownLogo" class="arrow-down" />
  </div>
</template>

<style lang="ts" scoped>
css({
  '.process-root': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 1)',
    width: '360px',
    padding: 'calc({space.8} * 3) 0',
    border: (props) => `calc({space.8} * 0.5) solid {color.${props.color}}`,
    borderRadius: 'calc({space.8} * 2)',
    '::v-deep(h3)': {
      color: (props) => `{color.${props.color}}`,
      fontSize: 'calc(24*{fontSize.base})',
      fontWeight: 700,
    },
    '::v-deep(p)': {
      color: (props) => `{color.${props.color}}`,
      fontSize: 'calc(16*{fontSize.base})',
      fontWeight: 800,
    },
  },
  '.arrow-down': {
    width: '24px',
    height: '24px',
    fill: (props) => `{color.${props.color}}`,
  },
})
</style>

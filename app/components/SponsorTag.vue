<script setup lang="ts">
import { SponsorCategory, OptionCategory } from '~/types/app'
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String as PropType<SponsorCategory | OptionCategory>,
    default: 'options',
  },
})
</script>

<template>
  <span class="tag-root"> {{ props.label }} </span>
</template>

<style lang="ts" scoped>
css({
  '.tag-root': {
    display: 'inline-block',
    padding: 'calc({space.8} * 1) calc({space.8} * 2)',
    fontFamily: 'DIN',
    fontSize: 'calc(18*{fontSize.base})',
    fontWeight: '700',
    borderRadius: '24px',
    backgroundColor: (props) => `{color.sponsor.${props.color}}`,
    color: '{color.white}',
    lineHeight: '1',
    whiteSpace: 'nowrap',
  },
})
</style>

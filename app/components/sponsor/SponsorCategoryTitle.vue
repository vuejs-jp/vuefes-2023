<script setup lang="ts">
import { PropType } from 'vue'
import { SponsorCategory, OptionCategory } from '~/types/app'
import { useSponsor } from '~/composables/useSponsor'

const props = defineProps({
  category: {
    type: String as PropType<SponsorCategory | OptionCategory>,
    required: true,
  },
})
const { getCategoryType } = useSponsor()
</script>

<template>
  <h3 class="sponsor-category-title">
    {{ category.replaceAll('-', ' ') }}
  </h3>
</template>

<style lang="ts" scoped>
css({
  '.sponsor-category-title': {
    width: '100%',
    height: '60px',
    display: 'inline-flex',
    alignItems: 'flex-end',
    color: (props) => `{color.${getCategoryType(props.category)}}`,
    borderBottom: (props) => `5px solid {color.${getCategoryType(props.category)}}`,
    fontSize: 'calc(24*{fontSize.base})',
    fontWeight: 800,
    lineHeight: 1,
    textTransform: 'capitalize',
  },
})
</style>

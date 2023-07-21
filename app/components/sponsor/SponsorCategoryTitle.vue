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

const { existBasic } = useSponsor()
</script>

<template>
  <h3 class="sponsor-category-title">
    {{ props.category.replaceAll('-', ' ') }}
  </h3>
</template>

<style lang="ts" scoped>
css({
  '.sponsor-category-title': {
    width: '100%',
    height: '60px',
    display: 'inline-flex',
    alignItems: 'flex-end',
    color: (props) => `{color.sponsor.${existBasic(props.category) ? props.category : 'options'}}`,
    borderBottom: (props) => `5px solid {color.sponsor.${existBasic(props.category) ? props.category : 'options'}}`,
    fontSize: 'calc(24*{fontSize.base})',
    fontWeight: 800,
    lineHeight: 1,
    textTransform: 'capitalize'
  },
})
</style>

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
    {{ category.replaceAll('-', ' ') }}
  </h3>
</template>

<style lang="ts" scoped>
css({
  '.sponsor-category-title': {
    width: '100%',
    color: (props) => `{color.${existBasic(props.category) ? `sponsor.${props.category}` : 'vue.blue'}}`,
    borderBottom: (props) => `5px solid {color.${existBasic(props.category) ? `sponsor.${props.category}` : 'vue.blue'}}`,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
})
</style>

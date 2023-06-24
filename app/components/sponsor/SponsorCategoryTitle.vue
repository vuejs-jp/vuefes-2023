<script setup lang="ts">
import { PropType } from 'vue'
import { SponsorCategory } from '~/types/app'

const props = defineProps({
  category: {
    type: String as PropType<SponsorCategory>,
    required: true,
  },
})
</script>

<template>
  <h3 class="sponsor-category-title">
    {{ category }}
  </h3>
</template>

<style lang="ts" scoped>
css({
  '.sponsor-category-title': {
    width: '100%',
    color: (props) => `{color.sponsor.${props.category}}`,
    borderBottom: (props) => `5px solid {color.sponsor.${props.category}}`,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
})
</style>

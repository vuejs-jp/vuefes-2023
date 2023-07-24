<script setup lang="ts">
import { PropType } from 'vue'
import { Sponsor } from '~/types/app'
import { urlBasePath } from '~/utils/constants'

const props = defineProps({
  sponsor: {
    type: Object as PropType<Sponsor>,
    required: true,
  },
  useOptional: {
    type: Boolean,
    default: false,
  },
  useColumnLayout: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div :class="`sponsor-card ${useOptional ? 'options' : sponsor.category}`">
    <img
      width="100"
      height="100"
      class="sponsor-image"
      decoding="async"
      :src="`${urlBasePath}${sponsor.image}`"
      :alt="`${sponsor.name}のロゴ`"
    />
  </div>
</template>

<style lang="ts" scoped>
css({
  '.sponsor-image': {
    width: '60%',
    maxHeight: '80%',
    objectFit: 'contain',
  },
  '.sponsor-card': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    backgroundColor: '{color.white}',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    '&:hover': {
      boxShadow: '0px 4px 4px rgba(238, 238, 238, 0.05)',
      transition: '.2s',
    },
    '&.platinum': {
      width: '475px',
      height: '267px',
    },
    '&.gold': {
      width: '306px',
      height: '172px',
    },
    '&.silver': {
      width: '170px',
      height: '94px',
    },
    '&.bronze': {
      width: '140px',
      height: '77px',
    },
    '&.options': {
      width: '140px',
      height: '77px',
    }
  },
  '@tablet': {
    '.sponsor-card': {
      '&.platinum': {
        width: '368px',
        height: '207px',
      },
      '&.gold': {
        maxWidth: '368px',
        width: '100%',
        height: 'auto',
        aspectRatio: '368 / 207',
      },
      '&.silver': {
        // width: '243px',
        // height: '137px',
        maxWidth: '243px',
        width: '100%',
        height: 'auto',
        aspectRatio: '234 / 137',
      },
      '&.bronze': {
        width: '176px',
        height: '99px',
      },
      '&.options': {
        width: '176px',
        height: '99px',
      }
    },
  },
  '@mobile': {
    '.sponsor-card': {
      '&.platinum': {
        maxWidth: '690px',
        width: '100%',
        height: 'auto',
        aspectRatio: '690 / 388',
      },
      '&.gold, &.silver': {
        maxWidth: '326px',
        width: '100%',
        height: 'auto',
        aspectRatio: '326 / 183',
      },
      '&.bronze': {
        maxWidth: '216px',
        width: '100%',
        height: 'auto',
        aspectRatio: '216 / 121',
      },
      '&.options': {
        width: '140px',
        height: 'auto',
        aspectRatio: '216 / 121',
      },
    },
  }
})
</style>

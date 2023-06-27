<script setup lang="ts">
import { PropType } from 'vue'
import { Sponsor } from '~/types/app'

const props = defineProps({
  sponsor: {
    type: Object as PropType<Sponsor>,
    required: true,
  },
})
</script>

<template>
  <div :class="`sponsor-card ${sponsor.category}`">
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
  '.sponsor-card': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '{color.white}',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    '&.platinum': {
      maxWidth: '475px',
      width: 'calc(50% - 19px)',
      height: '267px',
      '> .sponsor-image': {
        maxWidth: '288px',
      },
    },
    '&.gold': {
      maxWidth: '306px',
      width: 'calc(33% - 17.5px)',
      height: '172px',
      '> .sponsor-image': {
        maxWidth: '183px',
      },
    },
    '&.silver': {
      maxWidth: '170px',
      width: 'calc(20% - 17px)',
      height: '94px',
      '> .sponsor-image': {
        maxWidth: '102px',
      },
    },
    '&.bronze': {
      maxWidth: '140px',
      width: 'calc(16% - 16px)',
      height: '77px',
      '> .sponsor-image': {
        maxWidth: '84px',
      },
    }
  },
  '.sponsor-image': {
    maxWidth: '288px',
    width: '100%',
    margin: 'auto',
    objectFit: 'cover',
  },
  '@tablet': {
    '.sponsor-card': {
      '&.platinum': {
        maxWidth: '368px',
        width: 'calc(50% - 12px)',
        height: '207px',
        '> .sponsor-image': {
          maxWidth: '220px',
        },
      },
      '&.gold': {
        maxWidth: '368px',
        width: 'calc(50% - 12px)',
        height: '207px',
        '> .sponsor-image': {
          maxWidth: '220px',
        },
      },
      '&.silver': {
        maxWidth: '243px',
        width: 'calc(33% - 8px)',
        height: '137px',
        '> .sponsor-image': {
          maxWidth: '145px',
        },
      },
      '&.bronze': {
        maxWidth: '176px',
        width: 'calc(25% - 16px)',
        height: '99px',
        '> .sponsor-image': {
          maxWidth: '105px',
        },
      }
    },
  },
  '@media(max-width: 770px)': {
    '.sponsor-card': {
      '&.platinum': {
        maxWidth: '100%',
        width: '100%',
        height: 'auto',
        '> .sponsor-image': {
          margin: '10% 20%',
          maxWidth: '414px',
          width: '80%'
        },
      },
      '&.gold': {
        maxWidth: '326px',
        width: 'calc(50% - 19px)',
        height: 'auto',
        '> .sponsor-image': {
          margin: '10% 20%',
          maxWidth: '195px',
          width: 'calc(100% - 19px)',
        },
      },
      '&.silver': {
        maxWidth: '326px',
        width: 'calc(50% - 19px)',
        height: 'auto',
        '> .sponsor-image': {
          margin: '10% 20%',
          maxWidth: '195px',
          width: 'calc(100% - 19px)',
        },
      },
      '&.bronze': {
        maxWidth: '216px',
        width: 'calc(33% - 16px)',
        height: 'auto',
        '> .sponsor-image': {
          margin: '10% 20%',
          maxWidth: '129px',
          width: 'calc(100% - 16px)',
        },
      }
    },
  }
})
</style>

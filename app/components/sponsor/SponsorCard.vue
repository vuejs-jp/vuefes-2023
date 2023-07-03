<script setup lang="ts">
import { PropType } from 'vue'
import { Sponsor } from '~/types/app'

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
      maxWidth: '475px',
      width: 'calc(50% - 19px)',
      height: '267px',
      '> .sponsor-image': {
        margin: '5% 10%',
        maxWidth: '288px',
      },
    },
    '&.gold': {
      maxWidth: '306px',
      width: 'calc(33% - 17.5px)',
      height: '172px',
      '> .sponsor-image': {
        margin: '5% 10%',
        maxWidth: '183px',
      },
    },
    '&.silver': {
      maxWidth: '170px',
      width: 'calc(20% - 17px)',
      height: '94px',
      '> .sponsor-image': {
        margin: '5% 10%',
        maxWidth: '102px',
      },
    },
    '&.bronze': {
      maxWidth: '140px',
      width: 'calc(16% - 16px)',
      height: '77px',
      '> .sponsor-image': {
        margin: '5% 10%',
        maxWidth: '84px',
      },
    },
    '&.options': {
      maxWidth: '140px',
      width: 'calc(32% - 16px)',
      height: '77px',
      '> .sponsor-image': {
        margin: '5% 10%',
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
          margin: '10% 20%',
          maxWidth: '220px',
        },
      },
      '&.gold': {
        maxWidth: '368px',
        width: 'calc(50% - 12px)',
        height: '207px',
        '> .sponsor-image': {
          margin: '10% 20%',
          maxWidth: '220px',
        },
      },
      '&.silver': {
        maxWidth: '243px',
        width: 'calc(33% - 8px)',
        height: '137px',
        '> .sponsor-image': {
          margin: '10% 20%',
          maxWidth: '145px',
        },
      },
      '&.bronze': {
        maxWidth: '176px',
        width: 'calc(25% - 16px)',
        height: '99px',
        '> .sponsor-image': {
          margin: '10% 20%',
          maxWidth: '105px',
        },
      },
      '&.options': {
        maxWidth: '176px',
        width: 'calc(25% - 16px)',
        height: '99px',
        '> .sponsor-image': {
          margin: '10% 20%',
          maxWidth: '105px',
        },
      }
    },
  },
  '@mobile': {
    '.sponsor-card': {
      '&.platinum': {
        maxWidth: '100%',
        width: '100%',
        height: '388px',
        '> .sponsor-image': {
          maxWidth: '414px',
          width: '80%'
        },
      },
      '&.gold': {
        maxWidth: '326px',
        width: 'calc(50% - 19px)',
        height: '143px',
        '> .sponsor-image': {
          maxWidth: '195px',
          width: 'calc(100% - 19px)',
        },
      },
      '&.silver': {
        maxWidth: '326px',
        width: 'calc(50% - 19px)',
        height: '143px',
        '> .sponsor-image': {
          maxWidth: '195px',
          width: 'calc(100% - 19px)',
        },
      },
      '&.bronze': {
        maxWidth: '216px',
        width: 'calc(33% - 16px)',
        height: '92px',
        '> .sponsor-image': {
          maxWidth: '129px',
          width: 'calc(100% - 16px)',
        },
      },
      '&.options': {
        maxWidth: '216px',
        width: (props) => props.useColumnLayout ? 'calc(66% - 16px)' : 'calc(33% - 16px)',
        height: '92px',
        '> .sponsor-image': {
          maxWidth: '89px',
          width: 'calc(100% - 16px)',
        },
      }
    },
  }
})
</style>

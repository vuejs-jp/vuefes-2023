<script setup lang="ts">
import { useHover } from '~/composables/useHover'
import TwitterLogo from '~/assets/logo/twitter_logo.svg'

const hoverRef = ref(null)
const isHovered = useHover(hoverRef)
</script>

<template>
  <a
    ref="hoverRef"
    href="https://twitter.com/vuefes"
    target="_blank"
    rel="noreferrer"
    class="twitter-root"
  >
    <span class="title">最新情報はTwitterでCheck!</span>
    <span class="explain">
      <TwitterLogo :style="isHovered ? { fill: '#42B983' } : {}" />
      <span :style="isHovered ? { color: '#42B983' } : {}">Twitter ー @vuefes #vuefes</span>
    </span>
  </a>
</template>

<style lang="ts" scoped>
css({
  '.twitter-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 72px',
      background: 'rgba(35, 52, 69, 0.8)',
      borderRadius: '70px',
    '&:hover': {
      transition: '.2s',
    },
    '.title': {
      whiteSpace: 'nowrap',
      fontSize: 'calc(20*{fontSize.base})',
      fontWeight: 700,
      color: '{color.white}',
    },
    '.explain': {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      whiteSpace: 'nowrap',
      fontSize: 'calc(24*{fontSize.base})',
      fontWeight: 700,
      'svg': {
        fill: '{color.white}',
      },
      'span': {
        color: '{color.white}',
      },
    },
  },
  '@tablet': {
    '.twitter-root': {
      display: 'grid',
      placeItems: 'center',
      gridTemplateColumns: '100%',
      gap: '8px',
      padding: '12px 36px',
    },
  },
  '@mobile': {
    '.twitter-root': {
      '&:hover': {
        transition: 'none',
      },
    },
  },
})
</style>

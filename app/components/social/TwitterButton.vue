<script setup lang="ts">
import TwitterLogo from '~/assets/logo/twitter_logo.svg'
</script>

<template>
  <a href="https://twitter.com/vuefes" target="_blank" rel="noreferrer" class="twitter-root">
    <span class="title">最新情報はTwitterでCheck!</span>
    <span class="explain">
      <TwitterLogo />
      <span>Twitter ー @vuefes #vuefes</span>
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
      background: 'rgba(35, 52, 69, 0.4)',
    },
    '.title': {
      whiteSpace: 'nowrap',
      fontWeight: 700,
      color: '#fff',
    },
    '.explain': {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      whiteSpace: 'nowrap',
      fontWeight: 700,
      'span': {
        color: '#fff',
      },
    },
  },
  '@media(min-width: 768px)': {
    '.title': {
      fontSize: '20px',
    },
    '.explain': {
      fontSize: '24px',
    },
  },
  '@media(max-width: 1023px)': {
    '.twitter-root': {
      display: 'grid',
      placeItems: 'center',
      gridTemplateColumns: '100%',
      gap: '8px',
      padding: '12px 36px',
      borderRadius: '70px',
    },
  },
})
</style>

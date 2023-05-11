<template>
  <div class="voice">
    <div class="voice-image" />
  </div>
</template>

<style lang="ts" scoped>
css({
  '.voice': {
    height: '179px',
  },
  '.voice-image': {
    background: 'url(/assets/voice/line.svg) repeat-x 50% 0',
    width: '100%',
    height: '179px',
    backgroundSize: 'auto 100%',
    margin: '-90px 0',
    position: 'relative',
    zIndex: 2,
    // animation: 'beats 0.5s ease-out infinite',
  },
  '@keyframes beats': {
    // '0%': {
    //   transform: 'scaleY(1)',
    // },
    // '25%': {
    //   transform: 'scaleY(0.6)',
    // },
    // '50%': {
    //   transform: 'scaleY(1)',
    // },
    // '75%': {
    //   transform: 'scaleY(0.3)',
    // },
    // '100%': {
    //   transform: 'scaleY(1)',
    // },

    // '0%': {
    //   transform: 'scaleY(1)',
    // },
    // '50%': {
    //   transform: 'scaleY(0.5)',
    // },
    // '100%': {
    //   transform: 'scaleY(1)',
    // },

    // '0%': {
    //   transform: 'scaleY(1)',
    // },
    // '5%': {
    //   transform: 'scaleY(0.5)',
    // },
    // '10%': {
    //   transform: 'scaleY(1)',
    // },
    // '80%': {
    //   transform: 'scaleY(1)',
    // },
    // '90%': {
    //   transform: 'scaleY(1)',
    // },
    // '95%': {
    //   transform: 'scaleY(0.8)',
    // },
    // '100%': {
    //   transform: 'scaleY(1)',
    // },
  },
})
</style>

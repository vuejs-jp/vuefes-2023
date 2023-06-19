<template>
  <div class="voice-frame">
    <VoiceFrameRight class="top" />
    <div class="body">
      <slot />
    </div>
    <VoiceFrameLeft class="bottom" />
  </div>
</template>

<style lang="ts">
css({
  '.voice-frame': {
    position: 'relative',
    overflow: 'hidden',
  },
  '.body': {
    position: 'relative',
    zIndex: 1,
  },
  '.top': {
    position: 'absolute',
    top: '72px',
    right: 0,
    zIndex: 0,
    transform: 'scale(1)',
    transformOrigin: 'top right',

    '@tablet': {
      transform: 'scale(0.75)',
    },

    '@mobile': {
      transform: 'scale(0.5)',
    },
  },
  '.bottom': {
    position: 'absolute',
    bottom: '352px',
    left: 0,
    zIndex: 0,
    transform: 'scale(1)',
    transformOrigin: 'bottom left',

    '@tablet': {
      transform: 'scale(0.75)',
    },

    '@mobile': {
      transform: 'scale(0.5)',
    },
  },
})
</style>

<script setup lang="ts">
import VoiceL from '~/assets/voice/frame-l-right.svg'
import VoiceS from '~/assets/voice/frame-s.svg'
</script>

<template>
  <div aria-hidden="true">
    <VoiceL class="frame-l" />
    <VoiceS class="frame-s" />
  </div>
</template>

<style lang="ts" scoped>
css({
  '.frame-l': {
    // animation: 'beats 0.5s ease-out infinite',
  },
  '.frame-s': {
    marginTop: '52px',
    marginLeft: 'auto',
    marginRight: '7.7%',
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
  },
})
</style>

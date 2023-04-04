<script setup lang="ts">
import VoiceL from '~/assets/voice/frame-left-l.svg'
import VoiceS from '~/assets/voice/frame-left-s.svg'
</script>

<template>
  <div class="frame" aria-hidden="true">
    <VoiceL class="frame-l" />
    <VoiceS class="frame-s" />
  </div>
</template>

<style lang="ts" scoped>
css({
  '.frame': {
    width: '542px',
  },
  '.frame-s': {
    marginTop: '26px',
    marginLeft: '63.5%',
  },
})
</style>

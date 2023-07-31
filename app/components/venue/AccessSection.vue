<script lang="ts" setup>
import RoundButton from '~/components/button/RoundButton.vue'
</script>

<template>
  <section>
    <div class="access-root">
      <SectionTitle
        id="access"
        color="vue.blue"
        title="Access"
        :yamato-title="$t('top.access_subtitle')"
      />
      <div class="access-content">
        <!-- TODO -->
      </div>
      <RoundButton href="https://goo.gl/maps/TBWRVrd3dthoe98s5" target="_blank">
        Google マップで見る
      </RoundButton>
    </div>
  </section>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: '120px 0',
    background: '{color.gradient.lightblue}',
    display: 'grid',
    gridTemplateColumns: '1fr min(1280px, calc(100% - 40px)) 1fr',
  },
  '.access-root': {
    gridColumn: '2',
    color: '{color.vue.blue}',
    background: '{color.white}',
    padding: 'calc({space.8} * 10) 11.53%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'calc({space.8} * 5)',
  },
  '.access-content': {
    display: 'flex',
    gap: 'calc({space.8} * 3)',
  },
})
</style>

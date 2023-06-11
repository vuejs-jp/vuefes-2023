<script lang="ts" setup>
import SectionTitle from '~/components/SectionTitle.vue'

import SpeakerCFP from './speaker/SpeakerCFP.vue'
import SpeakerCard from './speaker/SpeakerCard.vue'
import { speakers } from '~/utils/speakers.constants'
</script>

<template>
  <section class="speaker-root">
    <SectionTitle id="speakers" color="vue.blue" title="Speakers" yamato-title="スピーカー" />
    <SpeakerCFP />

    <div class="speaker-session">
      <h3>Session</h3>

      <div class="speakers">
        <SpeakerCard v-for="speaker in speakers" :key="speaker.id" :speaker="speaker" />
      </div>
    </div>
  </section>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
    'section': {
        padding: '120px 20px',
    },
    '.speaker-root': {
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5em',
        maxWidth: '1080px',
        margin: '0 auto',
    },
    '.speaker-session': {
        color: '{color.vue.blue}',
        maxWidth: '1080px',
        margin: '0 auto',
        'h3': {
            fontWeight: 700,
            fontSize: '32px',
        },
    },
    '.speakers': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2em',
        margin: '0 auto',
    },
    '@tablet': {
        'section': {
            padding: '120px 40px',
        },
    },
})
</style>

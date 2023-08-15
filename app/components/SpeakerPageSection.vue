<script lang="ts" setup>
import SectionTitle from '~/components/SectionTitle.vue'

import SpeakerCFP from './speaker/SpeakerCFP.vue'
import SpeakerCard from './speaker/SpeakerCard.vue'
import SponsorSpeakerCard from './speaker/SponsorSpeakerCard.vue'
import { ltSpeakers, sessionSpeakers } from '~/utils/speakers.constants'
import { sponsorSpeakers } from '~/utils/sponsor-speakers.constants'
</script>

<template>
  <section class="speaker-root">
    <SectionTitle
      id="speakers"
      color="vue.blue"
      title="Speakers"
      :yamato-title="$t('top.speakers_subtitle')"
    />
    <SpeakerCFP class="cfp" />

    <div class="speaker-session">
      <h3>Session</h3>

      <div class="speakers">
        <SpeakerCard v-for="speaker in sessionSpeakers" :key="speaker.id" :speaker="speaker" />
      </div>

      <h3>Lightning Talk</h3>

      <div class="speakers">
        <SpeakerCard v-for="speaker in ltSpeakers" :key="speaker.id" :speaker="speaker" />
      </div>

      <h3>Sponsor Session</h3>

      <div class="speakers">
        <SponsorSpeakerCard
          v-for="speaker in sponsorSpeakers"
          :key="speaker.id"
          :speaker="speaker"
        />
      </div>
    </div>
  </section>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: 'calc({space.8} * 15) calc({space.8} * 2.5)',
  },
  '.speaker-root': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5em',
    maxWidth: '1080px',
    margin: '0 auto',
  },
  '.cfp': {
    padding: '0 20px',
  },
  '.speaker-session': {
    color: '{color.vue.blue}',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '0 calc({space.8} * 2.5)',
    display: 'grid',
    gap: 'calc({space.8} * 5)',
    'h3': {
      fontWeight: 700,
      fontSize: 'calc(32*{fontSize.base})',
    },
  },
  '.speakers': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2em',
  },
  '@tablet': {
    'section': {
      padding: 'calc({space.8} * 15) 0',
    },
  },
})
</style>

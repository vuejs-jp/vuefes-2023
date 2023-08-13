<script setup lang="ts">
import timeTables from './data/scheduleMobile.json'
import { Track } from '~/types/timetable'
import { Sponsor } from '~/types/timetable'

type TimeTable = {
  time: string
  tracks: {
    track?: Track
    sponsorSession?: Sponsor
    isTranslation?: boolean
    sessions: {
      subTitle?: string
      title?: string
      speaker?: string
    }[]
  }[]
}[]
</script>

<template>
  <table v-for="timetable in timeTables as TimeTable" :key="timetable.time" class="timetable">
    <thead>
      <tr>
        <th class="schedule">{{ timetable.time }}</th>
      </tr>
    </thead>
    <tbody>
      <!-- Loop through the time slots from 9:30 to 18:00 -->
      <!-- Each row represents a 30-minute interval -->
      <tr v-for="track in timetable.tracks" :key="track.track">
        <TimetableBodyRowMobile
          :track="track.track"
          :sponsor-session="track.sponsorSession"
          :is-translation="track.isTranslation"
          :sessions="track.sessions"
        />
      </tr>
    </tbody>
  </table>
</template>
<style lang="ts" scoped>
css({
  '.timetable': {
    minWidth: '100%',
    borderCollapse: 'separate',
    borderSpacing: '{space.8}',
    'thead': {
      'tr': {
        'th': {
          padding: '16px 0',
          color: '{color.white}',
          backgroundColor: '{color.vue.blue}',
          fontSize: 'calc(16*{fontSize.base})',
          fontWeight: '500',
          textAlign: 'center',
        },
      },
    },
  },
})
</style>

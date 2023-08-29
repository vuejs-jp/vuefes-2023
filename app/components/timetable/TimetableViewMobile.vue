<script setup lang="ts">
import _timetables from './data/scheduleMobile.json'

type TimetableType = {
  time: string
  tracks: {
    track?: string
    sponsorSession?: string
    isTranslation?: boolean
    sessions: {
      subTitle?: string
      title?: string
      speaker?: string
    }[]
  }[]
}[]

const timetables: TimetableType = _timetables
</script>

<template>
  <table v-for="timetable in timetables" :key="timetable.time" class="timetable">
    <thead>
      <tr>
        <th class="schedule">{{ timetable.time }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(track, index) in timetable.tracks" :key="index">
        <TimetableBodyRowMobile
          :track="track?.track"
          :sponsor-session="track?.sponsorSession"
          :is-translation="track?.isTranslation"
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

<script setup lang="ts">
import TimetableBodyRow from '~/components/timetable/TimetableBodyRow.vue'
import timeTables from './data/schedule.json'
</script>

<template>
  <table class="timetable">
    <thead>
      <tr>
        <th aria-label="cell" />
        <th class="trackA">{{ $t('track.cloudsign') }}</th>
        <th class="trackB">{{ $t('track.medpeer') }}</th>
        <th class="trackC">{{ $t('track.m3') }}</th>
        <th class="trackD">{{ $t('track.vue') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="timetable in timeTables" :key="timetable.time">
        <td class="schedule">{{ timetable.time }}</td>
        <TimetableBodyRow :tracks="timetable.tracks" />
      </tr>
    </tbody>
  </table>
</template>
<style lang="ts" scoped>
css({
  '.timetable': {
    minWidth: '1273px',
    borderCollapse: 'separate',
    borderSpacing: '{space.8}',
    'thead': {
      'tr': {
        'th': {
          padding: '16px',
          color: '{color.white}',
          fontSize: 'calc(18*{fontSize.base})',
          fontWeight: '700',
          backgroundColor: '{color.vue.blue}',
          textAlign: 'center',
          '&.blank': {
            backgroundColor: '{color.vue.blue}',
          },
          '&.trackA': {
            backgroundColor: '{color.timetable.trackA}',
          },
          '&.trackB': {
            backgroundColor: '{color.timetable.trackB}',
          },
          '&.trackC': {
            backgroundColor: '{color.timetable.trackC}',
          },
          '&.trackD': {
            backgroundColor: '{color.timetable.trackD}',
          },
        },
      },
    },
    'tbody': {
      'tr': {
        'td': {
          padding: '16px',
          width: '153px',
          color: '{color.vue.blue}',
          fontSize: 'calc(16*{fontSize.base})',
          fontWeight: '700',
          textAlign: 'center',
          '&.schedule': {
            color: '{color.white}',
            textAlign: 'center',
            fontWeight: '500',
            backgroundColor: '{color.vue.blue}',
          },
        },
      },
    },
  },
})
</style>

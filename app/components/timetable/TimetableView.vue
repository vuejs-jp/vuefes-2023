<script setup lang="ts">
import { computed } from 'vue'

const startTime = 9 * 60 + 30
const endTime = 18 * 60
const interval = 30

// computed
const timeSlots = computed(() => {
  const slots = []
  for (let time = startTime; time <= endTime; time += interval) {
    const hour = Math.floor(time / 60)
    const minute = time % 60
    const formattedTime = `${hour.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}`
    slots.push(formattedTime)
  }
  return slots
})
</script>

<template>
  <table class="timetable">
    <thead>
      <tr>
        <th class="blank">空欄</th>
        <th class="track1">トラック1</th>
        <th class="track2">トラック2</th>
        <th class="track3">トラック3</th>
        <th class="track4">トラック4</th>
        <th class="track5">トラック5</th>
      </tr>
    </thead>
    <tbody>
      <!-- Loop through the time slots from 9:30 to 18:00 -->
      <!-- Each row represents a 30-minute interval -->
      <tr v-for="timeSlot in timeSlots" :key="timeSlot">
        <td class="schedule">{{ timeSlot }}</td>
        <td class="track1" />
        <td class="track2" />
        <td class="track3" />
        <td class="track4" />
        <td class="track5" />
      </tr>
    </tbody>
  </table>
</template>
<style lang="ts" scoped>
css({
  '.timetable': {
    minWidth: '1273px',
    borderCollapse: 'separate',
    borderSpacing: '8px',
    'thead': {
      'tr': {
        'th': {
          padding: '16px',
          color: '{color.white}',
          fontSize: 'calc(18*{fontSize.base})',
          fontWeight: '700',
          backgroundColor: '#35495E',
          textAlign: 'center',
          '&.blank': {
            backgroundColor: '#35495E',
          },
          '&.track1': {
            backgroundColor: '#33A6B8',
          },
          '&.track2': {
            backgroundColor: '#F17C67',
          },
          '&.track3': {
            backgroundColor: '#90B44B',
          },
          '&.track4': {
            backgroundColor: '#3178C6',
          },
          '&.track5': {
            backgroundColor: '#42B983',
          },
        },
      },
    },
    'tbody': {
      'tr': {
        'td': {
          padding: '16px',
          fontSize: 'calc(16*{fontSize.base})',
          '&.schedule': {
            color: '{color.white}',
            textAlign: 'center',
            fontWeight: '500',
            backgroundColor: '#35495E',
          },
        },
      },
    },
  },
})
</style>

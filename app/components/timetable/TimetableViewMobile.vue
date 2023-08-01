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
  <table v-for="timeSlot in timeSlots" :key="timeSlot" class="timetable">
    <thead>
      <tr>
        <th class="schedule">スケジュール</th>
      </tr>
    </thead>
    <tbody>
      <!-- Loop through the time slots from 9:30 to 18:00 -->
      <!-- Each row represents a 30-minute interval -->
      <tr>
        <td class="track">トラック</td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="ts" scoped>
css({
  '.timetable': {
    minWidth: '100%',
    borderCollapse: 'separate',
    borderSpacing: '8px',
    'thead': {
      'tr': {
        'th': {
          padding: '1em',
          backgroundColor: '#35495E',
          textAlign: 'center',
          '&.schedule': {
            textAlign: 'left',
          },
        },
      },
    },
    'tbody': {
      'tr': {
        'td': {
          padding: '1em',
          border: '1px solid #000',
          '&.track': {
            backgroundColor: '#eee',
            textAlign: 'left',
          },
        },
      },
    },
  },
})
</style>

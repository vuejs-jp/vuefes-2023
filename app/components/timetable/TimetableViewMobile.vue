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
        <th class="schedule">{{ timeSlot }}</th>
      </tr>
    </thead>
    <tbody>
      <!-- Loop through the time slots from 9:30 to 18:00 -->
      <!-- Each row represents a 30-minute interval -->
      <tr>
        <td class="">開場</td>
      </tr>
      <tr>
        <td class="track track-c">
          <div class="place">ホールA+B</div>
          <div class="title">オープニング</div>
          <div class="speaker">スピーカー</div>
        </td>
      </tr>
      <tr>
        <td class="track track-m">
          <div class="place">ホールC</div>
          <div class="title">スポンサーセッション</div>
          <div class="speaker">スピーカー</div>
        </td>
      </tr>
      <tr>
        <td class="track track-e">
          <div class="place">ホール1</div>
          <div class="title">スポンサーセッション</div>
          <div class="speaker">スピーカー</div>
        </td>
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
          padding: '16px 0',
          color: '{color.white}',
          backgroundColor: '#35495E',
          fontSize: 'calc(16*{fontSize.base})',
          fontWeight: '500',
          textAlign: 'center',
        },
      },
    },
    'tbody': {
      'tr': {
        'td': {
          padding: '16px 0',
          fontSize: 'calc(16*{fontSize.base})',
          fontWeight: '700',
          textAlign: 'center',
          color: '#35495E',
          backgroundColor: '{color.white}',
          '&.track': {
            position: 'relative',
            padding: '46px 0 16px',
            '.place': {
              position: 'absolute',
              top: '0',
              left: '0',
              padding: '8px 16px',
              fontSize: 'calc(12*{fontSize.base})',
              fontWeight: '700',
              color: '{color.white}',
            },
            '.title': {
              fontSize: 'calc(16*{fontSize.base})',
              fontWeight: '700',
            },
            '.speaker': {
              fontSize: 'calc(11*{fontSize.base})',
              fontWeight: '500',
            },
            '&.track-c': {
              border: '1px solid #33A6B8',
              '.place': {
                backgroundColor: '#33A6B8',
              },
              '.title': {
                color: '#33A6B8',
              },
              '.speaker': {
                color: '#33A6B8',
              },
            },
            '&.track-m': {
              border: '1px solid #F17C67',
              '.place': {
                backgroundColor: '#F17C67',
              },
              '.title': {
                color: '#F17C67',
              },
              '.speaker': {
                color: '#F17C67',
              },
            },
            '&.track-e': {
              border: '1px solid #90B44B',
              '.place': {
                backgroundColor: '#90B44B',
              },
              '.title': {
                color: '#90B44B',
              },
              '.speaker': {
                color: '#90B44B',
              },
            },
          },
        },
      },
    },
  },
})
</style>

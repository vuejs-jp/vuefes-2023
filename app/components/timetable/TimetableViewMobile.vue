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
        <TimetableBodyRowMobile :sessions="[{ title: '開場' }]" />
      </tr>

      <tr>
        <TimetableBodyRowMobile
          track="cloud-sign"
          is-sponsor-session
          :sessions="[
            {
              title: 'オープニング',
              speaker: 'スピーカー',
            },
          ]"
          }
        />
      </tr>
      <tr>
        <TimetableBodyRowMobile
          track="medpia"
          is-sponsor-session
          :sessions="[
            {
              title: 'スポンサーセッション',
              speaker: 'スピーカー',
            },
          ]"
        />
      </tr>
      <tr>
        <TimetableBodyRowMobile
          track="m3"
          is-sponsor-session
          :sessions="[
            {
              title: 'スポンサーセッション',
              speaker: 'スピーカー',
            },
          ]"
        />
      </tr>
      <tr>
        <TimetableBodyRowMobile
          track="cloud-sign"
          :is-translation="true"
          :sessions="[
            {
              title: 'XXXX',
            },
          ]"
        />
      </tr>
      <tr>
        <TimetableBodyRowMobile
          track="medpia"
          :is-translation="true"
          :sessions="[
            {
              subTitle: '10:30 - 11:00',
              title: 'メインセッションメインセッション',
            },
            {
              subTitle: '14:45 - 15:05',
              title: 'メインセッションメインセッション',
            },
          ]"
        />
      </tr>
      <tr>
        <TimetableBodyRowMobile
          track="medpia"
          :is-translation="true"
          :sessions="[
            {
              title: 'メインセッションメインセッション',
              speaker: '発表者',
            },
            {
              subTitle: 'サブタイトル',
              title: 'メインセッションメインセッション',
              speaker: '発表者',
            },
          ]"
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
          padding: '16px',
          fontSize: 'calc(16*{fontSize.base})',
          fontWeight: '700',
          textAlign: 'center',
          color: '#35495E',
          backgroundColor: '{color.white}',
          '&.track': {
            position: 'relative',
            padding: '46px 16px 16px',
            '.headline': {
              position: 'absolute',
              top: '0',
              left: '0',
              display: 'flex',
              '.place': {
                padding: '8px 16px',
                fontSize: 'calc(12*{fontSize.base})',
                fontWeight: '700',
                color: '{color.white}',
              },
              '.translate': {
                position: 'relative',
                padding: '8px 16px 8px 40px',
                fontSize: 'calc(12*{fontSize.base})',
                fontWeight: '700',
                color: '#35495E',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '16px',
                  transform: 'translateY(-50%)',
                  width: '15px',
                  height: '15px',
                  backgroundImage: 'url(/timetable/translation_logo.svg)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                },
              },
            },
            '.title': {
              fontSize: 'calc(16*{fontSize.base})',
              fontWeight: '700',
            },
            '.speaker': {
              fontSize: 'calc(11*{fontSize.base})',
              fontWeight: '500',
            },
            '.info': {
              marginBottom: 'calc(16*{fontSize.base})',
              textAlign: 'left',
              color: '#35495E',
              '.time': {
                marginBottom: 'calc(3*{fontSize.base})',
                color: '#35495E',
                fontSize: 'calc(11*{fontSize.base})',
                fontWeight: '500',
              },
              '.title': {
                fontSize: 'calc(16*{fontSize.base})',
                fontWeight: '700',
                color: '#35495E',
              },
              '.speaker': {
                fontSize: 'calc(11*{fontSize.base})',
                fontWeight: '500',
              },
              '&:last-child': {
                marginBottom: '0',
              },
             },
            '&.track-c': {
              '.place': {
                backgroundColor: '#33A6B8',
              },
              '&.sponsor-session': {
                border: '1px solid #33A6B8',
                '.title': {
                  color: '#33A6B8',
                },
                '.speaker': {
                  color: '#33A6B8',
                },
              },
            },
            '&.track-m': {
              '.place': {
                backgroundColor: '#F17C67',
              },
             '&.sponsor-session': {
                border: '1px solid #F17C67',
                '.title': {
                  color: '#F17C67',
                },
                '.speaker': {
                  color: '#F17C67',
                },
              },
            },
            '&.track-e': {
              '.place': {
                backgroundColor: '#90B44B',
              },
              '&.sponsor-session': {
                 border: '1px solid #90B44B',
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
  },
})
</style>

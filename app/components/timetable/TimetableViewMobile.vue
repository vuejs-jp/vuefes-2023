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
      <!-- Todo: Component化 スポンサーセッション -->
      <tr>
        <td class="track track-c sponsor-session">
          <div class="headline">
            <div class="place">ホールA+B</div>
          </div>
          <div class="title">オープニング</div>
          <div class="speaker">スピーカー</div>
        </td>
      </tr>
      <tr>
        <td class="track track-m sponsor-session">
          <div class="headline">
            <div class="place">ホールC</div>
          </div>
          <div class="title">スポンサーセッション</div>
          <div class="speaker">スピーカー</div>
        </td>
      </tr>
      <tr>
        <td class="track track-e sponsor-session">
          <div class="headline">
            <div class="place">ホール1</div>
          </div>
          <div class="title">スポンサーセッション</div>
          <div class="speaker">スピーカー</div>
        </td>
      </tr>
      <tr>
        <td class="track track-c">
          <div class="headline">
            <div class="place">ホールA+B</div>
            <div class="translate">同時通訳あり</div>
          </div>
          <div class="info">
            <div class="title">ホールA+Bセッション</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="track track-c info-time">
          <div class="headline">
            <div class="place">ホールA+B</div>
            <div class="translate">同時通訳あり</div>
          </div>
          <div class="info">
            <p class="time">10:30 - 11:00</p>
            <p class="title">メインセッションメインセッション</p>
          </div>
          <div class="info">
            <p class="time">14:45 - 15:05</p>
            <p class="title">メインセッションメインセッション</p>
          </div>
        </td>
      </tr>
      <tr>
        <td class="track track-m info-time">
          <div class="headline">
            <div class="place">ルーム3A</div>
          </div>
          <div class="info">
            <p class="time">サブタイトル</p>
            <p class="title">ルーム3Aセッションセッションセッションセッションセッション</p>
            <p class="speaker">発表者名</p>
          </div>
          <div class="info">
            <p class="time">14:45 - 15:05</p>
            <p class="title">メインセッションメインセッション</p>
          </div>
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

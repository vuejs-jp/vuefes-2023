<script setup lang="ts">
import { computed } from 'vue'

const startTime = 9 * 60 + 30
const endTime = 13 * 60
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
        <th />
        <th class="track1">クラウドサイントラック</th>
        <th class="track2">メドピアトラック</th>
        <th class="track3">エムスリーやっていきトラック</th>
        <th class="track4">Vueトラック</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="schedule">09:30 - 10:00</td>
        <td class="" colspan="3">開場</td>
        <td class="track close" rowspan="2">午後オープン</td>
      </tr>
      <tr>
        <td class="schedule">09:30 - 10:00</td>
        <td class="sponsor-session sponsor-session-a">
          <div class="info">
            <div class="title">スポンサーセッション</div>
            <div class="speaker">あああああああああああああああ</div>
          </div>
        </td>
        <td class="sponsor-session sponsor-session-b">
          <div class="info">
            <div class="title">スポンサーセッション</div>
            <div class="speaker">いいいいいいいいいいいいいいい</div>
          </div>
        </td>
        <td class="sponsor-session sponsor-session-c">
          <div class="info">
            <div class="title">スポンサーセッション</div>
            <div class="speaker">ううううううううううううううう</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="schedule">10:00 - 10:30</td>
        <td class="track track-a">
          <div class="info">
            <div class="title">ホールA+Bセッション</div>
          </div>
        </td>
        <td class="track track-b">
          <div class="info">
            <div class="title">ルーム1セッション</div>
          </div>
        </td>
        <td class="track track-c">
          <div class="info">
            <div class="title">ホールCセッション</div>
          </div>
        </td>
        <td class="track track-d">
          <div class="info">
            <div class="title">ルーム1セッション</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="schedule">10:00 - 10:30</td>
        <td class="track track-a">
          <div class="translate">同時通訳あり</div>
          <div class="info">
            <div class="subtitle">10:30 - 10:45</div>
            <div class="title">セッションA</div>
            <div class="speaker">Evan You</div>
          </div>
          <div class="info">
            <div class="subtitle">10:45 - 11:00</div>
            <div class="title">セッションB</div>
            <div class="speaker">Evan You</div>
          </div>
        </td>
        <td class="track track-b" rowspan="2">
          <div class="info">
            <div class="subtitle">10:30 - 10:45</div>
            <div class="title">セッションA</div>
            <div class="speaker">Evan You</div>
          </div>
        </td>
        <td class="track track-c">
          <div class="info">
            <div class="title">セッションA</div>
          </div>
        </td>
        <td class="track track-d">
          <div class="info">
            <div class="title">セッションA</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="schedule">10:00 - 10:30</td>
        <td class="track track-a">
          <div class="translate">同時通訳あり</div>
          <div class="info">
            <div class="subtitle">10:30 - 10:45</div>
            <div class="title">セッションA</div>
            <div class="speaker">Evan You</div>
          </div>
          <div class="info">
            <div class="subtitle">10:45 - 11:00</div>
            <div class="title">セッションB</div>
            <div class="speaker">Evan You</div>
          </div>
        </td>
        <td class="track track-c">
          <div class="info">
            <div class="title">セッションA</div>
          </div>
        </td>
        <td class="track track-d">
          <div class="info">
            <div class="title">セッションA</div>
          </div>
        </td>
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
          backgroundColor: '{color.vue.blue}',
          textAlign: 'center',
          '&.blank': {
            backgroundColor: '{color.vue.blue}',
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
          color: '{color.vue.blue}',
          fontSize: 'calc(16*{fontSize.base})',
          fontWeight: '700',
          textAlign: 'center',
          backgroundColor: '#F2F7FF',
          '&.schedule': {
            color: '{color.white}',
            textAlign: 'center',
            fontWeight: '500',
            backgroundColor: '{color.vue.blue}',
          },
          '&.close': {
            color: '#B5B5B5',
            backgroundColor: '#EEE',
          },
          '&.sponsor-session': {
            border: '1px solid',
            '&.sponsor-session-a': {
              borderColor: '#33A6B8',
              '.title': {
                color: '#33A6B8',
              },
              '.speaker': {
                color: '#33A6B8',
              },
              },
              '&.sponsor-session-b': {
                borderColor: '#F17C67',
              '.title': {
                color: '#F17C67',
              },
              '.speaker': {
                color: '#F17C67',
              },
            },
            '&.sponsor-session-c': {
              borderColor: '#90B44B',
              '.title': {
                color: '#90B44B',
              },
              '.speaker': {
                color: '#90B44B',
              },
            },
          },
          '&.track': {
            textAlign: 'left',
            '.translate': {
                position: 'relative',
                marginBottom: '16px',
                paddingLeft: '25px',
                fontSize: 'calc(12*{fontSize.base})',
                fontWeight: '700',
                color: '{color.vue.blue}',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    transform: 'translateY(-50%)',
                    width: '15px',
                    height: '15px',
                    backgroundImage: 'url(/timetable/translation_logo.svg)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                },
            },
            '.info': {
    marginBottom: 'calc(16*{fontSize.base})',
'.subtitle': {
    marginBottom: 'calc(3*{fontSize.base})',
    color: '{color.vue.blue}',
    fontSize: 'calc(11*{fontSize.base})',
    fontWeight: '500',
},
'.title': {
    fontSize: 'calc(16*{fontSize.base})',
    fontWeight: '700',
    color: '{color.vue.blue}',
},
'.speaker': {
    fontSize: 'calc(11*{fontSize.base})',
    fontWeight: '500',
},
'&:last-child': {
    marginBottom: '0',
},
            }
          },
          '&.track-a': {
            borderTop: '1px solid #33A6B8',
          },
          '&.track-b': {
            borderTop: '1px solid #F17C67',
          },
          '&.track-c': {
            borderTop: '1px solid #90B44B',
          },
          '&.track-d': {
            borderTop: '1px solid #3178C6',
          },
        },
      },
    },
  },
})
</style>

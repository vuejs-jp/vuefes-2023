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

type Sponsor = 'cloud-sign' | 'medpia' | 'm3'
type Track = Sponsor | 'vue'

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

const timeTables: TimeTable = [
  {
    time: '09:30 - 10:00',
    tracks: [
      {
        sessions: [
          {
            title: '開場',
          },
        ],
      }
    ]
  },
  {
    time: '10:30 - 10:40',
    tracks: [
      {
        sessions: [
          {
            title: 'オープニング',
            speaker: '川口 和也',
          },
        ],
      }
    ]
  },
  {
    time: '10:40 - 11:30',
    tracks: [
      {
        sessions: [
          {
            title: 'キーノート',
            speaker: 'Evan You',
          },
        ],
      }
    ]
  },
  {
    time: '11:30 - 11:40',
    tracks: [
      {
        sponsorSession: 'cloud-sign',
        sessions: [
          {
            title: 'プラチナスポンサーセッション',
            speaker: 'クラウドサイン（弁護士ドットコム株式会社）',
          },
        ],
      }
    ]
  },
  {
    time: '11:40 - 11:50',
    tracks: [
      {
        sponsorSession: 'medpia',
        sessions: [
          {
            title: 'プラチナスポンサーセッション',
            speaker: 'ユニークビジョン株式会社',
          },
        ],
      }
    ]
  },
  {
    time: '11:50 - 12:00',
    tracks: [
      {
        sponsorSession: 'm3',
        sessions: [
          {
            title: 'プラチナスポンサーセッション',
            speaker: '株式会社リンクアンドモチベーション',
          },
        ],
      }
    ]
  },
  {
    time: '12:00 - 12:30',
    tracks: [
      {
        track: 'cloud-sign',
        isTranslation: true,
        sessions: [
          {
            title: 'Getting Your Head Around useHead',
            speaker: 'Evan Harlan Wilton',
          },
        ],
      },
      {
        track: 'medpia',
        sessions: [
          {
            title: '画面遷移から考える Nuxt アプリケーションをアクセシブルにする方法',
            speaker: 'やまのく',
          },
        ],
      },
      {
        track: 'm3',
        sessions: [
          {
            title: 'Vue.jsと3D可視化 - 産総研のOSS「AIST 3DDB Client」を例に',
            speaker: 'sorami',
          },
        ],
      },
      {
        track: 'vue',
        sessions: [
          {
            subTitle: '16:45 - 17:45',
            title: 'Vue.js クリニック',
          },
        ],
      }
    ]
  }
]

</script>

<template>
  <table v-for="timetable in timeTables" :key="timetable.time" class="timetable">
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

<script setup lang="ts">
import { Track } from '~/types/timetable'
import { Sponsor } from '~/types/timetable'
import TimetableBodyRow from '~/components/timetable/TimetableBodyRow.vue'

type TimeTable = {
  time: string
  tracks: {
    colspan?: number
    rowspan?: number
    isClose?: boolean
    track?: Track
    sponsorSession?: Sponsor
    sessions: {
      isTranslation?: boolean
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
        colspan: 3,
        sessions: [
          {
            title: '開場',
          },
        ],
      },
      {
        rowspan: 2,
        isClose: true,
        sessions: [
          {
            title: '午後オープン',
          },
        ],
      },
    ],
  },
  {
    time: '10:00 - 10:30',
    tracks: [
      {
        sponsorSession: 'cloud-sign',
        sessions: [
          {
            title: 'プラチナスポンサーセッション',
            speaker: 'クラウドサイン（弁護士ドットコム株式会社）',
          },
        ],
      },
      {
        sponsorSession: 'medpia',
        sessions: [
          {
            title: 'ゴールドスポンサーセッション',
            speaker: 'メドピア株式会社',
          },
        ],
      },
      {
        sponsorSession: 'm3',
        sessions: [
          {
            title: 'ゴールドスポンサーセッション',
            speaker: 'エムスリー株式会社',
          },
        ],
      },
    ],
  },
  {
    time: '10:30 - 11:00',
    tracks: [
      {
        track: 'cloud-sign',
        sessions: [
          {
            title: 'ホールA+Bセッション',
          },
        ],
      },
      {
        track: 'medpia',
        sessions: [
          {
            title: 'ホールCセッション',
          },
        ],
      },
      {
        track: 'm3',
        sessions: [
          {
            title: 'ルーム1セッション',
          },
        ],
      },
      {
        track: 'vue',
        rowspan: 3,
        sessions: [
          {
            title: 'ルーム2セッション',
          },
        ],
      },
    ],
  },
  {
    time: '11:00 - 11:10',
    tracks: [
      {
        track: 'cloud-sign',
        sessions: [
          {
            isTranslation: true,
            subTitle: '10:30 - 1045',
            title: 'セッションA',
            speaker: '山田太郎',
          },
          {
            isTranslation: true,
            subTitle: '10:45 - 11:00',
            title: 'セッションB',
            speaker: '山田太郎',
          }
        ],
      },
      {
        track: 'medpia',
        rowspan: 2,
        sessions: [
          {
            subTitle: '10:30 - 1045',
            title: 'セッションC',
            speaker: '山田太郎',
          },
        ]
      },
      {
        track: 'm3',
        sessions: [
          {
            title: 'セッションD',
          },
        ]
      },
    ]
  },
  {
    time: '11:10 - 11:20',
    tracks: [
      {
        track: 'cloud-sign',
        sessions: [
          {
            isTranslation: true,
            subTitle: '10:30 - 1045',
            title: 'セッションA',
            speaker: '山田太郎',
          },
          {
            subTitle: '10:45 - 11:00',
            title: 'セッションB',
            speaker: '山田太郎',
          }
        ],
      },
      {
        track: 'm3',
        sessions: [
          {
            title: 'セッションD',
          },
        ]
      },
    ]
  }
]
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
        },
      },
    },
  },
})
</style>

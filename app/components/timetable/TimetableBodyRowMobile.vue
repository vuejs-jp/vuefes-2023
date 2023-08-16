<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  track?: string
  sponsorSession?: string
  isTranslation?: boolean
  sessions: {
    subTitle?: string
    title?: string
    speaker?: string
  }[]
}

const props = defineProps<Props>()

// tdのclassを設定する
const cssTdClass = computed(
  (): {
    track?: string
    'track-a': boolean
    'track-b': boolean
    'track-c': boolean
    'track-d': boolean
    'sponsor-session': boolean
    'sponsor-session-a': boolean
    'sponsor-session-b': boolean
    'sponsor-session-c': boolean
  } => {
    const { track, sponsorSession } = props
    return {
      track,
      'track-a': track === 'cloudsign',
      'track-b': track === 'medpeer',
      'track-c': track === 'm3',
      'track-d': track === 'vue',
      'sponsor-session': sponsorSession !== undefined,
      'sponsor-session-a': sponsorSession === 'cloudsign',
      'sponsor-session-b': sponsorSession === 'medpeer',
      'sponsor-session-c': sponsorSession === 'm3',
    }
  },
)

const namePlace = computed(() => {
  const { track } = props
  switch (track) {
    case 'cloudsign':
      return 'クラウドサイントラック'
    case 'medpeer':
      return 'メドピアトラック'
    case 'm3':
      return 'エムスリーやっていきトラック'
    case 'vue':
      return 'Vueトラック'
    default:
      return ''
  }
})
</script>
<template>
  <td :class="cssTdClass">
    <div class="headline">
      <div class="place">
        {{ namePlace }}
      </div>
      <div v-if="props.isTranslation" class="translate">同時通訳あり</div>
    </div>
    <div v-for="session in props.sessions" :key="session.title" class="info">
      <p v-if="session.subTitle" class="subtitle">{{ session.subTitle }}</p>
      <div class="title">{{ session.title }}</div>
      <div v-if="session.speaker" class="speaker">{{ session.speaker }}</div>
    </div>
  </td>
</template>
<style lang="ts" scoped>
css({
  'td': {
    padding: '16px',
    fontSize: 'calc(16*{fontSize.base})',
    fontWeight: '700',
    textAlign: 'left',
    color: '{color.vue.blue}',
    backgroundColor: '{color.white}',
    '.translate': {
      position: 'relative',
      padding: '8px 16px 8px 20px',
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
    '&.sponsor-session': {
      border: '1px solid',
      '&.sponsor-session-a': {
        borderColor: '{color.timetable.trackA}',
        '.title': {
          color: '{color.timetable.trackA}',
        },
        '.speaker': {
          color: '{color.timetable.trackA}',
        },
      },
      '&.sponsor-session-b': {
        borderColor: '{color.timetable.trackB}',
        '.title': {
          color: '{color.timetable.trackB}',
        },
        '.speaker': {
          color: '{color.timetable.trackB}',
        },
      },
      '&.sponsor-session-c': {
        borderColor: '{color.timetable.trackC}',
        '.title': {
          color: '{color.timetable.trackC}',
        },
        '.speaker': {
          color: '{color.timetable.trackC}',
        },
      },
    },
    '&.track': {
        position: 'relative',
        padding: '46px 16px 16px',
      '.headline': {
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        '.place': {
          marginRight: '16px',
          padding: '8px 16px',
          fontSize: 'calc(12*{fontSize.base})',
          fontWeight: '700',
          color: '{color.white}',
        },
      },
      '.info': {
        marginBottom: 'calc(16*{fontSize.base})',
        textAlign: 'left',
        color: '{color.vue.blue}',
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
      },
      '&.track-a': {
        '.place': {
          backgroundColor: '{color.timetable.trackA}',
        },
      },
      '&.track-b': {
        '.place': {
          backgroundColor: '{color.timetable.trackB}',
        },
      },
      '&.track-c': {
        '.place': {
          backgroundColor: '{color.timetable.trackC}',
        },
      },
      '&.track-d': {
        '.place': {
          backgroundColor: '{color.timetable.trackD}',
        },
      },
    },
  },
})
</style>

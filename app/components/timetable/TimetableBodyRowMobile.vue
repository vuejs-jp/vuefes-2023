<script setup lang="ts">
import { computed } from 'vue'

type Sponsor = 'cloud-sign' | 'medpia' | 'm3'
type Track = Sponsor | 'vue'

type Props = {
  track?: Track
  sponsorSession?: Sponsor
  isTranslation?: boolean
  sessions: {
    subTitle?: string
    title?: string
    speaker?: string
  }[]
}

const props = defineProps<Props>()

// tdのclassを設定する
const cssTdClass = computed((): {
  track?: Track,
  'track-a': boolean,
  'track-b': boolean,
  'track-c': boolean,
  'track-d': boolean,
  'sponsor-session': boolean,
  'sponsor-session-a': boolean,
  'sponsor-session-b': boolean,
  'sponsor-session-c': boolean,
} => {
  const { track, sponsorSession } = props
  return {
    track,
    'track-a': track === 'cloud-sign',
    'track-b': track === 'medpia',
    'track-c': track === 'm3',
    'track-d': track === 'vue',
    'sponsor-session': sponsorSession !== undefined,
    'sponsor-session-a': sponsorSession === 'cloud-sign',
    'sponsor-session-b': sponsorSession === 'medpia',
    'sponsor-session-c': sponsorSession === 'm3',
  }
})

const namePlace = computed(() => {
  const { track } = props
  switch (track) {
    case 'cloud-sign':
      return 'クラウドサイントラック'
    case 'medpia':
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
    <div v-for="session in props.sessions" :key="session.subTitle" class="info">
      <p v-if="session.subTitle" class="time">{{ session.subTitle }}</p>
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
    textAlign: 'center',
    color: '#35495E',
    backgroundColor: '{color.white}',
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
      '&.track-a': {
        '.place': {
          backgroundColor: '#33A6B8',
        },
      },
      '&.track-b': {
        '.place': {
          backgroundColor: '#F17C67',
        },
      },
      '&.track-c': {
        '.place': {
          backgroundColor: '#90B44B',
        },
      },
      '&.track-d': {
        '.place': {
          backgroundColor: '#42B983',
        },
      },
    },
  },
})
</style>

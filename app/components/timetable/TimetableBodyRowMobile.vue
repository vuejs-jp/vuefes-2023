<script setup lang="ts">
import { useSession } from '~/composables/useSession'
import { Session } from '~/types/timetable'
import { useLocaleCurrent } from '~/composables/useLocaleCurrent'

const { locale } = useLocaleCurrent()

type Props = {
  track?: string
  sponsorSession?: string
  isTranslation?: boolean
  sessions: Session[]
}

const props = defineProps<Props>()

const { showSpeakerInfo } = useSession()

// tdのclassを設定する
const cssTdClass = computed(
  (): {
    track?: string
    'track-a': boolean
    'track-b': boolean
    'track-c': boolean
    'track-d': boolean
  } => {
    const { track } = props
    return {
      track,
      'track-a': track === 'cloudsign',
      'track-b': track === 'medpeer',
      'track-c': track === 'm3',
      'track-d': track === 'vue',
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

const _nuxtLink = computed(() => resolveComponent('NuxtLink'))
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
      <component
        :is="session.id ? _nuxtLink : 'div'"
        :to="
          showSpeakerInfo && session.id
            ? sponsorSession
              ? `${locale === 'ja' ? '/' : `/${locale}/`}sponsor-sessions/${session.id}`
              : `${locale === 'ja' ? '/' : `/${locale}/`}sessions/${session.id}`
            : ''
        "
        class="title"
      >
        <p v-if="session.category" class="category">{{ session.category }}</p>
        {{ session.title }}
      </component>
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
    '&.track': {
      position: 'relative',
      padding: '46px 16px 16px',
      borderTop: '2px solid',
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
      '&.track-a': {
        borderColor: '{color.timetable.trackA}',
        '.place': {
          backgroundColor: '{color.timetable.trackA}',
        },
      },
      '&.track-b': {
        borderColor: '{color.timetable.trackB}',
        '.place': {
          backgroundColor: '{color.timetable.trackB}',
        },
      },
      '&.track-c': {
        borderColor: '{color.timetable.trackC}',
        '.place': {
          backgroundColor: '{color.timetable.trackC}',
        },
      },
      '&.track-d': {
        borderColor: '{color.timetable.trackD}',
        '.place': {
          backgroundColor: '{color.timetable.trackD}',
        },
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
  },
})
</style>

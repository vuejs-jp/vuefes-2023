<script setup lang="ts">
import { useSession } from '~/composables/useSession'
import { useLocaleCurrent } from '~/composables/useLocaleCurrent'
import { Track } from '~/types/timetable'

const props = defineProps<{
  tracks: Track[]
}>()

const { locale } = useLocaleCurrent()
const { showSpeakerInfo, getCategory } = useSession()

// tdのclassを設定する
const cssTdClass = (args: Track) => {
  const { track, isClose } = args
  return {
    track,
    close: isClose,
    'track-a': track === 'cloudsign',
    'track-b': track === 'medpeer',
    'track-c': track === 'm3',
    'track-d': track === 'vue',
  }
}

const _nuxtLink = computed(() => resolveComponent('NuxtLink'))
</script>
<template>
  <td
    v-for="track in props.tracks"
    :key="track.track"
    :class="cssTdClass(track)"
    :colspan="track.colspan"
    :rowspan="track.rowspan"
  >
    <div v-for="session in track.sessions" :key="session.title" class="info">
      <div v-if="session.isTranslation" class="translate">
        {{ $t('words.simultaneous_interpretation') }}
      </div>
      <p v-if="session.subTitle" class="subtitle">{{ session.subTitle }}</p>
      <component
        :is="session.id ? _nuxtLink : 'div'"
        :to="
          showSpeakerInfo && session.id
            ? session.sponsorSession
              ? `${locale === 'ja' ? '/' : `/${locale}/`}sponsor-sessions/${session.id}`
              : `${locale === 'ja' ? '/' : `/${locale}/`}sessions/${session.id}`
            : ''
        "
        class="title"
      >
        <i18n-t
          v-if="session.category"
          keypath="words.bracket"
          tag="p"
          class="category"
          scope="global"
        >
          {{
            `${$t(getCategory(session.category as 'platinum' | 'special-lunch' | 'lunch'))} ${$t(
              'words.sponsorsession',
            )}`
          }}
        </i18n-t>
        {{ session.titleKey ? $t(session.titleKey) : session.title }}
      </component>
      <div v-if="session.speaker" class="speaker">
        {{ session.speakerKey ? $t(session.speakerKey) : session.speaker }}
      </div>
    </div>
  </td>
</template>
<style lang="ts" scoped>
css({
  'td': {
    padding: '16px',
    width: '248px',
    fontSize: 'calc(16*{fontSize.base})',
    fontWeight: '700',
    textAlign: 'center',
    color: '{color.vue.blue}',
    backgroundColor: '{color.white}',
    verticalAlign: 'top',
    '.info': {
      display: 'grid',
    },
    '&.close': {
      color: '{color.timetable.close.title}',
      backgroundColor: '{color.timetable.close.background}',
    },
    '.translate': {
      textAlign: 'left',
      display: 'inline-block',
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
    '.category': {
      fontSize: 'calc(14*{fontSize.base})',
    },
    '&.sponsor-session': {
      border: '1px solid',
    },
    '&.track': {
      textAlign: 'left',
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
      },
    },
    '&.track-a': {
      borderTop: '2px solid {color.timetable.trackA}',
    },
    '&.track-b': {
      borderTop: '2px solid {color.timetable.trackB}',
    },
    '&.track-c': {
      borderTop: '2px solid {color.timetable.trackC}',
    },
    '&.track-d': {
      borderTop: '2px solid {color.timetable.trackD}',
    },
  },
})
</style>

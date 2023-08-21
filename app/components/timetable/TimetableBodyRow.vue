<script setup lang="ts">
import { useSession } from '~/composables/useSession'
import { Track } from '~/types/timetable'

const props = defineProps<{
  tracks: Track[]
}>()

const { showSpeakerInfo } = useSession()

// tdのclassを設定する
const cssTdClass = (args: Track) => {
  const { track, sponsorSession, isClose } = args
  return {
    track,
    close: isClose,
    'track-a': track === 'cloudsign',
    'track-b': track === 'medpeer',
    'track-c': track === 'm3',
    'track-d': track === 'vue',
    'sponsor-session': sponsorSession !== undefined,
    'sponsor-session-a': sponsorSession === 'cloudsign',
    'sponsor-session-b': sponsorSession === 'medpeer',
    'sponsor-session-c': sponsorSession === 'm3',
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
      <div v-if="session.isTranslation" class="translate">同時通訳あり</div>
      <p v-if="session.subTitle" class="subtitle">{{ session.subTitle }}</p>
      <component
        :is="session.id ? _nuxtLink : 'div'"
        :to="
          showSpeakerInfo && session.id
            ? track.sponsorSession
              ? `/sponsor-sessions/${session.id}`
              : `/sessions/${session.id}`
            : ''
        "
        class="title"
      >
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
    width: '248px',
    fontSize: 'calc(16*{fontSize.base})',
    fontWeight: '700',
    textAlign: 'center',
    color: '{color.vue.blue}',
    backgroundColor: '{color.white}',
    '.info': {
      display: 'grid',
    },
    '&.close': {
      color: '{color.timetable.close.title}',
      backgroundColor: '{color.timetable.close.background}',
    },
    '.translate': {
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
      }
    },
    '&.track-a': {
      borderTop: '1px solid {color.timetable.trackA}',
    },
    '&.track-b': {
      borderTop: '1px solid {color.timetable.trackB}',
    },
    '&.track-c': {
      borderTop: '1px solid {color.timetable.trackC}',
    },
    '&.track-d': {
      borderTop: '1px solid {color.timetable.trackD}',
    },
  },
})
</style>

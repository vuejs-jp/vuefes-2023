<script setup lang="ts">
type Sponsor = 'cloud-sign' | 'medpia' | 'm3'
type Track = Sponsor | 'vue'

type Props = {
  tracks?: any
}

const props = defineProps<Props>()

// tdのclassを設定する
const cssTdClass = (
  args,
): {
  track?: Track
  close: boolean
  'track-a': boolean
  'track-b': boolean
  'track-c': boolean
  'track-d': boolean
  'sponsor-session': boolean
  'sponsor-session-a': boolean
  'sponsor-session-b': boolean
  'sponsor-session-c': boolean
} => {
  const { track, sponsorSession, isClose } = args
  return {
    track,
    close: isClose,
    'track-a': track === 'cloud-sign',
    'track-b': track === 'medpia',
    'track-c': track === 'm3',
    'track-d': track === 'vue',
    'sponsor-session': sponsorSession !== undefined,
    'sponsor-session-a': sponsorSession === 'cloud-sign',
    'sponsor-session-b': sponsorSession === 'medpia',
    'sponsor-session-c': sponsorSession === 'm3',
  }
}
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
    color: '{color.vue.blue}',
    backgroundColor: '{color.white}',
    '&.close': {
      color: '{color.timetable.close.title}',
      backgroundColor: '{color.timetable.close.background}',
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

<script setup lang="ts">
import json from './foo.json'

type Sponsor = 'cloud-sign' | 'medpia' | 'm3'
type Track = Sponsor | 'vue'

type Props = {
  tracks?: any
}

console.log(json)

const props = defineProps<Props>()

// tdのclassを設定する
const cssTdClass =
    (args): {
      track?: Track
      'close': boolean
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
        'close': isClose,
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
})
</style>

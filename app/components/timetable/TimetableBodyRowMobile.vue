<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  track?: 'cloud-sign' | 'medpia' | 'm3' | 'vue'
  isSponsorSession?: boolean
  isTranslation?: boolean
  sessions: {
    time?: string
    title?: string
    speaker?: string
  }[]
}

const props = defineProps<Props>()

// tdのclassを設定する
const cssTdClass = computed(() => {
  const { track, isSponsorSession } = props
  return {
    track,
    'track-c': track === 'cloud-sign',
    'track-m': track === 'medpia',
    'track-e': track === 'm3',
    'track-v': track === 'vue',
    'sponsor-session': isSponsorSession,
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
    <div v-for="session in props.sessions" :key="session.time" class="info">
      <p v-if="session.time" class="time">{{ session.time }}</p>
      <div class="title">{{ session.title }}</div>
      <div class="speaker">{{ session.speaker }}</div>
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
})
</style>

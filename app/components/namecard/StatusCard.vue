<script setup lang="ts">
import { Status } from '~/types/app'
import { useNamecardStatus } from '~/composables/useNamecardStatus'

const props = defineProps({
  status: {
    type: String as PropType<Status>,
    required: true,
  },
})

const { message } = useNamecardStatus()
const { title, detail } = message(props.status)
</script>

<template>
  <div class="root">
    <div class="title">{{ title }}</div>
    <div class="detail">{{ detail }}</div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.root': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '29px',
    width: '960px',
    height: '225px',
    background: '{color.white}',
    color: (props) => props.status === 'registered' ? '{color.vue.green}' : props.status === 'activating' ? '#FFC408' : '#F17C67',
    border: (props) => props.status === 'registered' ? '4px solid {color.vue.green}' : props.status === 'activating' ? '4px solid #FFC408' : '4px solid #F17C67',
    borderRadius: '8px',
  },
  '.title': {
    fontSize: 'calc(32*{fontSize.base})',
    fontWeight: 900,
  },
  '.detail': {
    fontSize: 'calc(16*{fontSize.base})',
    fontWeight: 400,
    whiteSpace: 'pre-wrap',
  },
})
</style>

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
    gap: 'calc({space.8} * 1)',
    padding: 'calc({space.8} * 3)',
    width: '960px',
    background: '{color.white}',
    color: (props) => props.status === 'registered' ? '{color.vue.green}' : '{color.sangosyo}',
    border: (props) => props.status === 'registered' ? '4px solid {color.vue.green}' : '4px solid {color.sangosyo}',
    borderRadius: '8px',
  },
  '.title': {
    fontSize: 'calc(24*{fontSize.base})',
    fontWeight: 900,
  },
  '.detail': {
    fontSize: 'calc(14*{fontSize.base})',
    fontWeight: 400,
    whiteSpace: 'pre-wrap',
  },
  '@mobile': {
    '.root': {
      width: '100%',
    },
  },
})
</style>

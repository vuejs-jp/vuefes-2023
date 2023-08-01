<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import { childCareUrl } from '~/utils/constants'
</script>

<template>
  <div class="childcare">
    <h3>託児サポート</h3>
    <div class="explain">
      <MarkDownText path="childcare" />
    </div>
    <div class="center">
      <!--
      <i18n-t keypath="top.volunteer_schedule_limit" tag="p" class="deadline">
        <em>{{ $t('words.volunteer_deadline_date') }}</em>
      </i18n-t>
      -->
      <div class="apply">
        <RoundButton :href="childCareUrl" target="_blank" rel="noreferrer">
          {{ $t('words.apply_childcare') }}
        </RoundButton>
      </div>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.center': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 1.5)',
  },
  '.childcare': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 3)',
    '::v-deep(h3)': {
      textAlign: 'center',
      color: '{color.vue.blue}',
      fontSize: 'calc(32*{fontSize.base})',
      fontWeight: 700,
    },
  },
  '.explain': {
    fontSize: 'calc(18*{fontSize.base})',
    fontWeight: 500,
    lineHeight: 1.8,
    whiteSpace: 'pre-wrap',
    'strong': {
      fontWeight: 'bold',
    },
    ':not(:last-child)': {
      paddingBottom: 'calc({space.8} * 3)',
    },
  },
  '.apply': {
    width: '320px'
  },
  '.deadline': {
    color: '{color.vue.blue}',
    fontSize: 'calc(24*{fontSize.base})',
    'em': {
      fontStyle: 'normal',
      fontWeight: 700,
    },
  },
})
</style>

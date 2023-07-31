<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import RoundButton from '~/components/button/RoundButton.vue'
</script>

<template>
  <div class="volunteer">
    <CommentTitle color="vue.green" title="あなたも一緒に Vue Fes Japan を盛り上げませんか？" />
    <h3>当日ボランティア募集</h3>
    <div class="explain">
      <MarkDownText path="volunteer" />
    </div>
    <div class="center">
      <i18n-t keypath="top.volunteer_schedule_limit" tag="p" class="deadline">
        <em>{{ $t('words.volunteer_deadline_date') }}</em>
      </i18n-t>
      <div class="apply">
        <RoundButton href="#" target="_blank" rel="noreferrer">
          {{ $t('words.apply_volunteer') }}
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
  '.volunteer': {
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

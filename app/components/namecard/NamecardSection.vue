<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import RoundButton from '~/components/button/RoundButton.vue'
</script>

<template>
  <h3><CommentTitle color="vue.green" title="必ず事前にご確認ください！" />ネームカード</h3>
  <div class="explain">
    <MarkDownText path="namecard" />
  </div>
  <img
    class="ticket-img"
    src="https://placehold.jp/592x395.png"
    alt=""
    width="592"
    height="395"
    decoding="async"
  />
  <div class="center">
    <i18n-t keypath="top.namecard_schedule_limit" tag="p" class="deadline">
      <em>{{ $t('words.namecard_deadline_date') }}</em>
    </i18n-t>
    <!-- ネームカードを作成 -->
    <RoundButton href="#" target="_blank" rel="noreferrer">
      {{ $t('words.create_namecard') }}
    </RoundButton>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.center': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 1.5)',
  },
  '.explain': {
    fontSize: 'calc(18*{fontSize.base})',
    fontWeight: 500,
    lineHeight: 1.8,
    'strong': {
      fontWeight: 'bold',
    },
  },
  '.deadline': {
    color: '{color.vue.blue}',
    fontSize: 'calc(24*{fontSize.base})',
    'em': {
      fontStyle: 'normal',
      fontWeight: 700,
    },
  },
  '.ticket-img': {
    display: 'block',
    margin: '0 auto'
  },
})
</style>

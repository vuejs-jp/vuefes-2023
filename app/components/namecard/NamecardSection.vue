<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import { useNamecard } from '~/composables/useNamecard'

const { canRegister } = useNamecard()
</script>

<template>
  <div class="namecard">
    <CommentTitle color="vue.green" title="アバター＋名前入りがもらえる！" />
    <h3>ネームカード</h3>
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
      <!--
      <i18n-t keypath="top.namecard_schedule_limit" tag="p" class="deadline">
        <em>{{ $t('words.namecard_deadline_date') }}</em>
      </i18n-t>
      -->
      <!-- ネームカードを作成 -->
      <div class="apply">
        <RoundButton to="/register" target="_blank" rel="noreferrer" :disabled="!canRegister">
          {{ $t('words.create_namecard') }}
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
  '.namecard': {
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
  '.ticket-img': {
    display: 'block',
    margin: '0 auto'
  },
})
</style>

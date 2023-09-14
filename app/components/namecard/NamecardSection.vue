<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import IntegrationCard from '~/components/namecard/IntegrationCard.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import { useNamecard } from '~/composables/useNamecard'
import { useDialog } from '~/composables/useDialog'

const { canRegister } = useNamecard()
const { handle, isShow } = useDialog()
</script>

<template>
  <div class="namecard">
    <CommentTitle color="vue.green" title="アバター＋名前入りがもらえる！" />
    <h3>{{ $t('top.namecard') }}</h3>
    <div class="explain">
      <MarkDownText :path="canRegister ? 'namecard' : 'prepare-namecard'" />
    </div>
    <img
      class="ticket-img"
      src="/namecard/sample.png"
      alt=""
      width="592"
      height="395"
      decoding="async"
    />
    <div class="center">
      <!--
      <i18n-t keypath="top.namecard_schedule_limit" tag="p" class="deadline" scope="global">
        <em>{{ $t('words.namecard_deadline_date') }}</em>
      </i18n-t>
      -->
      <!-- ネームカードを作成 -->
      <div class="apply">
        <RoundButton type="submit" :disabled="!canRegister" @click="() => handle(true)">
          {{ $t('words.create_namecard') }}
        </RoundButton>
      </div>
    </div>
  </div>
  <div v-if="isShow">
    <IntegrationCard @on-close="() => handle(false)" />
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
    whiteSpace: 'pre-wrap',
    'strong': {
      fontWeight: 'bold',
    },
    ':not(:last-child)': {
      paddingBottom: 'calc({space.8} * 3)',
    },
  },
  '.apply': {
    width: '320px',
    textAlign: 'center',
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
  '@mobile': {
    '.namecard': {
      '::v-deep(h3)': {
        fontSize: 'calc(28*{fontSize.base})',
      }
    },
    '.deadline': {
      fontSize: 'calc(20*{fontSize.base})',

    }
  },
})
</style>

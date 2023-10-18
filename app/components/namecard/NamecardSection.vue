<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import IntegrationCard from '~/components/namecard/IntegrationCard.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import { useNamecard } from '~/composables/useNamecard'
import { useUserStore } from '~/composables/useUserStore'
import useAuth from '~/composables/useAuth'
import { useDialog } from '~/composables/useDialog'
import { useLocaleCurrent } from '~/composables/useLocaleCurrent'

const { locale } = useLocaleCurrent()
const { canRegister, closedRegister } = useNamecard()
const { signedUser } = useUserStore()
const { hasAuth } = useAuth()
const { handle, isShow } = useDialog()

const mdPath = canRegister ? (closedRegister ? 'close-namecard' : 'namecard') : 'prepare-namecard'
</script>

<template>
  <div class="namecard">
    <CommentTitle color="vue.green" :title="$t('top.receive_your_avatar_and_name')" />
    <h3>{{ $t('top.namecard') }}</h3>
    <div class="explain">
      <MarkDownText :path="mdPath" />
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
        <RoundButton
          type="submit"
          :disabled="!canRegister"
          @click="
            () =>
              !hasAuth
                ? handle(true)
                : navigateTo(`${locale === 'ja' ? '/' : `/${locale}/`}users/${signedUser.user_id}`)
          "
        >
          {{ closedRegister ? $t('words.check_created_namecard') : $t('words.create_namecard') }}
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
    margin: '0 auto',
  },
  '@mobile': {
    '.namecard': {
      '::v-deep(h3)': {
        fontSize: 'calc(28*{fontSize.base})',
      },
    },
    '.explain': {
      fontSize: 'calc(16*{fontSize.base})',
    },
  },
})
</style>

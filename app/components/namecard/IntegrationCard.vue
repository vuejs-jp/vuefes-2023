<script setup lang="ts">
import GoogleSvg from '~/assets/logo/google_logo.svg'
import GitHubSvg from '~/assets/logo/github_logo.svg'
import DialogArea from '~/components/DialogArea.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import useAuth from '~/composables/useAuth'
import { ticketUrl } from '~/utils/constants'

interface IntegrationCardEmit {
  (e: 'on-close'): void
}
const emit = defineEmits<IntegrationCardEmit>()

const { signIn } = useAuth()
</script>

<template>
  <DialogArea @on-close="$emit('on-close')">
    <div class="container">
      <h3 class="title">ソーシャルアカウントとの連携</h3>
      <p class="detail">
        ネームカードを作成するには、あらかじめ<a :href="ticketUrl" target="_blank" rel="noreferrer"
          >チケットの購入</a
        >が必要です。チケット購入後、以下のいずれかのソーシャルアカウントからログインし、必要な情報をご登録ください。
      </p>
      <p class="detail">※ネームカード作成は必須ではありません。</p>
      <ul>
        <li>
          <RoundButton outline @click="() => signIn('google')">
            <template #icon>
              <GoogleSvg />
            </template>
            <template #default> Google </template>
          </RoundButton>
        </li>
        <li>
          <div class="separator">OR</div>
        </li>
        <li>
          <RoundButton outline @click="() => signIn('github')">
            <template #icon>
              <GitHubSvg />
            </template>
            <template #default> GitHub </template>
          </RoundButton>
        </li>
      </ul>
    </div>
  </DialogArea>
</template>

<style lang="ts" scoped>
css({
  '.container': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 4)',
    '::v-deep(ul)': {
      display: 'grid',
      placeItems: 'center',
      gap: 'calc({space.8} * 1.5)',
    },
    '::v-deep(button)': {
      padding: 'calc({space.8} * 4) calc({space.8} * 9)',
      display: 'flex',
      gap: 'calc({space.8} * 1)',
    },
  },
  '.title': {
    fontSize: 'calc(32*{fontSize.base})',
    fontWeight: 700,
    textAlign: 'center',
  },
  '.detail': {
    width: '100%',
    fontSize: 'calc(16*{fontSize.base})',
    fontWeight: 500,
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
  },
  '.detail a': {
    color: '{color.vue.blue}',
    textDecoration: 'underline',
  },
  '.detail a:hover': {
    textDecoration: 'none',
  },
  '.separator': {
    display: 'grid',
    gridTemplateColumns: 'calc({space.8} * 12) max-content calc({space.8} * 12)',
    justifyContent: 'center',
    placeItems: 'center',
    columnGap: 'calc({space.8} * 2)',
    '&::before, &::after': {
      content: '""',
      display: 'inline-block',
      background: '{color.vue.blue}',
      width: '96px',
      height: '1px',
    },
  },
  '@tablet': {
    '.title': {
      fontSize: 'calc(28*{fontSize.base})',
    },
  },
  '@mobile': {
    '.container': {
      gap: 'calc({space.8} * 2)',
    },
    '.title': {
      fontSize: 'calc(24*{fontSize.base})',
    },
  }
})
</style>

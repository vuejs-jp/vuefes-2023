<script setup lang="ts">
import GoogleSvg from '~/assets/logo/google_logo.svg'
import GitHubSvg from '~/assets/logo/github_logo.svg'
import DialogArea from '~/components/DialogArea.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import useAuth from '~/composables/useAuth'

const { signIn } = await useAuth()
</script>

<template>
  <DialogArea @on-close="$emit('on-close')">
    <div class="container">
      <h3 class="title">ソーシャルアカウントとの連携</h3>
      <p class="detail">
        {{
          'オリジナルのネームカード作成には下のいずれかからソーシャルアカウントからログインしてください。\nその後、チケット購入情報との紐付けを行ってください。'
        }}
      </p>
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
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '540px',
    height: '500px',
    margin: '0 auto',
    padding: 'calc({space.8} * 2.5) calc({space.8} * 3.75)',
    backgroundColor: '#fff',
    boxShadow: '0 calc({space.8} * 0.25) calc({space.8} * 1) rgba(0, 0, 0, 0.33)',
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 5)',
    borderRadius: 'calc({space.8} * 1)',
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
  },
  '.detail': {
    fontSize: 'calc(16*{fontSize.base})',
    fontWeight: 500,
    whiteSpace: 'pre-wrap',
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
})
</style>

<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'
import UserForDev from '~/components/UserForDev.vue'
import useAuth from '~/composables/useAuth'
import { useSupabase } from '~/composables/useSupabase'
definePageMeta({
  middleware: ['error'],
})
const { signOut, signedUser, hasAuth } = await useAuth()
const { addEventUser } = await useSupabase({ user: signedUser })
const secretWord = ref('')
const receiptId = ref('')
function onPurchase() {
  addEventUser(secretWord.value, receiptId.value)
}
</script>

<template>
  <main>
    <nuxt-link to="/">back to top</nuxt-link>
    <h1>Mypage</h1>
    <div class="user">
      <UserForDev :signed-user="signedUser" />
    </div>
    <RoundButton v-if="hasAuth" class="btn-logout" outline @click="signOut">logout</RoundButton>
    <RoundButton v-else class="btn-login" outline href="/register" target="_self"
      >login</RoundButton
    >
    <RoundButton v-if="hasAuth" class="btn-purchase" @click="onPurchase">purchase</RoundButton>
  </main>
</template>

<style lang="ts" scoped>
css({
  'main': {
    padding: '48px'
  },
  'h1': {
    fontSize: '24px',
    padding: '24px 0'
  },
  '.btn-logout': {
    marginTop: '64px'
  },
  '.btn-login': {
    marginTop: '64px'
  },
  '.btn-purchase': {
    marginTop: '64px'
  }
})
</style>

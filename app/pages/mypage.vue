<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'
import UserForDev from '~/components/UserForDev.vue'
import useAuth from '~/composables/useAuth'
definePageMeta({
  middleware: ['error'],
})
const { signInWithGoogle, signedUser, hasAuth } = await useAuth()
</script>

<template>
  <main>
    <h1>Mypage</h1>
    <div class="user">
      <UserForDev :signed-user="signedUser" />
    </div>
    <RoundButton v-if="hasAuth" class="btn-logout" outline @click="signInWithGoogle"
      >logout</RoundButton
    >
    <RoundButton v-else class="btn-logout" outline href="/register" target="_self"
      >login</RoundButton
    >
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
  }

})
</style>

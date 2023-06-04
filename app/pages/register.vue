<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'
import useAuth, { AuthProvider } from '~/composables/useAuth'
import UserForDev from '~/components/UserForDev.vue'

definePageMeta({
  middleware: ['error'],
})
const { logout, signIn, signedUser } = await useAuth()
</script>

<template>
  <main>
    <h1>Register</h1>
    <div class="user">
      <UserForDev :signed-user="signedUser" />
    </div>

    <ul>
      <li>
        <RoundButton @click="() => signIn(AuthProvider.GOOGLE)">signIn with Google</RoundButton>
      </li>
      <li>
        <RoundButton @click="() => signIn(AuthProvider.GITHUB)">signIn with GitHub</RoundButton>
      </li>
    </ul>
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
  'ul': {
    display: 'flex',
    margin: '40px',
    flexWrap: 'wrap'
  },
  'li': {
    margin: '24px'
  },
  '.logout': {
    'button': {
      margin: '80px auto 0'
    }
  },
})
</style>

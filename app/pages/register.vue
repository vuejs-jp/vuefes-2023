<script setup lang="ts">
import RoundButton from '~/components/button/RoundButton.vue'
import useAuth from '~~/app/composables/useAuth'
definePageMeta({
  middleware: ['error'],
})
const { signInWithGoogle, signInWithGitHub, loginUser } = await useAuth()
</script>

<template>
  <main>
    <h1>Register</h1>
    <h2 class="user">
      <div v-if="loginUser.avatarUrl" class="user-info">
        <img
          class="user-icon"
          width="100"
          height="100"
          decoding="async"
          :src="loginUser.avatarUrl"
          :alt="loginUser.name"
        />
        Hello「{{ loginUser.name }}」
      </div>
      <div v-else class="user">NO AUTH</div>

      <p class="user-debug">{{ loginUser }}</p>
    </h2>

    <ul>
      <li>
        <RoundButton @click="signInWithGoogle">signIn with Google</RoundButton>
      </li>
      <li>
        <RoundButton @click="signInWithGitHub">signIn with GitHub</RoundButton>
      </li>
    </ul>
    <p class="logout">
      <RoundButton outline @click="signInWithGoogle">logout</RoundButton>
    </p>
  </main>
</template>

<style lang="ts" scoped>
css({
  'main': {
    padding: '40px'
  },
  'h1': {
    fontSize: '20px',
    padding: '20px 0'
  },
  'ul': {
    display: 'flex',
    margin: '40px',
  },
  'li': {
    margin: '20px'
  },
  '.logout': {
    'button': {
      margin: '80px auto 0'
    }
  },
  '.user-info': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px'
  },
  '.user-icon': {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '20px'
  },
  '.user-debug': {
    color: '#ccc',
    marginTop: '16px'
  }
})
</style>

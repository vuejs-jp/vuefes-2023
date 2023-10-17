<script setup lang="ts">
import { useUserStore } from '~/composables/useUserStore'

const { signedUser } = useUserStore()
</script>

<template>
  <article>
    <div v-if="signedUser.avatar_url" class="user-info">
      <img
        class="user-icon"
        width="100"
        height="100"
        decoding="async"
        :src="signedUser.avatar_url"
        :alt="signedUser.full_name"
      />
      Hello「{{ signedUser.full_name }}」
    </div>
    <div v-else class="user">NO AUTH</div>
    <p class="user-debug">{{ signedUser }}</p>
  </article>
</template>

<style lang="ts" scoped>
css({
  '.user-info': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px',
  },
  '.user-icon': {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  '.user-debug': {
    color: '#ccc',
    marginTop: '16px',
  },
})
</style>

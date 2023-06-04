<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi'
import { LoginUser } from '~~/app/composables/useAuth'

const props = defineProps({
  signedUser: {
    type: Object as PropType<LoginUser>,
    required: true,
  },
})
</script>

<template>
  <article>
    <div v-if="props.signedUser.avatarUrl" class="user-info">
      <img
        class="user-icon"
        width="100"
        height="100"
        decoding="async"
        :src="props.signedUser.avatarUrl"
        :alt="props.signedUser.name"
      />
      Hello「{{ props.signedUser.name }}」
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

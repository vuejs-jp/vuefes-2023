<script setup lang="ts">
const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
})

const nameCardUrl = computed(() => `/users/${props.userId}`)
</script>

<template>
  <nuxt-link :to="nameCardUrl" class="alert-root">
    チケット購入のまたは紐付けが未完了です。プロフィール画面から登録してください。
  </nuxt-link>
</template>

<style lang="ts" scoped>
css({
  '.alert-root': {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: '{zindex.alert}',
    padding: '16px 17px',
    width: '100%',
    fontSize: 'calc(16*{fontSize.base})',
    fontWeight: 400,
    background: '{color.sangosyo}',
    color: '{color.white}',
    textDecoration: 'underline',
  },
})
</style>

<template>
  <a href="/register" class="alert-root">
    チケット購入のまたは紐付けが未完了です。プロフィール画面から登録してください。
  </a>
</template>

<style lang="ts" scoped>
css({
  '.alert-root': {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 100,
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

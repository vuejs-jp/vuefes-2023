<script setup lang="ts">
interface ErrorProps {
  error: { statusCode: string }
}
const props = defineProps<ErrorProps>()
</script>

<template>
  <div class="error">
    <nuxt-link to="/" title="トップへ戻る" class="error-item">
      Oooops, something is wrong \ {{ error.statusCode }} / error
    </nuxt-link>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.error': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  '.error-item': {
    fontSize: 18,
    fontWeight: 600,
  },
})
</style>

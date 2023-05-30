<script setup lang="ts">
interface ErrorProps {
  error: { statusCode: string }
}
const props = defineProps<ErrorProps>()
</script>

<template>
  <div class="error">
    <div class="error-modal">
      <nuxt-link to="/" title="トップへ戻る">
        <h2>Oooops, something is wrong \ {{ error.statusCode }} / error</h2>
        <h3>Please click here to return to the top of the website!</h3>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.error': {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundSize: 'cover',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: '100%',
      height: 'auto',
      backgroundImage: 'url(og/top.png)',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      backgroundBlendMode: 'lighten',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  },
  '.error-modal': {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid {color.vue.blue}',
    borderRadius: '20px',
    minHeight: '280px',
    '& a': {
      textAlign: 'center',
      color: '{color.vue.blue}',
      fontSize: '36px',
      fontWeight: 600,
    },
  },
  '@mobile': {
    '.error-modal': {
      padding: '20px',
      margin: 0,
      width: '92%',
      '& a': {
        fontSize: '30px',
      },
    },
  },
})
</style>

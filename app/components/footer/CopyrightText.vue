<script lang="ts" setup>
import { copyrightDetail } from '~/utils/constants'
</script>

<template>
  <p class="copy-right-detail" v-html="copyrightDetail" />
</template>

<style lang="ts" scoped>
css({
  '.copy-right-detail': {
    textAlign: 'right',
    fontSize: '12px',
  },
  '@media(max-width: 767px)': {
    '.copy-right-detail': {
      textAlign: 'center',
    },
  },
})
</style>

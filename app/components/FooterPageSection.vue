<script lang="ts" setup>
import CopyrightText from '~/components/footer/CopyrightText.vue'
import VueFesLogo from '~/assets/logo/vuefes_logo.svg'
</script>

<template>
  <section class="footer-section">
    <VueFesLogo class="footer-vuefes-logo" />
    <CopyrightText />
  </section>
</template>

<style lang="ts" scoped>
css({
  '.footer-section': {
    position: 'relative',
    background: '{color.vue-blue}',
    padding: '80px 32px',
    color: '{color.white}',
    textAlign: 'center',
    backgroundImage: 'url("~/assets/footer/background.svg")',
    backgroundPosition: '50% 100%',
  },
  '.footer-vuefes-logo': {
    margin: '0 auto 32px'
  }
})
</style>

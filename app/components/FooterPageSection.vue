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
    padding: '80px 32px',
    background: '{color.vue-blue}',
    backgroundImage: 'url("~/assets/footer/background.svg")',
    backgroundPosition: '50% 100%',
    textAlign: 'center',
    color: '{color.white}',
  },
  '.footer-vuefes-logo': {
    margin: '0 auto 32px',
    width: '246px',
    height: '44px',
  }
})
</style>

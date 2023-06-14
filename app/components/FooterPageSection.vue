<script lang="ts" setup>
import ContactLinks from '~/components/footer/ContactLinks.vue'
import PastEvents from '~/components/footer/PastEvents.vue'
import PrivacyPolicyAndCoc from '~/components/footer/PrivacyPolicyAndCoc.vue'
import CopyrightText from '~/components/footer/CopyrightText.vue'
import VueFesLogo from '~/assets/logo/vuefes_logo.svg'
</script>

<template>
  <section class="footer-section">
    <div class="footer-vuefes-logo">
      <VueFesLogo />
    </div>
    <div class="footer-info">
      <div v-if="!$device.isMobile" class="footer-info-links">
        <div class="contacts">
          <ContactLinks />
        </div>
        <div class="events">
          <PastEvents />
        </div>
        <PrivacyPolicyAndCoc />
      </div>
      <div v-if="!$device.isMobile" class="footer-copyright">
        <CopyrightText />
      </div>
    </div>
    <div v-if="$device.isMobile" class="footer-copyright">
      <CopyrightText />
    </div>
  </section>
</template>

<style lang="ts" scoped>
css({
  '.footer-section': {
    padding: '80px 32px',
    background: '{color.vue-blue}',
    backgroundImage: 'url("~/assets/footer/background.svg")',
    backgroundPosition: '50% 100%',
    display: 'grid',
    placeItems: 'center',
    overflow: 'hidden',
  },
  '.footer-vuefes-logo': {
    margin: 0,
  },
  '.footer-info-links': {
    display: 'none',
  },
  '.footer-copyright': {
    marginTop: '56px',
  },
  '@tablet': {
    '.footer-section': {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    },
    '.footer-info-links': {
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'column',
      '.contacts': {
        marginBottom: '32px',
      },
      '.events': {
        marginBottom: '16px',
      },
    },
    '.footer-copyright': {
      marginTop: '32px',
    },
  },
  '@mobile': {
    '.footer-section': {
      padding: '80px 40px',
    },
  },
})
</style>

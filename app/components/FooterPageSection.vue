<script lang="ts" setup>
import ContactLinks from '~/components/footer/ContactLinks.vue'
import PastEvents from '~/components/footer/PastEvents.vue'
import PrivacyPolicyAndCoc from '~/components/footer/PrivacyPolicyAndCoc.vue'
import CopyrightText from '~/components/footer/CopyrightText.vue'
import VueFesLogo from '~/assets/logo/vuefes_logo.svg'

const props = defineProps({
  hasAuth: {
    type: Boolean,
    required: false,
  },
})

const { isMobile } = useDevice()
</script>

<template>
  <section class="footer-section">
    <div class="footer-vuefes-logo">
      <VueFesLogo />
    </div>
    <div v-if="!hasAuth" class="footer-info">
      <div v-if="!isMobile" class="footer-info-links">
        <div class="contacts">
          <ContactLinks />
        </div>
        <div class="events">
          <PastEvents />
        </div>
        <PrivacyPolicyAndCoc />
      </div>
      <div v-if="!isMobile" class="footer-copyright">
        <CopyrightText />
      </div>
    </div>
    <div v-if="hasAuth" class="footer-info">
      <CopyrightText />
    </div>
    <div v-if="!hasAuth && isMobile" class="footer-copyright">
      <CopyrightText />
    </div>
  </section>
</template>

<style lang="ts" scoped>
css({
  '.footer-section': {
    padding: '80px 40px',
    background: '{color.vue-blue}',
    backgroundImage: 'url("~/assets/footer/background.svg")',
    backgroundPosition: '50% 100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    overflow: 'hidden',
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
  '@mobile': {
    '.footer-section': {
      padding: '80px 32px',
      display: 'grid',
      placeItems: 'center',
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
  },
})
</style>

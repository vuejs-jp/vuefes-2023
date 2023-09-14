<script lang="ts" setup>
import CrossLogo from '~/assets/logo/cross_logo.svg'
import ContactLinks from '~/components/footer/ContactLinks.vue'
import PastEventsMobile from '~/components/footer/PastEventsMobile.vue'
import PrivacyPolicyAndCoc from '~/components/footer/PrivacyPolicyAndCoc.vue'
import { useNav } from '~/composables/useNav'

const { navLinks } = useNav()

const emit = defineEmits(['toggle'])
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
const emitToggle = () => {
  emit('toggle')
}
</script>

<template>
  <transition name="fade">
    <div v-if="props.visible" class="mobile-menu">
      <ul>
        <li v-for="l in navLinks" :key="l.link">
          <nuxt-link :to="`${l.link}`" @click="emitToggle">
            {{ l.text }}
          </nuxt-link>
        </li>
        <li class="other-links">
          Vue Fes Japan
          <PastEventsMobile />
        </li>
        <li class="other-links">
          <PrivacyPolicyAndCoc @click="emitToggle" />
        </li>
      </ul>
      <!-- contact links -->
      <ContactLinks />
      <!-- close button -->
      <button class="close" @click="emitToggle">
        <CrossLogo />
      </button>
    </div>
  </transition>
</template>

<style lang="ts" scoped>
css({
  '.mobile-menu': {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: '{zindex.menu}',
    background: '{color.vue.blue}',
    color: '{color.white}',
    overflow: 'scroll',
    padding: 'calc({space.8} * 6) 0 calc({space.8} * 8)',
    'ul': {
      margin: '0 3vw',
      textAlign: 'center',
      'li': {
        padding: 'calc({space.8} * 2) 0',
        marginLeft: '40px',
        display: 'grid',
        justifyContent: 'flex-start',
        'a': {
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '1',
        },
      },
      '.other-links': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginLeft: '40px',
        fontSize: '20px',
      },
    },
  },
  '.close': {
    position: 'fixed',
    top: 'calc({space.8} * 4)',
    right: 'calc({space.8} * 4)',
  },
})
</style>

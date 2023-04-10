<script lang="ts" setup>
import VueFesLogo from '~/assets/logo/vuefes_logo.svg'
import TwitterLogo from '~/assets/logo/twitter_logo.svg'
import MenuLogo from '~/assets/logo/menu_logo.svg'
import CrossLogo from '~/assets/logo/cross_logo.svg'
import ContactLinks from '~/components/footer/ContactLinks.vue'
import PastEventsMobile from '~/components/footer/PastEventsMobile.vue'
import PrivacyPolicyAndCoc from '~/components/footer/PrivacyPolicyAndCoc.vue'
import { useNav } from '~/composables/useNav'
import { navLinks } from '~/utils/constants'

const { navRef, showNav } = useNav()

const showMenu = ref(false)
const toggleMenu = () => (showMenu.value = !showMenu.value)
</script>

<template>
  <nav
    ref="navRef"
    :style="
      showNav
        ? { top: 0, background: 'rgba(53, 73, 94, 0.9)' }
        : { top: -116, background: '#35495E' }
    "
  >
    <div class="nav-root">
      <nuxt-link to="/" aria-label="top">
        <VueFesLogo />
      </nuxt-link>
      <div v-if="$device.isDesktop || $device.isTablet" class="links">
        <ul v-for="l in navLinks" :key="l.link">
          <li>
            <nuxt-link :to="`/${l.link}`">{{ l.text }}</nuxt-link>
          </li>
        </ul>
        <a href="https://twitter.com/vuefes" aria-label="twitter" target="_blank" rel="noreferrer">
          <TwitterLogo />
        </a>
      </div>

      <div v-if="$device.isMobile">
        <transition name="fade">
          <div v-if="showMenu" class="mobile-menu">
            <ul>
              <li v-for="l in navLinks" :key="l.link">
                <nuxt-link :to="`/${l.link}`" @click="toggleMenu">
                  {{ l.text }}
                </nuxt-link>
              </li>
              <li class="other-links">
                Vue Fes Japan
                <PastEventsMobile />
              </li>
              <li class="other-links">
                <PrivacyPolicyAndCoc />
              </li>
            </ul>
            <div class="mobile-menu-contacts">
              <ContactLinks />
            </div>
          </div>
        </transition>
        <button v-if="showMenu" class="close" @click="toggleMenu">
          <CrossLogo />
        </button>
        <div class="links">
          <button v-if="!showMenu" @click="toggleMenu">
            <MenuLogo />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="ts" scoped>
css({
  'nav': {
    position: 'fixed',
    zIndex: 10,
    width: '100%',
  },
  '.nav-root': {
    padding: '24px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.mobile-menu': {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 10,
    background: '{color.vue.blue}',
    color: '{color.white}',
    'ul': {
      paddingTop: '80px',
      margin: '0 3vw',
      textAlign: 'center',
      'li': {
        padding: '1.5rem 0',
        marginLeft: '40px',
        display: 'grid',
        justifyContent: 'flex-start',
        'a': {
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '31px',
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
  '.mobile-menu-contacts': {
    position: 'absolute',
    bottom: '60px',
    left: '40px',
  },
  '.close': {
    position: 'fixed',
    top: '32px',
    right: '32px',
    zIndex: 10,
  },
  '.links': {
    display: 'flex',
    columnGap: '40px',
    'a': {
      color: '{color.white}',
      '&:hover': {
        color: '{color.vue.green}',
        transition: '.2s',
      },
      'svg': {
        fill: '{color.white}',
        '&:hover': {
          fill: '{color.vue.green}',
          transition: '.2s',
        },
      },
    },
  },
  '@media(min-width: 768px)': {
    '.nav-root': {
      padding: '16px 24px',
    },
    '.links': {
      'a': {
        padding: 0,
      },
    },
  },
})
</style>

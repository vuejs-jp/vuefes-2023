<script lang="ts" setup>
import VueFesLogo from '~/assets/logo/header_logo.svg'
import TwitterLogo from '~/assets/logo/twitter_logo.svg'
import MenuLogo from '~/assets/logo/menu_logo.svg'
import CrossLogo from '~/assets/logo/cross_logo.svg'
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
      <a href="/" aria-label="top">
        <VueFesLogo />
      </a>
      <div v-if="$device.isDesktop || $device.isTablet" class="links">
        <ul v-for="l in navLinks" :key="l.link">
          <li>
            <a :href="l.link">{{ l.text }}</a>
          </li>
        </ul>
        <a href="https://twitter.com/vuefes" aria-label="twitter" target="_blank" rel="noreferrer">
          <TwitterLogo />
        </a>
      </div>

      <div v-if="$device.isMobile">
        <transition name="fade">
          <div v-if="showMenu" class="mobile-menu">
            <ul v-for="l in navLinks" :key="l.link">
              <li>
                <a :href="l.link" @click="toggleMenu">{{ l.text }}</a>
              </li>
              <li>
                <a
                  href="https://twitter.com/vuefes"
                  aria-label="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterLogo />
                </a>
              </li>
            </ul>
          </div>
        </transition>
        <button v-if="showMenu" class="close" @click="toggleMenu">
          <CrossLogo />
        </button>
        <div class="links">
          <a
            href="https://twitter.com/vuefes"
            aria-label="twitter"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterLogo />
          </a>
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
    color: '#fff',
    'ul': {
      paddingTop: '15vh',
      margin: '0 3vw',
      textAlign: 'center',
      'li': {
        padding: '1.5rem 0',
        display: 'grid',
        placeItems: 'center',
        'a': {
          padding: '6px',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '31px',
        },
      },
    },
  },
  '.close': {
    position: 'fixed',
    top: 32,
    right: 32,
    zIndex: 10,
  },
  '.links': {
    display: 'flex',
    columnGap: '40px',
    'a': {
      color: '#fff',
      '&:hover': {
        color: '{color.vue.green}',
      },
      'svg': {
        fill: '#fff',
        '&:hover': {
          fill: '{color.vue.green}',
        },
      },
    },
  },
})
</style>

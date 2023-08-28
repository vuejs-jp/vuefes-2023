<script lang="ts" setup>
import MenuLogo from '~/assets/logo/menu_logo.svg'
import VueFesLogo from '~/assets/logo/vuefes_logo.svg'
import VueFesUserLogo from '~/assets/logo/vuefes_user_logo.svg'
import TwitterLogo from '~/assets/logo/twitter_logo.svg'
import LangSwitcher from '~/components/locale/LangSwitcher.vue'
import NavView from '~/components/nav/NavView.vue'
import { useNav } from '~/composables/useNav'
import { useLocaleSwitcher } from '~/composables/useLocaleSwitcher'
import { conferenceTitle } from '~/utils/constants'

const props = defineProps({
  hasAuth: {
    type: Boolean,
    required: false,
  },
  hasAlert: {
    type: Boolean,
    required: false,
  },
})

const { navLinks, navRef } = useNav()
const { isMobile } = useDevice()
const { switchLocale } = useLocaleSwitcher()
const htmlRef = ref()
const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
  htmlRef.value.style.overflow = showMenu.value ? 'hidden' : ''
}

onMounted(function () {
  htmlRef.value = document.querySelector('html')
})
</script>

<template>
  <nav ref="navRef" :style="{ top: hasAlert ? (isMobile ? '80px' : '50px') : '0px' }">
    <div class="nav-root">
      <h1>
        <nuxt-link to="/" aria-label="top">
          <template v-if="!hasAuth">
            <VueFesLogo />
          </template>
          <template v-if="hasAuth">
            <VueFesUserLogo />
          </template>
        </nuxt-link>
        <span class="sr-only">{{ conferenceTitle }}</span>
      </h1>
      <div v-if="!hasAuth" class="links">
        <ul v-for="l in navLinks" :key="l.link" class="link-items">
          <li>
            <nuxt-link :to="`${l.link}`">{{ l.text }}</nuxt-link>
          </li>
        </ul>
        <a
          class="twitter"
          href="https://twitter.com/vuefes"
          aria-label="twitter"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterLogo />
        </a>
        <LangSwitcher
          v-if="switchLocale"
          :top="hasAlert ? (isMobile ? '160px' : '130px') : '80px'"
        />
        <slot name="avatar" />
        <!-- hamburger-menu -->
        <button v-if="!showMenu" class="hamburger-menu" @click="toggleMenu">
          <MenuLogo />
        </button>
        <NavView :visible="showMenu" @toggle="toggleMenu" />
      </div>
      <div v-if="hasAuth">
        <slot name="auth" />
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
    backgroundColor: 'rgba(53, 73, 94, 0.9)',
  },
  '.nav-root': {
    padding: '24px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '.links': {
    display: 'flex',
    alignItems: 'center',
    columnGap: '40px',
  },
  '.link-items': {
    display: 'block',
  },
  '.link-items a': {
    color: '{color.white}',
    fontSize: 'calc(16*{fontSize.base})',
    '&:hover': {
      color: '{color.vue.green}',
      transition: '.2s',
    },
  },
  '.twitter': {
    'svg': {
      fill: '{color.white}',
      '&:hover': {
        fill: '{color.vue.green}',
        transition: '.2s',
      },
    },
  },
  '.hamburger-menu':{
    display: 'none',
  },
  '.sr-only': {
    position: 'absolute',
    left: '-10000px',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
  },
  '@tablet': {
     '.nav-root': {
      padding: '16px 24px',
    },
  },
  '@mobile': {
    '.twitter':{
      display: 'block',
    },
    '.links': {
      'ul': {
        display: 'none',
      },
      'a': {
        padding: 0,
      },
    },
    '.hamburger-menu':{
      display: 'block',
    },
  }
})
</style>

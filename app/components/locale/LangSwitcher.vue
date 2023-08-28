<script lang="ts" setup>
import ArrowDownLogo from '~/assets/logo/arrow_down_logo.svg'
import LangItem from '~/components/locale/LangItem.vue'
import { useDialog } from '~/composables/useDialog'
import { useLocaleSwitcher } from '~/composables/useLocaleSwitcher'
import { useToast } from '~/composables/useToast'

const props = defineProps({
  top: {
    type: String,
    required: true,
  },
})

const { handle, isShow } = useDialog()
const { currentLocale, availableLocales } = useLocaleSwitcher()
const { onSuccess } = useToast()

const onClick = (localeCode: string) => {
  handle(isShow ? false : true)
  onSuccess(
    `${
      localeCode === 'ja' ? '日本語' : localeCode === 'en' ? '英語' : 'やさしいにほんご'
    } に切り替えました。`,
    3000,
  )
}
</script>

<template>
  <button class="switcher-button" @click="() => handle(isShow ? false : true)">
    Language
    <ArrowDownLogo />
  </button>
  <div v-if="isShow" class="switcher-root" :style="{ top: top }">
    <ul>
      <li v-for="locale in availableLocales" :key="locale.code">
        <LangItem
          :locale="locale"
          :active="locale.code === currentLocale"
          @on-click="() => onClick(locale.code)"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.switcher-button': {
    display: 'flex',
    color: '{color.white}',
    fontSize: 'calc(16*{fontSize.base})',
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
  '.switcher-root': {
    position: 'absolute',
    right: '2%',
    '::v-deep(ul)': {
      background: '{color.white}',
      width: '168px',
      borderRadius: '4px',
    },
  },
})
</style>

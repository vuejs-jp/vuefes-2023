<script lang="ts" setup>
import { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

const { locales } = useI18n({ useScope: 'global' })
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value as unknown as LocaleObject
})
</script>

<template>
  <fieldset>
    <ul>
      <li v-for="locale in availableLocales" :key="locale.code">
        <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.code }}</nuxt-link>
      </li>
    </ul>
  </fieldset>
</template>

<style lang="ts" scoped>
css({
  'ul': {
    'backgroundColor': 'white',
    'borderRadius': '4px',
    'overflow': 'hidden'
  },
  'li': {
    'width': '200px'
  },
  'li a': {
    'display': 'block',
    'width': '200px',
    'padding': '2px 8px',
    '&:hover': {
      'backgroundColor': '#eee'
    }
  }
})
</style>

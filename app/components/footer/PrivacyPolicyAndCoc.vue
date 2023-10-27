<script setup lang="ts">
import { useLocaleCurrent } from '~/composables/useLocaleCurrent'
import TextButton from '~/components/button/TextButton.vue'

interface PrivacyPolicyAndCocEmit {
  (e: 'on-click'): void
}
const emit = defineEmits<PrivacyPolicyAndCocEmit>()

const { locale } = useLocaleCurrent()
</script>

<template>
  <div class="doc-root">
    <TextButton
      :to="`${locale === 'ja' ? '/' : `/${locale}/`}events`"
      underline
      @click.stop="$emit('on-click')"
    >
      {{ $t('words.events') }}
    </TextButton>
    <TextButton
      :to="`${locale === 'ja' ? '/' : `/${locale}/`}privacy`"
      underline
      @click.stop="$emit('on-click')"
    >
      {{ $t('words.privacypolicy') }}
    </TextButton>
    <TextButton
      :to="`${locale === 'ja' ? '/' : `/${locale}/`}code-of-conduct`"
      underline
      @click.stop="$emit('on-click')"
    >
      {{ $t('words.codeofconduct') }}
    </TextButton>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.doc-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '36px',
    'a': {
      padding: '4px 0',
      textDecoration: 'underline',
      color: '{color.white}',
      fontSize: '18px',
    },
  },
  '@tablet': {
    gap: '24px',
    '.doc-root': {
      'a': {
        fontSize: '14px',
      },
    },
  },
  '@mobile': {
    '.doc-root': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      'a': {
        textDecoration: 'none',
      },
    },
  },
})
</style>

<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import RoundButton from '~/components/button/RoundButton.vue'
</script>

<template>
  <div class="handson">
    <h3 id="handson">ハンズオン</h3>
    <div class="explain">
      <MarkDownText path="handson" />
    </div>
    <div class="center">
      <!--
      <i18n-t keypath="top.handson_schedule_limit" tag="p" class="deadline">
        <em>{{ $t('words.handson_deadline_date') }}</em>
      </i18n-t>
      -->
      <div class="apply">
        <RoundButton href="#" target="_blank" rel="noreferrer">
          {{ $t('words.apply_handson') }}
        </RoundButton>
      </div>
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.center': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 1.5)',
  },
  '.handson': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 3)',
    '::v-deep(h3)': {
      textAlign: 'center',
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: '1',
    },
  },
  '.explain': {
    fontSize: 'calc(18*{fontSize.base})',
    fontWeight: 500,
    lineHeight: 1.8,
    'strong': {
      fontWeight: 'bold',
    },
  },
  '.apply': {
    width: '320px'
  },
  '.deadline': {
    color: '{color.vue.blue}',
    fontSize: 'calc(24*{fontSize.base})',
    'em': {
      fontStyle: 'normal',
      fontWeight: 700,
    },
  },
})
</style>

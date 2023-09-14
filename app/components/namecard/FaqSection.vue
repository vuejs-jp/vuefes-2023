<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
</script>

<template>
  <div class="faq">
    <h3 id="faq">FAQ</h3>
    <MarkDownText path="faq" />
  </div>
</template>

<style lang="ts" scoped>
css({
  '.faq': {
    display: 'grid',
    gap: 'calc({space.8} * 3)',
    '::v-deep(h3)': {
      textAlign: 'center',
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: '1',
    },
    '::v-deep(h4)': {
      marginBottom: 'calc({space.8} * 1.5)',
      fontSize: 'calc(18*{fontSize.base})',
      fontWeight: 'bold',
    },
    '::v-deep(p)': {
      marginBottom: 'calc({space.8} * 3)',
      fontSize: 'calc(18*{fontSize.base})',
      lineHeight: '1.6',
      '&:not(:last-child)': {
        marginBottom: 'calc({space.8} * 4)',
      }
    },
  },
  '@mobile': {
    '.faq': {
      '::v-deep(h3)': {
        fontSize: '24px',
      },
      '::v-deep(p)': {
        marginBottom: 'calc({space.8} * 3)',
        fontSize: 'calc(16*{fontSize.base})',
      }
    }
  }
})
</style>

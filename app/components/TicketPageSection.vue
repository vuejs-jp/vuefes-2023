<script setup lang="ts">
import Ticket from '~/assets/namecard/ticket.svg'
import Namecard from '~/assets/namecard/namecard.svg'
import ProcessCard from '~/components/namecard/ProcessCard.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import CommentTitle from '~/components/CommentTitle.vue'
</script>

<template>
  <section>
    <div class="ticket-root">
      <SectionTitle
        id="ticket"
        color="vue.blue"
        :title="'Ticket & Namecard'"
        :yamato-title="'チケット & ネームカード'"
      />
      <div class="process-wrapper">
        <ProcessCard color="vue.green">
          <template #icon>
            <Ticket />
          </template>
          <template #default>
            <h4>チケットのご購入</h4>
            <p>Ticket</p>
          </template>
        </ProcessCard>
        <ProcessCard color="typescript.blue">
          <template #icon>
            <Namecard />
          </template>
          <template #default>
            <h4>ネームカードの作成</h4>
            <p>Namecard</p>
          </template>
        </ProcessCard>
      </div>
      <CommentTitle color="vue.green" title="お早めにご購入を！" />
      <h3>チケット</h3>
      <CommentTitle color="vue.green" title="必ず事前にご確認ください！" />
      <h3>ネームカード</h3>
    </div>
  </section>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: '120px 20px 120px',
  },
  '.ticket-root': {
    display: 'grid',
    gap: 'calc({space.8} * 5)',
    maxWidth: '768px',
    margin: '0 auto',
    width: '100%',
    'grid-template-columns': 'minmax(0, 1fr)',
    '::v-deep(h3)': {
      textAlign: 'center',
      color: '{color.vue.blue}',
      fontSize: 'calc(32*{fontSize.base})',
      fontWeight: 700,
    },
  },
  '.process-wrapper': {
    display: 'flex',
    justifyContent: 'center',
    gap: 'calc({space.8} * 5)',
  },
})
</style>

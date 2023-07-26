<script setup lang="ts">
import Ticket from '~/assets/namecard/ticket.svg'
import Namecard from '~/assets/namecard/namecard.svg'
import MarkDownText from '~/components/MarkDownText.vue'
import TicketCard from '~/components/namecard/TicketCard.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import RoundButton from '~/components/button/RoundButton.vue'
</script>

<template>
  <SectionTitle id="ticket" color="vue.blue" :title="'Ticket'" yamato-title="チケット" />
  <div class="explain">
    <MarkDownText path="ticket" />
  </div>
  <div class="center">
    <i18n-t keypath="top.tickets_schedule_limit" tag="p" class="deadline">
      <em>{{ $t('words.tickets_deadline_date') }}</em>
    </i18n-t>
    <!-- チケットを購入 -->
    <RoundButton href="#" target="_blank" rel="noreferrer">
      {{ $t('words.buy_ticket') }}
    </RoundButton>
  </div>
  <h3>
    <CommentTitle color="vue.green" title="お早めにご購入を！" />
    チケット種別
  </h3>
  <div class="process-wrapper">
    <TicketCard color="vue.green">
      <template #icon>
        <Ticket />
      </template>
      <template #default>
        <h4>チケットのご購入</h4>
        <p>Ticket</p>
      </template>
    </TicketCard>
    <TicketCard color="typescript.blue">
      <template #icon>
        <Namecard />
      </template>
      <template #default>
        <h4>ネームカードの作成</h4>
        <p>Namecard</p>
      </template>
    </TicketCard>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.center': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 1.5)',
  },
  '.explain': {
    fontSize: 'calc(18*{fontSize.base})',
    fontWeight: 500,
    lineHeight: 1.8,
    'strong': {
      fontWeight: 'bold',
    },
  },
  '.deadline': {
    color: '{color.vue.blue}',
    fontSize: 'calc(24*{fontSize.base})',
    'em': {
      fontStyle: 'normal',
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

<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import TicketCard from '~/components/namecard/TicketCard.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import RoundButton from '~/components/button/RoundButton.vue'
</script>

<template>
  <div class="ticket">
    <SectionTitle id="ticket" color="vue.blue" :title="'Ticket'" yamato-title="チケット" />
    <div class="explain">
      <MarkDownText path="ticket" />
    </div>
    <div class="center">
      <!--
      <i18n-t keypath="top.tickets_schedule_limit" tag="p" class="deadline">
        <em>{{ $t('words.tickets_deadline_date') }}</em>
      </i18n-t>
      -->
      <!-- チケットを購入 -->
      <div class="apply">
        <RoundButton href="#" target="_blank" rel="noreferrer">
          {{ $t('words.buy_ticket') }}
        </RoundButton>
      </div>
    </div>
    <CommentTitle color="vue.green" title="お早めにご購入を！" />
    <h3>チケット種別</h3>
    <div class="process-wrapper">
      <TicketCard>
        <template #image>
          <img alt="" src="/tickets/attendee.png" width="400" height="225" decoding="async" />
        </template>
        <template #action>
          <a href="#" target="_blank" rel="noreferrer">一般チケット</a>
        </template>
        <template #default>
          <div class="price-list">
            <div class="price">
              <i18n-t keypath="top.ticket_early_price" tag="p">
                <strong>7,000</strong>
              </i18n-t>
              <span class="early-price">{{ $t('top.ticket_early_price_explain') }}</span>
            </div>
            <i18n-t keypath="top.ticket_price" tag="p" class="price">
              <strong>8,000</strong>
            </i18n-t>
          </div>
        </template>
      </TicketCard>
      <TicketCard>
        <template #image>
          <img alt="" src="/tickets/attendee+party.png" width="400" height="225" decoding="async" />
        </template>
        <template #action>
          <a href="#" target="_blank" rel="noreferrer">一般＋アフターパーティチケット</a>
        </template>
        <template #default>
          <div class="price-list">
            <div class="price">
              <i18n-t keypath="top.ticket_early_price" tag="p">
                <strong>10,000</strong>
              </i18n-t>
              <span class="early-price">{{ $t('top.ticket_early_price_explain') }}</span>
            </div>
            <i18n-t keypath="top.ticket_price" tag="p" class="price">
              <strong>11,000</strong>
            </i18n-t>
          </div>
        </template>
      </TicketCard>
      <TicketCard>
        <template #image>
          <img alt="" src="/tickets/handson.png" width="400" height="225" decoding="async" />
        </template>
        <template #action>
          <nuxt-link to="/#handson">ハンズオンチケット</nuxt-link>
        </template>
        <template #default>
          <div class="price">
            <strong>無料</strong>
          </div>
          <p class="price-des">
            ※ハンズオンのみでも、別途、一般もしくは一般＋アフターパーティーチケットの購入が必要です。<br />※詳しくは<nuxt-link
              to="/#handson"
              >ハンズオン</nuxt-link
            >についてをご覧ください。
          </p>
        </template>
      </TicketCard>
      <TicketCard>
        <template #image>
          <img
            alt=""
            src="/tickets/personal-sponsor.png"
            width="400"
            height="225"
            decoding="async"
          />
        </template>
        <template #action>
          <nuxt-link to="/#personal-sponsor">個人スポンサーチケット</nuxt-link>
        </template>
        <template #default>
          <i18n-t keypath="top.personal_sponsor_price" tag="p" class="price">
            <strong>10,000</strong>
          </i18n-t>
          <p class="price-des">
            ※当日来場される方は、別途、一般もしくは一般＋アフターパーティーチケットの購入が必要です。<br />※詳しくは<nuxt-link
              to="/#personal-sponsor"
              >個人スポンサー</nuxt-link
            >についてをご覧ください。
          </p>
        </template>
      </TicketCard>
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
  '.ticket': {
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
  '.process-wrapper': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 'calc({space.8} * 5)',
    '::v-deep(a)': {
      '&:hover': {
        transition: '.2s',
      },
    },
  },
  '.price-list': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 1)',
    paddingBottom: 'calc({space.8} * 2)',
  },
  '.price': {
    textAlign: 'right',
    color: '{color.vue.blue}',
    fontSize: 'calc(18*{fontSize.base})',
    fontWeight: 500,
    lineHeight: 1.8,
    '::v-deep(strong)': {
      fontSize: 'calc(32*{fontSize.base})',
      fontWeight: 700,
      lineHeight: 1,
    },
  },
  '.early-price': {
    color: '{color.vue.blue}',
    fontSize: 'calc(12*{fontSize.base})',
    fontWeight: 500,
    lineHeight: 1.8,
  },
  '.price-des': {
    padding: '0 calc({space.8} * 6.25)',
    color: '{color.vue.blue}',
    fontSize: 'calc(12*{fontSize.base})',
    fontWeight: 500,
    lineHeight: 1.8,
    '::v-deep(a)': {
      textDecoration: 'underline',
      '&:hover': {
        opacity: 0.4,
        transition: '.2s',
      },
    },
  },
})
</style>

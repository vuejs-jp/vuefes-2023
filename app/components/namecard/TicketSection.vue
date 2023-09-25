<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import TicketCard from '~/components/namecard/TicketCard.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import { ticketUrl } from '~/utils/constants'
</script>

<template>
  <div class="ticket">
    <SectionTitle id="ticket" color="vue.blue" :title="'Ticket'" yamato-title="チケット" />
    <div class="explain">
      <MarkDownText path="ticket" />
    </div>
    <div class="center">
      <!--
      <i18n-t keypath="top.tickets_schedule_limit" tag="p" class="deadline" scope="global">
        <em>{{ $t('words.tickets_deadline_date') }}</em>
      </i18n-t>
      -->
      <!-- チケットを購入 -->
      <div class="apply">
        <RoundButton :href="ticketUrl" target="_blank" rel="noreferrer">
          {{ $t('words.buy_ticket') }}
        </RoundButton>
      </div>
    </div>
    <CommentTitle color="vue.green" title="お早めにご購入を！" />
    <h3>{{ $t('top.ticket_type') }}</h3>
    <div class="process-wrapper">
      <TicketCard>
        <template #image>
          <img alt="" src="/tickets/attendee.png" width="400" height="225" decoding="async" />
        </template>
        <template #action>
          <a :href="ticketUrl" target="_blank" rel="noreferrer"> {{ $t('top.general_ticket') }}</a>
        </template>
        <template #default>
          <div class="price-list">
            <div class="price">
              <i18n-t keypath="top.ticket_early_price" tag="p" scope="global">
                <strong>7,000</strong>
              </i18n-t>
              <span class="early-price">{{ $t('top.ticket_early_price_explain') }}</span>
            </div>
            <i18n-t keypath="top.ticket_price" tag="p" class="price" scope="global">
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
          <a :href="ticketUrl" target="_blank" rel="noreferrer">
            {{ $t('top.after_party_ticket') }}</a
          >
        </template>
        <template #default>
          <div class="price-list">
            <div class="price">
              <i18n-t keypath="top.ticket_early_price" tag="p" scope="global">
                <strong>10,000</strong>
              </i18n-t>
              <p class="early-price">{{ $t('top.ticket_early_price_explain') }}</p>
              <p class="early-price-notice">{{ $t('top.ticket_early_price_notice') }}</p>
            </div>
            <i18n-t keypath="top.ticket_price" tag="p" class="price" scope="global">
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
          <a
            ><s>{{ $t('top.handson_ticket') }}</s></a
          >
        </template>
        <template #default>
          <div class="price">
            <s><strong>無料</strong></s>
          </div>
          <i18n-t keypath="top.handson_ticket_explain" tag="p" class="price-des">
            <nuxt-link to="/#handson">
              {{ $t('top.handson') }}
            </nuxt-link>
          </i18n-t>
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
          <nuxt-link to="/#personal-sponsor">
            {{ $t('top.personal_sponsor_ticket') }}
          </nuxt-link>
        </template>
        <template #default>
          <i18n-t keypath="top.personal_sponsor_price" tag="p" class="price" scope="global">
            <strong>10,000</strong>
          </i18n-t>
          <i18n-t keypath="top.personal_sponsor_ticket_explain" tag="p" class="price-des">
            <nuxt-link to="/#personal-sponsor">
              {{ $t('top.personal_sponsor') }}
            </nuxt-link>
          </i18n-t>
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
    ':not(:last-child)': {
      paddingBottom: 'calc({space.8} * 3)',
    },
  },
  '.apply': {
    width: '320px',
    textAlign: 'center',
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
    // paddingBottom: 'calc({space.8} * 2)',
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
  '.early-price-notice': {
    color: '{color.sangosyo}',
    fontSize: 'calc(12*{fontSize.base})',
    fontWeight: 700,
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
  '@mobile': {
    '.ticket': {
      '::v-deep(h3)': {
        fontSize: '26px',
      }
    },
    '.explain': {
      fontSize: 'calc(16*{fontSize.base})',
    },
    '.price': {
      textAlign: 'center',
    }
  },
})
</style>

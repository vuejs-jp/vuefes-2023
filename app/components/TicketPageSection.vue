<script setup lang="ts">
import Arrow3 from '~/assets/namecard/arrow3.svg'
import Ticket from '~/assets/namecard/ticket.svg'
import Namecard from '~/assets/namecard/namecard.svg'
import MarkDownText from '~/components/MarkDownText.vue'
import TicketCard from '~/components/namecard/TicketCard.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import RoundButton from '~/components/button/RoundButton.vue'
</script>

<template>
  <section>
    <div class="ticket-root">
      <SectionTitle id="ticket" color="vue.blue" :title="'Ticket'" yamato-title="チケット" />
      <div class="explain">
        <MarkDownText path="ticket" />
      </div>
      <i18n-t keypath="top.tickets_schedule_limit" tag="p" class="deadline">
        <em>{{ $t('words.tickets_deadline_date') }}</em>
      </i18n-t>
      <div class="center">
        <!-- チケットを購入 -->
        <RoundButton href="#" target="_blank" rel="noreferrer">
          {{ $t('words.buy_ticket') }}
        </RoundButton>
      </div>
      <h3>
        <CommentTitle color="vue.green" title="お早めにご購入を！" />
        チケット
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

      <div>
        <Arrow3 class="arrow" />
      </div>

      <h3><CommentTitle color="vue.green" title="必ず事前にご確認ください！" />ネームカード</h3>
      <div class="explain">
        <MarkDownText path="namecard" />
      </div>
      <img
        class="ticket-img"
        src="https://placehold.jp/592x395.png"
        alt=""
        width="592"
        height="395"
        decoding="async"
      />
      <i18n-t keypath="top.namecard_schedule_limit" tag="p" class="deadline">
        <em>{{ $t('words.namecard_deadline_date') }}</em>
      </i18n-t>
      <div class="center">
        <!-- ネームカードを作成 -->
        <RoundButton href="#" target="_blank" rel="noreferrer">
          {{ $t('words.create_namecard') }}
        </RoundButton>
      </div>

      <h3>ハンズオン</h3>
      <div class="explain">
        <MarkDownText path="handson" />
      </div>
      <i18n-t keypath="top.handson_schedule_limit" tag="p" class="deadline">
        <em>{{ $t('words.handson_deadline_date') }}</em>
      </i18n-t>
      <div class="center">
        <RoundButton href="#" target="_blank" rel="noreferrer">
          {{ $t('words.apply_handson') }}
        </RoundButton>
      </div>

      <!-- 最新情報は、Vue Fes Japan の Twitter をご確認ください -->
      <i18n-t keypath="top.namecard_infolink" tag="p" class="twitter-text center">
        <a
          href="https://twitter.com/vuefes"
          target="_blank"
          class="twitter-link"
          rel="noreferrer"
          >{{ $t('words.vuefes_twitter') }}</a
        >
      </i18n-t>
    </div>
  </section>
  <VoiceAudioSpectrum />
</template>

<style lang="ts" scoped>
css({
  '.center': {
    textAlign: 'center',
  },
  'section': {
    padding: '120px 20px 120px',
    backgroundColor: '#eee'
  },
  '.ticket-root': {
    display: 'grid',
    gap: 'calc({space.8} * 5)',
    maxWidth: '768px',
    margin: '0 auto',
    width: '100%',
    fontSize: 'calc(18*{fontSize.base})',
    color: '{color.vue.blue}',
    'grid-template-columns': 'minmax(0, 1fr)',
    '::v-deep(h3)': {
      textAlign: 'center',
      color: '{color.vue.blue}',
      fontSize: 'calc(32*{fontSize.base})',
      fontWeight: 700,
    },
    '::v-deep(h3 p)': {
      marginBottom: 'calc({space.8} * 1)'
    }
  },
  '.explain': {
    fontSize: 'calc(18*{fontSize.base})',
    fontWeight: 500,
    lineHeight: 1.8,
    'strong': {
      fontWeight: 'bold'
    }
  },
  '.deadline': {
    color: '{color.vue.blue}',
    fontSize: 'calc(24*{fontSize.base})',

    'em': {
      fontStyle: 'normal',
      fontWeight: 700,
    },
  },
  '.ticket-img': {
    display: 'block',
    margin: '0 auto'
  },
  '.ticket-limit': {
    fontSize: 'calc(24*{fontSize.base})',
  },
  '.process-wrapper': {
    display: 'flex',
    justifyContent: 'center',
    gap: 'calc({space.8} * 5)',
  },
  '.arrow': {
    margin: '0 auto'
  },
  '.twitter-text': {
      fontSize: '18px',
      color: '{color.vue.blue}',
      margin: '0 auto',
  },
  '.twitter-link': {
      color: '{color.vue.green}',
      textDecoration: 'underline',

      '&:hover': {
          transition: '.2s',
      },
  },
})
</style>

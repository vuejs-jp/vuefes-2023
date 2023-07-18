<script setup lang="ts">
import Arrow3 from '~/assets/namecard/arrow3.svg'
import Ticket from '~/assets/namecard/ticket.svg'
import Namecard from '~/assets/namecard/namecard.svg'
import ProcessCard from '~/components/namecard/ProcessCard.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import RoundButton from '~/components/button/RoundButton.vue'
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
      <p class="ticket-des center">
        (仮文言) Vue Fes Japan 2023 では、<br />
        <strong>ご入場にはチケットの購入とネームカードの作成が必要です！</strong>
      </p>
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

      <h3>
        <CommentTitle color="vue.green" title="お早めにご購入を！" />
        チケット
      </h3>
      <p>
        (仮文言) Vue Fes Japan 2023 では、事前チケットを販売中です。<br />
        チケットの事前販売は、2023/00/00（あ）XX:XXに締め切らせていただきます。
      </p>
      <div class="center">
        <!-- チケットを購入 -->
        <RoundButton href="#" target="_blank" rel="noreferrer">
          {{ $t('words.buy_ticket') }}
        </RoundButton>
      </div>
      <p class="ticket-limit center">チケットの事前販売: 2023/00/00（あ）XX:XXまで</p>
      <p>
        (仮文言) Vue Fes Japan
        をより楽しむために、以下からオリジナルのネームカードを手に入れましょう！
      </p>
      <div>
        <Arrow3 class="arrow" />
      </div>

      <h3><CommentTitle color="vue.green" title="必ず事前にご確認ください！" />ネームカード</h3>
      <p>
        (仮文言)
        事前にアカウント情報を登録して頂いた参加者限定で、当日配布するチケットをオリジナルのネームカードとして配布いたします。
      </p>
      <img
        class="ticket-img"
        src="https://placehold.jp/592x395.png"
        alt=""
        width="592"
        height="395"
        decoding="async"
      />
      <p class="ticket-limit center">登録期限: 2023/00/00（あ）XX:XXまで</p>
      <div class="center">
        <!-- ネームカードを作成 -->
        <RoundButton href="#" target="_blank" rel="noreferrer">
          {{ $t('words.create_namecard') }}
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
  '.ticket-des': {
    fontSize: 'calc(24*{fontSize.base})',
    lineHeight: 1.8,
    'strong': {
      fontWeight: 'bold'
    }
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

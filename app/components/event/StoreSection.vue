<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import { storeMenu } from '~/utils/store.constants'
import { storeUrl } from '~/utils/constants'
</script>

<template>
  <section>
    <div class="store-root">
      <div class="store-title">
        <CommentTitle color="vue.green" title="今年もやります" />
        <h3 id="store">Vue Fes Store</h3>
        <div class="explain"><MarkDownText path="store" /></div>
      </div>

      <div class="store-menu">
        <div v-for="menu in storeMenu" :key="menu.name" class="store-card">
          <img
            width="308"
            height="308"
            :alt="`${menu.imgAlt}の写真`"
            :src="`${menu.imgSrc}`"
            decoding="async"
          />
          <div class="name">{{ menu.name }}</div>
          <div class="price">{{ menu.price }}</div>
          <div class="text">{{ menu.text }}</div>
          <div class="supplement">
            <div v-if="menu.color" class="color">カラー：{{ menu.color }}</div>
            <div class="size">サイズ：{{ menu.size }}</div>
          </div>
        </div>
      </div>

      <div class="store-info">
        <div class="store-purchase">
          <div class="sub-title">
            <h6>購入方法</h6>
            <p>購入方法は以下の2種類があります。</p>
          </div>
          <div class="pre-order">
            <MarkDownText path="pre-order" />
          </div>
          <div class="button">
            <RoundButton :href="storeUrl" target="_blank" rel="noreferrer" class="button">
              {{ $t('words.pre_order') }}
            </RoundButton>
          </div>
          <div class="current-day-sales">
            <MarkDownText path="current-day-sales" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="ts" scoped>
css({
  '.store-root': {
    color: '{color.vue.blue}',
    background: '{color.white}',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc({space.8} * 10)',
    justifyContent: 'center',
  },

  '.store-title': {
    display: 'grid',
    gap: 'calc({space.8} * 3)',
    textAlign: 'center',
    margin: 'calc({space-8} * 8) auto 0',
    maxWidth: '760px',
    '::v-deep(h3)': {
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: '1',
    },
  },
  '.explain': {
    maxWidth: '760px',
    display: 'flex',
    justifyContent: 'center',
    '::v-deep(p)': {
      lineHeight: '1.8',
      textAlign: 'left',
      marginBottom: '2em',
    }
  },

  '.store-menu': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '28px',
    justifyContent: 'center',
  },
  '.store-card': {
    width: '308px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
  },
  '.name': {
    fontWeight: 'bold',
    lineHeight: '1',
  },
  '.text': {
    width: '308px',
  },
  '.price': {
    fontSize: '22px',
    fontWeight: 'bold',
    lineHeight: '1',
  },

  '.store-info': {
    display: 'flex',
    justifyContent: 'center',
  },
  '.store-purchase': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '768px',
    gap: '2em',
    '::v-deep(h6)': {
      fontSize: '22px',
      fontWeight: 'bold',
      lineHeight: '1',
    },
  },
  '.sub-title': {
    display: 'grid',
    gap: 'calc({space.8} * 1)',
  },
  'pre-order': {
    display: 'grid',
    gap: 'calc({space.8} * 1)',
    '::v-deep(p)': {
      textAlign: 'left',
    }
  },
  '.button': {
    display: 'flex',
    justifyContent: 'center'
  },
  '@tablet': {
    '.store-card': {
      '--img-size': '232px',
      maxWidth: '232px',
    },
    '.text': {
      width: '232px',
    },
  },
  '@mobile': {
    '.store-root': {
      padding: '20px',
    },
    '.store-card': {
      '--img-size': '329px',
      maxWidth: '329px',
    },
    '.text': {
      width: '329px',
    },
  },
});
</style>

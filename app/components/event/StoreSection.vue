<script setup lang="ts">
import MarkDownText from '~/components/MarkDownText.vue'
import CommentTitle from '~/components/CommentTitle.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import { storeMenu } from '~/utils/store.constants'
import { storeUrl } from '~/utils/constants'
import { closedPreOrder } from '~/utils/status.constants'
</script>

<template>
  <section>
    <div class="store-root">
      <div class="store-title">
        <CommentTitle color="vue.green" :title="$t('top.do_again_this_year')" />
        <h3 id="store">Vue Fes Store</h3>
        <div class="explain"><MarkDownText path="store" /></div>
      </div>

      <div class="store-menu">
        <div v-for="menu in storeMenu" :key="menu.nameKey" class="store-card">
          <img
            width="308"
            height="308"
            :alt="`Vue Fes ${$t(`top.${menu.nameKey}`)}'s picture'`"
            :src="`${menu.imgSrc}`"
            decoding="async"
          />
          <div class="name">{{ $t(`top.${menu.nameKey}`) }}</div>
          <div class="price">{{ menu.price }}</div>
          <div class="text">{{ $t(`top.${menu.textKey}`) }}</div>
          <div class="supplement">
            <i18n-t keypath="top.store_item_color" tag="div" class="color" scope="global">
              {{ menu.color }}
            </i18n-t>
            <i18n-t keypath="top.store_item_size" tag="div" class="size" scope="global">
              {{ menu.size }}
            </i18n-t>
          </div>
        </div>
      </div>

      <div class="store-info">
        <div class="store-purchase">
          <div class="sub-title">
            <h6>{{ $t('top.payment_method') }}</h6>
            <p>{{ $t('top.payment_method_explain') }}</p>
          </div>
          <div class="pre-order">
            <MarkDownText path="pre-order" />
          </div>
          <div class="button">
            <RoundButton
              :href="storeUrl"
              target="_blank"
              rel="noreferrer"
              class="button"
              :disabled="closedPreOrder"
            >
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
    },
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
    },
  },
  '.button': {
    display: 'flex',
    justifyContent: 'center',
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
      gap: 'calc({space.8} * 0)',
    },
    '.store-title': {
      '::v-deep(h3)': {
        fontSize: '24px',
      },
    },
    '.store-card': {
      '--img-size': '329px',
      maxWidth: '329px',
      'img': {
        display: 'block',
        maxWidth: '80%',
        margin: '0 auto',
      },
    },
    '.text': {
      width: 'auto',
    },
  },
})
</style>

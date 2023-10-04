<script setup lang="ts">
import { Role, Status } from '~/types/app'
import LogoutLogo from '~/assets/logo/logout_logo.svg'
import FacebookLogo from '~/assets/logo/facebook_logo.svg'
import TwitterLogoBlue from '~/assets/logo/twitter_logo_blue.svg'
import StatusCard from '~/components/namecard/StatusCard.vue'
import AvatarCard from '~/components/namecard/AvatarCard.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import TextButton from '~/components/button/TextButton.vue'
import useAuth from '~/composables/useAuth'
import { useNamecardStatus } from '~/composables/useNamecardStatus'
import { useUser } from '~/composables/useUser'
import { calendarUrl, twitterDomainUrl } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

definePageMeta({
  middleware: ['error'],
})

const route = useRoute()
const userId = route.params.id as string
const { signOut, hasAuth } = useAuth()
const { eventUser, error } = await useUser(userId)
const errorMsg = error?.message || ''

/**
 * status card
 */
let cardStatus: Status = eventUser?.activated_at ? 'registered' : 'failed'
if (errorMsg) cardStatus = 'nouser'
const { message } = useNamecardStatus()
const { title: statusTitle, detail: statusDetail } = message(cardStatus)

/**
 * meta
 */
const pageTitle = `${eventUser?.display_name || '参加者'} | ${conferenceTitle}`
let description = eventUser
  ? `${eventUser?.display_name || '参加者'} の参加者情報を掲載しています。`
  : 'チケット購入状況との照合に失敗しました'
if (errorMsg) description = statusTitle
const url = `${linkUrl}users/${userId}`

useHead({
  titleTemplate: (titleChunk) => pageTitle,
  meta: [
    ...generalOg({
      title: pageTitle,
      description: description,
      url,
    }),
    ...twitterOg({
      title: pageTitle,
      description: description,
      url,
    }),
  ],
})

// mock
// const avatar = {
//   name: 'jiyuujin',
//   avatarUrl: 'https://avatars.githubusercontent.com/u/9650581',
//   role: 'attendee',
// } as const
</script>

<template>
  <NavPageSection has-auth>
    <template #auth>
      <TextButton v-if="hasAuth" @click="signOut">
        <template #icon>
          <LogoutLogo />
        </template>
        <template #default> Logout </template>
      </TextButton>
    </template>
  </NavPageSection>
  <main>
    <section>
      <StatusCard
        :title="statusTitle"
        :detail="statusDetail"
        :has-error="cardStatus !== 'registered'"
      />
      <!-- ネームカード -->
      <h2>{{ $t('words.namecard') }}</h2>
      <AvatarCard
        :signed-user="{
          full_name: eventUser?.display_name || '参加者',
          avatar_url: eventUser?.avatar_url || '',
          role: (eventUser?.role || 'attendee') as Role,
        }"
        :opacity="eventUser?.activated_at ? 1 : 0.6"
      />
      <!-- 再編集 -->
      <RoundButton class="btn-update" :to="`/users/edit/${userId}`" :disabled="!hasAuth">
        {{ $t('words.re_edit') }}
      </RoundButton>
      <RoundButton
        class="btn-save"
        :href="`${linkUrl}users/${userId}/__og_image__/og.png`"
        outline
        download
        :download-file-name="userId"
      >
        画像を保存
      </RoundButton>
      <!-- カレンダーに追加 -->
      <RoundButton
        class="btn-calendar"
        :href="calendarUrl"
        target="_blank"
        rel="noreferrer"
        outline
      >
        {{ $t('words.add_to_calendar') }}
      </RoundButton>
      <!-- トップに戻る -->
      <RoundButton to="/" outline>
        {{ $t('words.back_top') }}
      </RoundButton>
      <div v-if="eventUser?.activated_at" class="social">
        <CommentTitle color="vue.green" title="ネームカードが完成したらSNSで参加表明しましょう！" />
        <div class="social-item">
          <a
            :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              `https://vuefes.jp/2023/users/${userId}`,
            )}`"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook"
          >
            <FacebookLogo />
          </a>
          <a
            :href="`${twitterDomainUrl}share?url=${encodeURIComponent(
              `https://vuefes.jp/2023/users/${userId}`,
            )}`"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
          >
            <TwitterLogoBlue />
          </a>
        </div>
      </div>
    </section>

    <!--
    <div v-if="!isProd">
      <UserForDev />
    </div>
    -->
  </main>
  <FooterPageSection has-auth />
  <OgImageWithoutCache
    component="OgTemplate"
    :signed-user="{
      full_name: eventUser?.display_name || '参加者',
      avatar_url: eventUser?.avatar_url,
      role: eventUser?.role || 'attendee',
    }"
  />
</template>

<style lang="ts" scoped>
css({
  'section': {
    marginTop: '140px',
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    '::v-deep(h2)': {
      color: '{color.vue.blue}',
      fontSize: 'calc(32*{fontSize.base})',
      fontWeight: 900,
    },
  },
  '.btn-update, .btn-save, .btn-calendar': {
    marginTop: 'calc({space.8} * 2)'
  },
  '.social': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 2.75)',
  },
  '.social-item': {
    display: 'flex',
    gap: 'calc({space.8} * 5)',
  },
  '@mobile': {
    'section': {
      marginTop: '120px',
    },
    '.btn-update, .btn-save, .btn-calendar': {
      marginTop: 'calc({space.8} * 0)'
    },
  },
})
</style>

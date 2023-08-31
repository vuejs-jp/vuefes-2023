<script setup lang="ts">
import LogoutLogo from '~/assets/logo/logout_logo.svg'
import FacebookLogo from '~/assets/logo/facebook_logo.svg'
import TwitterLogoBlue from '~/assets/logo/twitter_logo_blue.svg'
import StatusCard from '~/components/namecard/StatusCard.vue'
import AvatarCard from '~/components/namecard/AvatarCard.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import TextButton from '~/components/button/TextButton.vue'
import useAuth from '~/composables/useAuth'
import { useUserStore } from '~/composables/useUserStore'
import { useUser } from '~/composables/useUser'
import { calendarUrl, twitterDomainUrl } from '~/utils/constants'
// import UserForDev from '~/components/UserForDev.vue'
// import { isProd } from '~/utils/environment.constants'

definePageMeta({
  middleware: ['error'],
})

const route = useRoute()
const userId = route.params.id as string
const { signOut, hasAuth } = useAuth()
const { signedUser } = useUserStore()
const { eventUser } = await useUser(userId)

defineOgImageWithoutCache({
  component: 'OgTemplate',
  signedUser: {
    full_name: eventUser?.full_name,
    avatar_url: eventUser?.avatar_url,
    role: eventUser?.role || 'attendee',
  },
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
      <StatusCard :status="eventUser?.activated_at ? 'registered' : 'failed'" />
      <h2>ネームカード</h2>
      <AvatarCard
        :signed-user="{ ...signedUser, role: eventUser?.role || 'attendee' }"
        :opacity="eventUser?.activated_at ? 1 : 0.6"
      />
      <RoundButton class="btn-update" href="/user-edit">再編集</RoundButton>
      <RoundButton
        class="btn-save"
        :href="`${linkUrl}users/${userId}/__og_image__/og.png`"
        target="_blank"
        rel="noreferrer"
        outline
        download
      >
        画像を保存
      </RoundButton>
      <RoundButton
        class="btn-calendar"
        :href="calendarUrl"
        target="_blank"
        rel="noreferrer"
        outline
      >
        カレンダーに追加
      </RoundButton>
      <div v-if="eventUser?.activated_at" class="social">
        <CommentTitle color="vue.green" title="ネームカードが完成したらSNSで参加表明しましょう！" />
        <div class="social-item">
          <a
            :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              `https://vuefes.jp/2023/users/${signedUser.user_id}`,
            )}`"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook"
          >
            <FacebookLogo />
          </a>
          <a
            :href="`${twitterDomainUrl}share?url=${encodeURIComponent(
              `https://vuefes.jp/2023/users/${signedUser.user_id}`,
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
</template>

<style lang="ts" scoped>
css({
  'section': {
    marginTop: '120px',
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
    marginTop: 'calc({space.8} * 4)'
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
})
</style>

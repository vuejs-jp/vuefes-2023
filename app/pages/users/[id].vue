<script setup lang="ts">
import LogoutLogo from '~/assets/logo/logout_logo.svg'
import StatusCard from '~/components/namecard/StatusCard.vue'
import AvatarCard from '~/components/namecard/AvatarCard.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import TextButton from '~/components/button/TextButton.vue'
import UserForDev from '~/components/UserForDev.vue'
import useAuth from '~/composables/useAuth'
import { useUserStore } from '~/composables/useUserStore'
import { useUser } from '~/composables/useUser'
import { isProd } from '~/utils/environment.constants'

definePageMeta({
  middleware: ['error'],
})

const { signOut, hasAuth } = useAuth()
const { signedUser } = useUserStore()
const { eventUser } = useUser(signedUser.user_id)

// mock
// const avatar = {
//   name: 'jiyuujin',
//   avatarUrl: 'https://avatars.githubusercontent.com/u/9650581',
//   role: 'attendee',
// } as const
</script>

<template>
  <main>
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

    <section>
      <StatusCard :status="eventUser?.activated_at ? 'registered' : 'failed'" />
      <h2>ネームカード</h2>
      <AvatarCard
        :signed-user="{ ...signedUser, role: 'attendee' }"
        :opacity="eventUser?.activated_at ? 1 : 0.6"
      />
      <RoundButton class="btn-update" href="/register">再編集</RoundButton>
    </section>

    <div v-if="!isProd">
      <UserForDev />
    </div>

    <FooterPageSection has-auth />
  </main>
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
  '.btn-update': {
    marginTop: '64px'
  }
})
</style>

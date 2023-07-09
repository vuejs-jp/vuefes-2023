<script setup lang="ts">
import LogoutLogo from '~/assets/logo/logout_logo.svg'
import StatusCard from '~/components/namecard/StatusCard.vue'
import AvatarCard from '~/components/namecard/AvatarCard.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import TextButton from '~/components/button/TextButton.vue'
import UserForDev from '~/components/UserForDev.vue'
import useAuth from '~/composables/useAuth'
import { useSupabase } from '~/composables/useSupabase'
import { isProd } from '~/utils/environment.constants'

definePageMeta({
  middleware: ['error'],
})

const { signOut, signedUser, hasAuth } = await useAuth()
const { addEventUser } = useSupabase({ user: signedUser })

const secretWord = ref('')
const receiptId = ref('')

function onPurchase() {
  addEventUser(secretWord.value, receiptId.value)
}

const avatar = {
  name: signedUser.full_name,
  avatarUrl: signedUser.avatar_url ?? '',
  role: 'attendee',
} as const

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
      <StatusCard status="registered" />
      <h2>ネームカード</h2>
      <AvatarCard v-bind="{ ...avatar }" />
    </section>

    <RoundButton v-if="hasAuth" class="btn-purchase" @click="onPurchase">purchase</RoundButton>

    <div v-if="!isProd" class="user">
      <UserForDev :signed-user="signedUser" />
    </div>

    <FooterPageSection />
  </main>
</template>

<style lang="ts" scoped>
css({
  'section': {
    marginTop: '120px',
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
  },
  'h2': {
    color: '{color.vue.blue}',
    fontSize: 'calc(32*{fontSize.base})',
    fontWeight: 900,
  },
  '.btn-purchase': {
    marginTop: '64px'
  }
})
</style>

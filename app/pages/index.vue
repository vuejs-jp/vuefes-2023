<script setup lang="ts">
import LoginLogo from '~/assets/logo/login_logo.svg'
import AlertBar from '~/components/AlertBar.vue'
import AvatarLogo from '~/components/namecard/AvatarLogo.vue'
import TextButton from '~/components/button/TextButton.vue'
import PopupArea from '~/components/PopupArea.vue'
import useAuth from '~/composables/useAuth'
import { useUserStore } from '~/composables/useUserStore'
import { useDialog } from '~/composables/useDialog'
import { useNamecard } from '~/composables/useNamecard'
import { conferenceTitle } from '~/utils/constants'
import { generalOg, twitterOg } from '~/utils/og.constants'

const { hasAuth, signOut } = useAuth()
const { signedUser } = useUserStore()
const { isActivated } = await useUser(signedUser.user_id)
const { handle, isShow } = useDialog()
const { canPurchase, canRegister } = useNamecard()

useHead({
  titleTemplate: (titleChunk) => `${conferenceTitle}`,
  meta: [...generalOg(), ...twitterOg()],
})
</script>

<template>
  <main>
    <div v-if="canRegister && !isActivated">
      <AlertBar />
    </div>
    <NavPageSection :has-alert="canRegister && !isActivated">
      <template #avatar>
        <template v-if="canRegister && !hasAuth">
          <TextButton href="/register">
            <template #icon>
              <LoginLogo />
            </template>
            <template #default> Login </template>
          </TextButton>
        </template>
        <template v-if="canRegister && hasAuth">
          <button @click="() => handle(isShow ? false : true)">
            <AvatarLogo :name="signedUser.full_name" :url="signedUser.avatar_url" />
          </button>
          <template v-if="isShow">
            <PopupArea
              :signed-user="signedUser"
              :top="canRegister && !isActivated ? 18 : 10"
              @sign-out="signOut"
            />
          </template>
        </template>
      </template>
    </NavPageSection>
    <TopPageSection />
    <MessagePageSection />
    <template v-if="canPurchase">
      <TicketPageSection />
    </template>
    <SpeakerPageSection />
    <SponsorPageSection />
    <FormPageSection />
    <FooterPageSection />
  </main>
</template>

<style lang="ts" scoped>
css({
  'main': {
    overflow: 'hidden',
  },
})
</style>

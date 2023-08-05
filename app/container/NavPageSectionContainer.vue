<script setup lang="ts">
import AlertBar from '~/components/AlertBar.vue'
import AvatarLogo from '~/components/namecard/AvatarLogo.vue'
import PopupArea from '~/components/PopupArea.vue'
import useAuth from '~/composables/useAuth'
import { useUserStore } from '~/composables/useUserStore'
import { useUser } from '~/composables/useUser'
import { useDialog } from '~/composables/useDialog'
import { useNamecard } from '~/composables/useNamecard'

const { hasAuth, signOut } = useAuth()
const { signedUser } = useUserStore()
const { eventUser } = await useUser(signedUser.user_id)
const { handle, isShow } = useDialog()
const { canRegister } = useNamecard()
</script>

<template>
  <div v-if="canRegister && !eventUser?.activated_at">
    <AlertBar />
  </div>
  <NavPageSection :has-alert="canRegister && !eventUser?.activated_at">
    <template #avatar>
      <template v-if="canRegister && hasAuth">
        <button @click="() => handle(isShow ? false : true)">
          <AvatarLogo :name="signedUser.full_name" :url="signedUser.avatar_url" />
        </button>
        <template v-if="isShow">
          <PopupArea
            :signed-user="signedUser"
            :top="canRegister && !eventUser?.activated_at ? 18 : 10"
            @sign-out="signOut"
          />
        </template>
      </template>
    </template>
  </NavPageSection>
</template>

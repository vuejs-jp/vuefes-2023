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
  <div v-if="canRegister && hasAuth && eventUser?.activated_at !== undefined">
    <AlertBar :user-id="eventUser?.user_id" />
  </div>
  <NavPageSection :has-alert="canRegister && hasAuth && eventUser?.activated_at !== undefined">
    <template #avatar>
      <template v-if="canRegister && hasAuth">
        <button
          :style="{ width: '40px', height: '40px' }"
          @click="() => handle(isShow ? false : true)"
        >
          <AvatarLogo
            :name="eventUser?.display_name"
            :url="eventUser?.avatar_url || signedUser.avatar_url"
            size="small"
          />
        </button>
        <template v-if="isShow">
          <PopupArea
            :signed-user="signedUser"
            :top="canRegister && !eventUser?.activated_at ? '80px' : '130px'"
            @sign-out="signOut"
          />
        </template>
      </template>
    </template>
  </NavPageSection>
</template>

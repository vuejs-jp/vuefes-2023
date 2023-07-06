<script setup lang="ts">
import UploadLogo from '~/assets/logo/upload_logo.svg'
import Ticket from '~/assets/namecard/ticket.svg'
import Namecard from '~/assets/namecard/namecard.svg'
import useAuth from '~/composables/useAuth'
import { useImage } from '~/composables/useImage'
import RoundButton from '~/components/button/RoundButton.vue'
import IntegrationCard from '~/components/namecard/IntegrationCard.vue'
import DragDropArea from '~/components/DragDropArea.vue'
import ProcessCard from '~/components/namecard/ProcessCard.vue'
import StatusCard from '~/components/namecard/StatusCard.vue'
import AvatarCard from '~/components/namecard/AvatarCard.vue'
import ShareAvatarCard from '~/components/namecard/ShareAvatarCard.vue'
import UserForDev from '~/components/UserForDev.vue'
import { useDialog } from '~/composables/useDialog'

definePageMeta({
  middleware: ['error'],
})
const { signedUser } = await useAuth()
const { getBase64 } = useImage()
const { handle, isShow } = useDialog()

const picture = ref()

const checkFiles = async (files: File[]) => {
  if (files.length === 0) return

  const file = files[0]
  const filename = file.name

  picture.value = await getBase64(file)

  alert(`this file is not acceptable -> ${filename}`)
}

// mock
const avatar = {
  name: 'jiyuujin',
  avatarUrl: 'https://avatars.githubusercontent.com/u/9650581',
  role: 'attendee',
} as const
</script>

<template>
  <main>
    <h1>Register</h1>
    <div class="user">
      <UserForDev :signed-user="signedUser" />
    </div>

    <RoundButton @click="() => handle(true)">ネームカードを作成</RoundButton>
    <div v-if="isShow">
      <IntegrationCard @on-close="() => handle(false)" />
    </div>

    <div :style="{ display: 'flex', justifyContent: 'center', gap: '8px' }">
      <ProcessCard color="vue.green">
        <template #icon>
          <Ticket />
        </template>
        <template #default>
          <h3>チケットのご購入</h3>
          <p>Ticket</p>
        </template>
      </ProcessCard>
      <ProcessCard color="typescript.blue">
        <template #icon>
          <Namecard />
        </template>
        <template #default>
          <h3>ネームカードの作成</h3>
          <p>Namecard</p>
        </template>
      </ProcessCard>
    </div>

    <div :style="{ display: 'flex', justifyContent: 'center', gap: '8px' }">
      <AvatarCard v-bind="{ ...avatar }" />
      <AvatarCard v-bind="{ ...avatar }" :opacity="0.6" />
    </div>

    <div :style="{ display: 'flex', justifyContent: 'center', padding: '8px 0' }">
      <ShareAvatarCard v-bind="{ ...avatar }" />
    </div>

    <DragDropArea
      file-name="profiledata"
      file-accept="image/png,image/jpeg,image/gif"
      @check-files="checkFiles"
    >
      <div class="upload">
        <UploadLogo />
        <p class="title">{{ 'ファイルをドラッグ&ドロップ' }}</p>
        <p>または</p>
        <p class="action">ファイルを選択</p>
      </div>
    </DragDropArea>
    <div class="resultarea">
      <div v-if="picture">
        <img alt="" :src="picture" width="100" height="100" decoding="async" />
      </div>
    </div>

    <ul>
      <li>
        <StatusCard status="registered" />
      </li>
      <li>
        <StatusCard status="activating" />
      </li>
      <li>
        <StatusCard status="pending" />
      </li>
    </ul>
  </main>
</template>

<style lang="ts" scoped>
css({
  'main': {
    padding: '48px'
  },
  'h1': {
    fontSize: '24px',
    padding: '24px 0'
  },
  'ul': {
    display: 'flex',
    margin: '40px',
    flexWrap: 'wrap'
  },
  'li': {
    margin: '24px'
  },
  '.logout': {
    'button': {
      margin: '80px auto 0'
    }
  },
  '.upload': {
    display: 'grid',
    placeItems: 'center',
    gap: 'calc({space.8} * 1)',
    color: '{color.vue.blue}',
    '.title': {
      fontSize: 'calc(18*{fontSize.base})',
      fontWeight: 700,
    },
    '.action': {
      padding: 'calc({space.8} * 1.5) calc({space.8} * 5)',
      color: '{color.white}',
      background: '{color.vue.blue}',
      borderRadius: 'calc({space.8} * 6.25)',
      fontSize: 'calc(16*{fontSize.base})',
      fontWeight: 500,
    },
  },
})
</style>

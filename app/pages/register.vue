<script setup lang="ts">
import LogoutLogo from '~/assets/logo/logout_logo.svg'
import UploadLogo from '~/assets/logo/upload_logo.svg'
import TextButton from '~/components/button/TextButton.vue'
import IntegrationCard from '~/components/namecard/IntegrationCard.vue'
import DragDropArea from '~/components/DragDropArea.vue'
import UserForDev from '~/components/UserForDev.vue'
import useAuth from '~/composables/useAuth'
import { useImage } from '~/composables/useImage'
import { useDialog } from '~/composables/useDialog'
import { isProd } from '~/utils/environment.constants'

definePageMeta({
  middleware: ['error'],
})

const { hasAuth, signOut, signedUser } = useAuth()
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

onMounted(function () {
  isShow.value = true
})
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
      <h2>ネームカードの編集</h2>
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
    </section>

    <div v-if="isShow">
      <IntegrationCard @on-close="() => handle(false)" />
    </div>

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

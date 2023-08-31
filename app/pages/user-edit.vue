<script setup lang="ts">
import InputField from '~/components/forms/InputField.vue'
import RoundButton from '~/components/button/RoundButton.vue'
import SubmitButton from '~/components/forms/SubmitButton.vue'
import LogoutLogo from '~/assets/logo/logout_logo.svg'
import UploadLogo from '~/assets/logo/upload_logo.svg'
import TextButton from '~/components/button/TextButton.vue'
import DragDropArea from '~/components/DragDropArea.vue'
import UserForDev from '~/components/UserForDev.vue'
import useAuth from '~/composables/useAuth'
import { useUserStore } from '~/composables/useUserStore'
import { useSupabase } from '~/composables/useSupabase'
import { isProd } from '~/utils/environment.constants'

definePageMeta({
  middleware: ['error'],
})

const { hasAuth, signOut } = useAuth()
const { signedUser } = useUserStore()
const { updateEventUser, uploadAvatar } = useSupabase()

const picture = ref()
const displayName = ref('')
const receiptId = ref('')

const onSubmit = (e: Event) => {
  e.preventDefault()
  updateEventUser(displayName.value, picture.value, receiptId.value, signedUser.user_id)
}

const checkFiles = async (files: File[]) => {
  if (files.length === 0) return

  const file = files[0]
  // const filename = file.name
  const fileExt = file.name.split('.').pop()
  const filePath = `${signedUser.user_id}/${Math.random()}.${fileExt}`

  uploadAvatar(filePath, file)

  picture.value = filePath
}

const updateDisplayName = (value: string) => {
  displayName.value = value
}

const updateReceiptId = (value: string) => {
  receiptId.value = value
}
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
      <div class="form-root">
        <p>来場時に発行されるネームカードの情報を入力します。</p>
        <div class="form">
          <form @submit="onSubmit">
            <!-- お名前／Name  -->
            <InputField
              id="displayName"
              name="displayName"
              :title-label="$t('top.register_form_display_name_label')"
              required
              error=""
              :value="signedUser.display_name"
              @input="updateDisplayName"
              @blur="() => {}"
            />
            <!-- アバター-->
            <DragDropArea file-name="profiledata" file-accept="image/*" @check-files="checkFiles">
              <div class="upload">
                <UploadLogo />
                <p class="title">{{ 'ファイルをドラッグ&ドロップ' }}</p>
                <p>または</p>
                <p class="action">ファイルを選択</p>
              </div>
            </DragDropArea>
            <h3>チケット情報の入力</h3>
            <p>チケット購入完了メールに記載されている「注文番号」を入力してください。</p>
            <!-- 注文番号 -->
            <InputField
              id="receiptId"
              name="receiptId"
              :title-label="$t('top.register_form_receipt_id_label')"
              required
              error=""
              :value="signedUser.display_name"
              @input="updateReceiptId"
              @blur="() => {}"
            />

            <div class="link-box">
              <!-- キャンセル -->
              <RoundButton href="/" outline> キャンセル </RoundButton>
              <!-- 確定 -->
              <SubmitButton> 確定 </SubmitButton>
            </div>
          </form>
        </div>
      </div>

      <!-- <p>↓DEBUG↓</p>
      <div class="resultarea">
        <div v-if="picture">
          <img alt="" :src="picture" width="100" height="100" decoding="async" />
        </div>
      </div>
      <RoundButton v-if="hasAuth" class="btn-purchase" @click="onSubmit">purchase</RoundButton> -->
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
  },
  'h2': {
    color: '{color.vue.blue}',
    fontSize: 'calc(32*{fontSize.base})',
    fontWeight: 900,
  },
  'h3': {
    color: '{color.vue.blue}',
    fontSize: 'calc(24*{fontSize.base})',
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
  '.form-root': {
    display: 'grid',
    gap: '40px',
    maxWidth: '768px',
    margin: '0 auto',
    width: '100%',
    'grid-template-columns': 'minmax(0, 1fr)'
  },
  '.form-button': {
    textAlign: 'center'
  },
  '.form': {
    'form': {
      display: 'grid',
      gap: '40px',
    },
  },
  '.link-box': {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 16px',
    justifyContent: 'center',
    gap: '40px'
  },
})
</style>

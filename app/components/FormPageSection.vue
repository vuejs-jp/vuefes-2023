<script lang="ts" setup>
import InputField from '~/components/forms/InputField.vue'
import TextareaField from '~/components/forms/TextareaField.vue'
import SubmitButton from '~/components/forms/SubmitButton.vue'
import SectionTitle from '~/components/SectionTitle.vue'

import { useForm } from '~/composables/useForm'

const {
  name,
  email,
  detail,
  isSent,
  isSubmitting,
  nameError,
  emailError,
  detailError,
  validateName,
  validateEmail,
  validateDetail,
  onSubmit,
} = useForm()

const updateName = (value: string) => {
  name.value = value
}
const updateEmail = (value: string) => {
  email.value = value
}
const updateDetail = (value: string) => {
  detail.value = value
}

const { locale } = useI18n()
const docPath = computed(() => {
  return `/${locale.value}/top/contact`
})
</script>

<template>
  <section>
    <div class="form-root">
      <SectionTitle
        id="form"
        color="vue.blue"
        title="Contact"
        :yamato-title="$t('top.contact_subtitle')"
      />
      <!-- タイトル下テキスト -->
      <ContentDoc v-slot="{ doc }" :path="docPath">
        <ContentRenderer class="subtitle" :value="doc" />
      </ContentDoc>
      <div class="form">
        <form @submit="onSubmit">
          <!-- お名前／Name  -->
          <InputField
            id="name"
            name="name"
            :title-label="$t('top.contact_form_name_label')"
            :placeholder="$t('top.contact_form_name_placeholder')"
            required
            :error="nameError"
            @input="updateName"
            @blur="validateName"
          />
          <!-- メールアドレス／Mail  -->
          <InputField
            id="email"
            name="email"
            :title-label="$t('top.contact_form_mail_label')"
            :placeholder="$t('top.contact_form_mail_placeholder')"
            required
            :error="emailError"
            @input="updateEmail"
            @blur="validateEmail"
          />
          <!-- お問い合わせ内容／Content  -->
          <TextareaField
            id="detail"
            name="detail"
            :title-label="$t('top.contact_form_text_label')"
            :rows="3"
            required
            :error="detailError"
            @input="updateDetail"
            @blur="validateDetail"
          />
          <div class="form-button">
            <!-- 送信 -->
            <SubmitButton :disabled="!isSubmitting"> {{ $t('words.submit') }} </SubmitButton>
          </div>
          <!-- メッセージ送信に成功しました -->
          <div v-if="isSent">{{ $t('top.contact_submit_done') }}</div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: '120px 20px 120px',
  },
  '.form-root': {
    display: 'grid',
    gap: '40px',
    maxWidth: '768px',
    margin: '0 auto',
    width: '100%',
  },
  '.subtitle': {
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    '::v-deep(p)': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '1.8',
      'a': {
        color: '{color.vue.green}',
        textDecoration: 'underline',
        '&:hover': {
          transition: '.2s',
        },
      },
    },
  },
  '.form-button': {
    margin: '0 auto',
  },
  '.form': {
    'form': {
      display: 'grid',
      gap: '40px',
    },
  },
  '@tablet': {
    '.subtitle': {
      '::v-deep(p)': {
        fontSize: '18px',
      },
    },
  },
})
</style>

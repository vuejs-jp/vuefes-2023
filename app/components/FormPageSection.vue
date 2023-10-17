<script lang="ts" setup>
import InputField from '~/components/forms/InputField.vue'
import TextareaField from '~/components/forms/TextareaField.vue'
import SubmitButton from '~/components/forms/SubmitButton.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import MarkDownText from '~/components/MarkDownText.vue'

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
      <div class="subtitle">
        <MarkDownText path="form" />
      </div>
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
            placeholder="hello@vuefes.jp"
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
    'grid-template-columns': 'minmax(0, 1fr)',
  },
  '.subtitle': {
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    '::v-deep(p)': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '1.8',
      'a': {
        color: '{color.vue.green}',
        textDecoration: 'underline',
        '&:hover': {
          transition: '.2s',
          opacity: 0.4,
        },
      },
    },
  },
  '.form-button': {
    textAlign: 'center',
  },
  '.form': {
    'form': {
      display: 'grid',
      gap: '40px',
    },
  },
  '@mobile': {
    'section': {
      padding: 'calc({space.8} * 10) calc({space.8} * 3) calc({space.8} * 8)',
    },
    '.subtitle': {
      '::v-deep(p)': {
        fontSize: '16px',
      },
    },
  },
})
</style>

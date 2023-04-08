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
</script>

<template>
  <section>
    <div class="form-root">
      <SectionTitle id="form" color="vue.blue" title="Contact" yamato-title="お問い合わせ" />
      <div class="subtitle">
        <p>
          Vue Fes Japan にご興味をいただき、ありがとうございます。Vue Fes Japan
          へのご質問およびお問い合わせは、以下のフォームよりお願いいたします。通常、担当者より 3
          営業日以内にご返信いたします。3 営業日以内に返信がない場合、お手数ですが
          <a href="https://twitter.com/vuefes" target="_blank" rel="noreferrer">Twitter</a>
          のDMよりご連絡ください。なお、スポンサー、スピーカー、参加チケットについては確定次第、公式サイトでお知らせする予定です。
        </p>
      </div>
      <div class="form">
        <form @submit="onSubmit">
          <InputField
            name="name"
            id-label="name"
            title-label="お名前／Name"
            placeholder="山田太郎"
            required
            :error="nameError"
            @input="updateName"
            @blur="validateName"
          />
          <InputField
            name="email"
            id-label="email"
            title-label="メールアドレス／Mail"
            placeholder="hello@vuefes.jp"
            required
            :error="emailError"
            @input="updateEmail"
            @blur="validateEmail"
          />
          <TextareaField
            name="detail"
            id-label="detail"
            title-label="お問い合わせ内容／Content"
            :rows="3"
            required
            :error="detailError"
            @input="updateDetail"
            @blur="validateDetail"
          />
          <SubmitButton title-label="送信" :disabled="!isSubmitting" />
          <div v-if="isSent">メッセージ送信に成功しました。</div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: '30px 20px 120px',
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
    'p': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: '20px',
    },
  },
  '.form': {
    'form': {
      display: 'grid',
      gap: '40px',
    },
  },
})
</style>

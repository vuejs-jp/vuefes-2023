<script lang="ts" setup>
import InputField from '~/components/forms/InputField.vue'
import TextareaField from '~/components/forms/TextareaField.vue'
import SubmitButton from '~/components/forms/SubmitButton.vue'

import { useForm } from '~/composables/useForm'

const { name, email, detail, onSubmit } = useForm()

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
    <form @submit="onSubmit">
      <InputField
        name="name"
        id-label="name"
        title-label="お名前"
        placeholder="山田太郎"
        required
        @input="updateName"
        @blue="updateName"
      />
      <InputField
        name="email"
        id-label="email"
        title-label="メールアドレス"
        placeholder="山田太郎"
        required
        @input="updateEmail"
        @blue="updateEmail"
      />
      <TextareaField
        name="detail"
        id-label="detail"
        title-label="お問い合わせ内容"
        :rows="3"
        required
        @input="updateDetail"
        @blue="updateDetail"
      />
      <SubmitButton title-label="送信" />
    </form>
  </section>
</template>

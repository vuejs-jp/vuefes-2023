<script lang="ts" setup>
import InputField from '~/components/forms/InputField.vue'
import TextareaField from '~/components/forms/TextareaField.vue'
import SubmitButton from '~/components/forms/SubmitButton.vue'

import { useForm } from '~/composables/useForm'

const { endpoint } = useForm()
</script>

<template>
  <section>
    <form :action="endpoint" method="post">
      <InputField
        name="name"
        id-label="name"
        title-label="お名前"
        placeholder="山田太郎"
        required
      />
      <InputField
        name="email"
        id-label="email"
        title-label="メールアドレス"
        placeholder="山田太郎"
        required
      />
      <TextareaField
        name="detail"
        id-label="detail"
        title-label="お問い合わせ内容"
        :rows="3"
        required
      />
      <SubmitButton title-label="送信" />
    </form>
  </section>
</template>

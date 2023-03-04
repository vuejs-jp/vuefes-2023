<script lang="ts" setup>
import InputField from '~/components/forms/InputField.vue'
import TextareaField from '~/components/forms/TextareaField.vue'
import SubmitButton from '~/components/forms/SubmitButton.vue'

import { useForm } from '~/composables/useForm'

const { name, email, detail, isSent, onSubmit } = useForm()

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
      <div class="root">
        <div class="title">
          <h2 id="contact">Contact</h2>
          <h3>お問い合わせ</h3>
        </div>
        <div class="subtitle">
          <p>
            Vue Fes Japan にご興味をいただき、ありがとうございます。Vue Fes Japan
            へのご質問およびお問い合わせは、以下のフォームよりお願いいたします。通常、担当者より 3
            営業日以内にご返信いたします。3 営業日以内に返信がない場合、お手数ですが Twitter
            のDMよりご連絡ください。なお、スポンサー、スピーカー、参加チケットについては確定次第、公式サイトでお知らせする予定です。
          </p>
        </div>
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
        <div v-if="isSent">メッセージ送信に成功しました。</div>
      </div>
    </form>
  </section>
</template>

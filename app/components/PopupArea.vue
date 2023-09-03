<script setup lang="ts">
import LogoutLogo from '~/assets/logo/logout_logo.svg'
import CardLogo from '~/assets/logo/card_logo.svg'
import TextButton from '~/components/button/TextButton.vue'

const props = defineProps({
  signedUser: {
    type: Object,
    required: true,
  },
  top: {
    type: String,
    required: true,
  },
})

interface PopupAreaEmit {
  (e: 'sign-out'): void
}
const emit = defineEmits<PopupAreaEmit>()
</script>

<template>
  <div class="popup-root">
    <ul class="popup-menu">
      <li>
        <TextButton :href="`/users/${signedUser.user_id}`">
          <template #icon>
            <CardLogo />
          </template>
          <template #default> Namecard </template>
        </TextButton>
      </li>
      <li>
        <TextButton @click="$emit('sign-out')">
          <template #icon>
            <LogoutLogo />
          </template>
          <template #default> Logout </template>
        </TextButton>
      </li>
    </ul>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.popup-root': {
    position: 'fixed',
    top: (props) => `${props.top}`,
    right: '2%',
    width: '200px',
    height: '100px',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  '.popup-menu': {
    padding: 'calc({space.8} * 1) calc({space.8} * 2)',
    margin: 0,
    width: '200px',
    height: '100px',
    '::v-deep(li)': {
      listStyle: 'none',
      padding: 'calc({space.8} * 1) 0',
      margin: 0,
    },
    '::v-deep(a)': {
      display: 'flex',
      justifyContent: 'flex-start',
      verticalAlign: 'middle',
      gap: 'calc({space.8} * 1)',
      color: '{color.white}',
      fontSize: 'calc(16*{fontSize.base})',
      '&:hover': {
        color: '{color.vue.green}',
        transition: '.2s',
      },
    },
    '::v-deep(button)': {
      display: 'flex',
      justifyContent: 'flex-start',
      verticalAlign: 'middle',
      gap: 'calc({space.8} * 1)',
      color: '{color.white}',
      fontSize: 'calc(16*{fontSize.base})',
      '&:hover': {
        color: '{color.vue.green}',
        transition: '.2s',
      },
    },
  },
})
</style>

<script setup lang="ts">
import AvatarLogo from '~/components/namecard/AvatarLogo.vue'
import { useUserRole } from '~/composables/useUserRole'
import { FormUser, Role } from '~/types/app'

const props = defineProps({
  signedUser: {
    type: Object as PropType<FormUser>,
    required: true,
  },
  useShare: {
    type: Boolean,
    default: false,
  },
})

const { backgroundColor, textColor } = useUserRole()
</script>

<template>
  <div class="avatar">
    <AvatarLogo :url="signedUser.avatar_url" size="large" />
    <h3>{{ signedUser.full_name }}</h3>
    <div
      class="role"
      :style="{
        background: backgroundColor(signedUser.role as Role),
        color: textColor(signedUser.role as Role),
      }"
    >
      {{ signedUser.role }}
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.avatar': {
    display: 'grid',
    placeItems: 'center',
    gap: '8px',
    '::v-deep(h3)': {
      color: '{color.white}',
      fontSize: (props) => props.useShare ? 'calc(48*{fontSize.base})' : 'calc(22*{fontSize.base})',
      fontWeight: 900,
    },
    '::v-deep(img)': {
      borderRadius: '50%',
      boxShadow: '0px 0px calc({space.8} * 0.5) rgba(255, 255, 255, 1)',
    },
    '::v-deep(svg)': {
      width: '42px',
      height: '48px',
    },
  },
  '.role': {
    padding: 'calc({space.8} * 1) calc({space.8} * 3)',
    borderRadius: 'calc({space.8} * 6.25)',
    fontSize: (props) => props.useShare ? 'calc(36*{fontSize.base})' : 'calc(24*{fontSize.base})',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
})
</style>

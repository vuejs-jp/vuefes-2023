<script setup lang="ts">
import { useUserRole } from '~/composables/useUserRole'
import { Role } from '~/types/app'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
    required: true,
  },
  role: {
    type: String as PropType<Role>,
    required: true,
  },
})

const { backgroundColor, textColor } = useUserRole()
</script>

<template>
  <div class="avatar">
    <img :alt="name" :src="avatarUrl" width="120" height="120" decoding="async" />
    <h3>{{ name }}</h3>
    <div
      class="role"
      :style="{
        background: backgroundColor(role),
        color: textColor(role),
      }"
    >
      {{ role }}
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
      fontSize: 'calc(22*{fontSize.base})',
      fontWeight: 900,
    },
    '::v-deep(img)': {
      borderRadius: '50%',
      boxShadow: '0px 0px calc({space.8} * 0.5) rgba(255, 255, 255, 1)',
    },
  },
  '.role': {
    padding: 'calc({space.8} * 1) calc({space.8} * 3)',
    borderRadius: 'calc({space.8} * 6.25)',
    fontSize: 'calc(24*{fontSize.base})',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
})
</style>

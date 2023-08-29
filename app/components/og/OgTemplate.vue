<script setup lang="ts">
import { useUserRole } from '~/composables/useUserRole'
import { FormUser, Role } from '~/types/app'
import { linkUrl } from '~/utils/constants'

// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  signedUser: {
    type: Object as PropType<FormUser>,
    required: true,
  },
})
const { backgroundColor, textColor } = useUserRole()
</script>

<template>
  <div
    :style="{
      background: `url(${linkUrl}og/og_background.png)`,
      width: '100%',
      paddingTop: '107px',
      textAlign: 'center',
      fontFamily: `'din-2014', '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', sans-serif`,
    }"
  >
    <div>
      <div
        :style="{
          color: '#fff',
          fontSize: '36px',
          fontWeight: '700',
          justifyContent: 'center',
        }"
      >
        HELLO!! I AM
      </div>
      <div
        :style="{
          margin: '10px auto 0',
          width: '120px',
          height: '120px',
        }"
      >
        <img
          :src="signedUser.avatar_url"
          alt=""
          width="120"
          height="120"
          decoding="async"
          :style="{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            border: '4px solid #fff',
            borderRadius: '50%',
          }"
        />
      </div>
      <div
        :style="{
          color: '#fff',
          fontSize: '48px',
          fontWeight: '900',
          maxHeight: '1.5em',
          justifyContent: 'center',
          margin: '10px 80px 0',
          textShadow: '0px 0px 16px #27384A',
          overflow: 'hidden',
          lineHeight: '150%',
        }"
      >
        {{ signedUser.full_name }}
      </div>
    </div>
    <div
      :style="{
        background: backgroundColor(signedUser.role as Role),
        color: textColor(signedUser.role as Role),
        margin: '10px auto 0',
        justifyContent: 'center',
        padding: '8px 32px',
        borderRadius: '100px',
        fontSize: '36px',
        fontWeight: '700',
        textTransform: 'uppercase',
      }"
    >
      {{ signedUser.role }}
    </div>
  </div>
</template>

<!--
<style lang="ts" scoped>
css({
  '.og': {
    background: 'url(http://localhost:3000/og/og_background.png)',
    width: '100%',
    paddingTop: '107px',
    textAlign: 'center',
    fontFamily: `'din-2014', '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', sans-serif`,
  },
  '.introduction': {
    color: '#fff',
    fontSize: '36px',
    fontWeight: '700',
    justifyContent: 'center',
  },
  '.icon': {
    margin: '10px auto 0',
    width: '120px',
    height: '120px',

    'img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      border: '4px solid #fff',
      borderRadius: '50%',
    }
  },
  '.name': {
    color: '#fff',
    fontSize: '48px',
    fontWeight: '900',
    maxHeight: '1.5em',
    justifyContent: 'center',
    margin: '10px 80px 0',
    textShadow: '0px 0px 16px #27384A',
    overflow: 'hidden',
    lineHeight: '150%',
  },
  '.section-label': {
    margin: '10px auto 0',
    justifyContent: 'center',
    padding: '8px 32px',
    borderRadius: '100px',
    fontSize: '36px',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})
</style>
-->

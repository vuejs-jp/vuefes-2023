<script lang="ts" setup>
import { Team } from '~/types/app'
import { urlBasePath } from '~/utils/constants'

const props = defineProps({
  team: {
    type: Object as PropType<Team>,
    required: true,
  },
})
</script>

<template>
  <component
    :is="team.snsLink ? 'a' : 'div'"
    :href="team.snsLink"
    :target="team.snsLink ? '_blank' : ''"
    :rel="team.snsLink ? 'noreferrer' : ''"
    class="team-card"
  >
    <img
      width="172"
      height="172"
      :alt="`${team.name}の写真`"
      :src="`${urlBasePath}${team.image}`"
      loading="lazy"
      decoding="async"
    />
    <span class="team-name">{{ team.name }}</span>
  </component>
</template>

<style lang="ts" scoped>
css({
  '.team-card': {
    width: 'calc((100% - 160px) / 5)',
    'img': {
      width: '100%',
      borderRadius: '0.5em',
    },
  },
  '.team-name': {
      display: 'block',
      color: '{color.vue.blue}',
      textAlign: 'center',
      fontSize: '14px',
      lineHeight: '1.3',
      marginTop: '0.5em',
  },
  '@tablet': {
    '.team-card': {
      width: 'calc((100% - 96px) / 4)',
    },
  },
  '@mobile': {
    '.team-card': {
      width: 'calc((100% - 8vw) / 3)',
    },
  },
})
</style>

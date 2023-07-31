<script lang="ts" setup>
import { Team } from '~/types/app'

const props = defineProps({
  team: {
    type: Object as PropType<Team>,
    required: true,
  },
})
</script>

<template>
  <div class="team-card">
    <img
      width="172"
      height="172"
      :alt="`${team.name}の写真`"
      :src="`${urlBasePath}${team.image}`"
      loading="lazy"
      decoding="async"
    />
    <p class="team-name">{{ team.name }}</p>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.team-card': {
    'img': {
      borderRadius: '0.5em',
    },
  },
  '.team-name': {
  color: '{color.vue.blue}',
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '1.3',
    marginTop: '0.5em',
  },
  '@mobile': {
    '.team-card': {
      'img': {
        width: '208px',
        height: '208px',
      },
    },
  },
  '@tablet': {
    '.team-card': {
      'img': {
        width: '274px',
        height: '274px',
      },
     },
    },
  })
</style>
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
    <p class="team-name">{{ team.snsId }}</p>
  </div>
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
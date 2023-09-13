<script lang="ts" setup>
import { Paneler } from '~/types/app'

const props = defineProps({
  team: {
    type: Object as PropType<Paneler>,
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
    <p class="team-company">{{ team.company }}</p>
    <p class="team-job">{{ team.job }}</p>
    <p class="team-name">{{ team.name }}</p>
  </component>
</template>

<style lang="ts" scoped>
css({
  '.team-card': {
    width: 'calc((100% - 64px) / 3)',
    color: '{color.vue.blue}',
    textAlign: 'left',
    'img': {
      width: '100%',
      borderRadius: '0.5em',
    },
  },
  '.team-company': {
    fontSize: '14px',
    marginTop: '0.5em',
  },
  '.team-job': {
    fontSize: '14px',
  },
  '.team-name': {
      display: 'block',
      color: '{color.vue.blue}',
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '1.3',
      marginTop: '0.2em',
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

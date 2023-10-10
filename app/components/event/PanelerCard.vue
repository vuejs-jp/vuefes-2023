<script lang="ts" setup>
import { Paneler } from '~/types/app'

const props = defineProps({
  team: {
    type: Object as PropType<Paneler>,
    required: true,
  },
})
const urlBasePath = useRuntimeConfig().app.baseURL
</script>

<template>
  <div class="team-card">
    <component
      :is="team.snsLink ? 'a' : 'div'"
      :href="team.snsLink"
      :target="team.snsLink ? '_blank' : ''"
      :rel="team.snsLink ? 'noreferrer' : ''"
    >
      <img
        width="172"
        height="172"
        :alt="`${team.name}の写真`"
        :src="`${urlBasePath}${team.image}`"
        loading="lazy"
        decoding="async"
      />
    </component>
    <p class="team-company">{{ team.company }}</p>
    <p class="team-job">{{ team.job }}</p>
    <p class="team-name">{{ team.name }}</p>
  </div>
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
    fontSize: 'calc(14*{fontSize.base})',
    marginTop: '0.5em',
  },
  '.team-job': {
    fontSize: 'calc(14*{fontSize.base})',
  },
  '.team-name': {
    display: 'block',
    color: '{color.vue.blue}',
    fontSize: 'calc(18*{fontSize.base})',
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

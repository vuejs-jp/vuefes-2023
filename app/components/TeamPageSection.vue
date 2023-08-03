<script lang="ts" setup>
import { teams } from '~/utils/teams.constants'
import { useLocale } from '~/composables/useLocale'
const { docPath } = useLocale('teams')
</script>

<template>
  <section class="team-root">
    <SectionTitle
      id="team"
      color="vue.blue"
      title="Teams"
      :yamato-title="$t('top.teams_subtitle')"
    />
    <ContentDoc v-slot="{ doc }" :path="docPath">
      <ContentRenderer class="subtitle" :value="doc" />
    </ContentDoc>
    <div class="teams">
      <TeamsTeamCard v-for="team in teams" :key="team.snsId" :team="team" />
    </div>
  </section>
</template>

<style lang="ts" scoped>
css({
  'section': {
    padding: '120px 20px',
  },
  '.team-root': {
    display: 'grid',
    gap: '40px',
    margin: '0 auto',
  },
  '.subtitle': {
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    '::v-deep(p)': {
      color: '{color.vue.blue}',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '1.8',
    },
  },
  '.teams': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    maxWidth: '988px',
    margin: '0 auto',
  },
  '@tablet': {
    '.teams': {
      maxWidth: '760px',
    },
  },
  '@mobile': {
    '.teams': {
      gap: '4vw',
    },
  },
})
</style>

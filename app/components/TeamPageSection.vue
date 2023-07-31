<script lang="ts" setup>
import { teams } from '~/utils/teams.constants'
import { useLocale } from '~/composables/useLocale'
const { docPath } = useLocale('team')
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
  '.teams': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    maxWidth: '988px',
    margin: '0 auto',
  },
  '@mobile': {
    '.teams': {
    },
  },
  '@tablet': {
    '.teams': {
    },
  },
})
</style>
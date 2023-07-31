<script lang="ts" setup>
import { teams } from '~/utils/teams.constants'
</script>

<template>
  <section class="team-root">
    <SectionTitle
        id="team"
        color="vue.blue"
        title="Teams"
        :yamato-title="$t('top.teams_subtitle')"
    />
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
  '.teams': {
    maxWidth: '988px',
    margin: '40px auto 0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
  },
})
</style>
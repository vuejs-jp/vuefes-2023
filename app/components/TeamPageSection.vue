<script lang="ts" setup>
import { teams, volunteers } from '~/utils/teams.constants'
import MarkDownText from '~/components/MarkDownText.vue'
</script>

<template>
  <section class="team-root">
    <SectionTitle
      id="team"
      color="vue.blue"
      title="Teams"
      :yamato-title="$t('top.teams_subtitle')"
    />
    <div class="subtitle">
      <MarkDownText path="teams" />
    </div>
    <div class="teams-title">
      <h3>{{ $t('top.teams_core_staff') }}</h3>
    </div>
    <div class="teams">
      <TeamsTeamCard v-for="team in teams" :key="team.name" :team="team" />
    </div>
    <div class="teams-title">
      <h3>{{ $t('top.teams_volunteer') }}</h3>
    </div>
    <div class="volunteers">
      <span v-for="(volunteer, i) in volunteers" :key="volunteer.name"
        >{{ volunteer.name }}<template v-if="i < volunteers.length - 1">、</template></span
      >
    </div>
  </section>
</template>

<style lang="ts" scoped>y
css({
  'section': {
    padding: '120px 20px',
    color: '{color.vue.blue}',
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
  '.teams-title': {
    display: 'grid',
    gap: 'calc({space.8} * 3)',
    textAlign: 'center',
    marginTop: 'calc({space.8} * 8)',
    '::v-deep(h3)': {
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: '1',
    },
  },
  '.teams': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    maxWidth: '988px',
    margin: '0 auto',
  },
  '.volunteers': {
    maxWidth: '988px',
    margin: '0 auto',
  },
  '@tablet': {
    '.teams': {
      maxWidth: '760px',
    },
    '.volunteers': {
      maxWidth: '760px',
    },
  },
  '@mobile': {
    'section': {
      padding: 'calc({space.8} * 0) calc({space.8} * 3) calc({space.8} * 8)',
    },
    '.subtitle': {
      '::v-deep(p)': {
        fontSize: '16px',
      }
    },
    '.teams': {
      gap: '4vw',
    },
  },
})
</style>

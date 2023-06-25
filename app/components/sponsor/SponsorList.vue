<script setup lang="ts">
import SponsorCategoryTitle from './SponsorCategoryTitle.vue'
import SponsorCard from './SponsorCard.vue'
import {
  platinumSponsors,
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
} from '~/utils/sponsor.constants'
</script>

<template>
  <ul class="sponsor-list">
    <li>
      <SponsorCategoryTitle category="platinum" />
      <div class="sponsors platinum-sponsors">
        <SponsorCard
          v-for="platinumSponsor in platinumSponsors"
          :key="platinumSponsor.name"
          :sponsor="platinumSponsor"
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="gold" />
      <div class="sponsors gold-sponsors">
        <SponsorCard
          v-for="goldSponsor in goldSponsors"
          :key="goldSponsor.name"
          :sponsor="goldSponsor"
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="silver" />
      <div class="sponsors silver-sponsors">
        <SponsorCard
          v-for="silverSponsor in silverSponsors"
          :key="silverSponsor.name"
          :sponsor="silverSponsor"
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="bronze" />
      <div class="sponsors bronze-sponsors">
        <SponsorCard
          v-for="bronzeSponsor in bronzeSponsors"
          :key="bronzeSponsor.name"
          :sponsor="bronzeSponsor"
        />
      </div>
    </li>
  </ul>
</template>

<style lang="ts" scoped>
css({
  '.sponsor-list': {
    maxWidth: '988px',
    margin: '40px auto 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
  },
  '.sponsors': {
    marginTop: '32px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  '.platinum-sponsors': {
    gap: '24px 38px',
  },
  '.gold-sponsors': {
    gap: '32px 3%',
  },
  '.silver-sponsors': {
    gap: '31px 34px',
  },
  '.bronze-sponsors': {
    gap: '29px 32px',
  },
  '@media(max-width: 980px)': {
    '.sponsor-list': {
      maxWidth: '760px',
    },
    '.platinum-sponsors': {
      gap: '24px',
    },
    '.gold-sponsors': {
      gap: '32px 24px'
    },
    '.silver-sponsors': {
      gap: '31px 15px'
    },
    '.bronze-sponsors': {
      gap: '32px 18px'
    },
  },
  '@media(max-width: 770px)': {
    '.gold-sponsors': {
      gap: '32px 38px'
    },
    '.silver-sponsors': {
      gap: '32px 38px'
    },
    '.bronze-sponsors': {
      gap: '32px 21px'
    },
  }
})
</style>

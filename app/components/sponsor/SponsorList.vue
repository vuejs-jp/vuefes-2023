<script setup lang="ts">
import SponsorCategoryTitle from './SponsorCategoryTitle.vue'
import SponsorCard from './SponsorCard.vue'
import * as sponsors from '~/utils/sponsor.constants'
</script>

<template>
  <ul class="sponsor-list">
    <li>
      <SponsorCategoryTitle category="platinum" />
      <div class="sponsors platinum-sponsors">
        <SponsorCard
          v-for="platinumSponsor in sponsors.platinumSponsors"
          :key="platinumSponsor.name"
          :sponsor="platinumSponsor"
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="gold" />
      <div class="sponsors gold-sponsors">
        <SponsorCard
          v-for="goldSponsor in sponsors.goldSponsors"
          :key="goldSponsor.name"
          :sponsor="goldSponsor"
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="silver" />
      <div class="sponsors silver-sponsors">
        <SponsorCard
          v-for="silverSponsor in sponsors.silverSponsors"
          :key="silverSponsor.name"
          :sponsor="silverSponsor"
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="bronze" />
      <div class="sponsors bronze-sponsors">
        <SponsorCard
          v-for="bronzeSponsor in sponsors.bronzeSponsors"
          :key="bronzeSponsor.name"
          :sponsor="bronzeSponsor"
        />
      </div>
    </li>
  </ul>
  <ul class="sponsor-list">
    <li>
      <SponsorCategoryTitle category="session-room-naming-rights" />
      <div class="sponsors options-sponsors">
        <SponsorCard
          v-for="namingRightSponsor in sponsors.namingRightSponsors"
          :key="namingRightSponsor.name"
          :sponsor="namingRightSponsor"
          use-optional
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="special-lunch" />
      <div class="sponsors options-sponsors">
        <SponsorCard
          v-for="specialLunchSponsor in sponsors.specialLunchSponsors"
          :key="specialLunchSponsor.name"
          :sponsor="specialLunchSponsor"
          use-optional
        />
      </div>
    </li>
  </ul>
  <ul class="sponsor-halflist">
    <li>
      <SponsorCategoryTitle category="lunch" />
      <div class="sponsors options-sponsors">
        <SponsorCard
          v-for="lunchSponsor in sponsors.lunchSponsors"
          :key="lunchSponsor.name"
          :sponsor="lunchSponsor"
          use-optional
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="after-party" />
      <div class="sponsors options-sponsors">
        <SponsorCard
          v-for="afterPartySponsor in sponsors.afterPartySponsors"
          :key="afterPartySponsor.name"
          :sponsor="afterPartySponsor"
          use-optional
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="name-card" />
      <div class="sponsors options-sponsors">
        <SponsorCard
          v-for="namecardSponsor in sponsors.namecardSponsors"
          :key="namecardSponsor.name"
          :sponsor="namecardSponsor"
          use-optional
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="refreshment" />
      <div class="sponsors options-sponsors">
        <SponsorCard
          v-for="refreshmentSponsor in sponsors.refreshmentSponsors"
          :key="refreshmentSponsor.name"
          :sponsor="refreshmentSponsor"
          use-optional
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="simultaneous-interpretation" />
      <div class="sponsors options-sponsors">
        <SponsorCard
          v-for="interpretationSponsor in sponsors.interpretationSponsors"
          :key="interpretationSponsor.name"
          :sponsor="interpretationSponsor"
          use-optional
        />
      </div>
    </li>
    <li>
      <SponsorCategoryTitle category="media" />
      <div class="sponsors options-sponsors">
        <SponsorCard
          v-for="mediaSponsor in sponsors.mediaSponsors"
          :key="mediaSponsor.name"
          :sponsor="mediaSponsor"
          use-optional
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
  '.sponsor-halflist': {
    maxWidth: '988px',
    margin: '40px auto 0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    'li': {
      width: 'calc(50% - 20px)',
    },
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
  '.options-sponsors': {
    gap: '29px 32px',
  },
  '@tablet': {
    '.sponsor-list': {
      maxWidth: '760px',
    },
    '.sponsor-halflist': {
      maxWidth: '760px',
      flexDirection: 'column',
      'li': {
        width: '100%',
      },
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
    '.options-sponsors': {
      gap: '32px 18px'
    },
  },
  '@mobile': {
    '.gold-sponsors': {
      gap: '32px 38px'
    },
    '.silver-sponsors': {
      gap: '32px 38px'
    },
    '.bronze-sponsors': {
      gap: '32px 21px'
    },
    '.options-sponsors': {
      gap: '32px 21px'
    },
  }
})
</style>

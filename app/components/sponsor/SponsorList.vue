<script setup lang="ts">
import { useLocaleCurrent } from '~/composables/useLocaleCurrent'
import SponsorCategoryTitle from './SponsorCategoryTitle.vue'
import SponsorCard from './SponsorCard.vue'
import * as sponsors from '~/utils/sponsor.constants'

const { locale } = useLocaleCurrent()
</script>

<template>
  <div class="sponsor-list-root">
    <ul class="sponsor-list">
      <li>
        <SponsorCategoryTitle category="platinum" />
        <div class="sponsors platinum-sponsors">
          <NuxtLink
            v-for="platinumSponsor in sponsors.platinumSponsors"
            :key="platinumSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${platinumSponsor.id}`"
          >
            <SponsorCard :sponsor="platinumSponsor" category="platinum" />
          </NuxtLink>
        </div>
      </li>
      <li>
        <SponsorCategoryTitle category="gold" />
        <div class="sponsors gold-sponsors">
          <NuxtLink
            v-for="goldSponsor in sponsors.goldSponsors"
            :key="goldSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${goldSponsor.id}`"
          >
            <SponsorCard :sponsor="goldSponsor" category="gold" />
          </NuxtLink>
        </div>
      </li>
      <li>
        <SponsorCategoryTitle category="silver" />
        <div class="sponsors silver-sponsors">
          <NuxtLink
            v-for="silverSponsor in sponsors.silverSponsors"
            :key="silverSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${silverSponsor.id}`"
          >
            <SponsorCard :sponsor="silverSponsor" category="silver" />
          </NuxtLink>
        </div>
      </li>
      <li>
        <SponsorCategoryTitle category="bronze" />
        <div class="sponsors bronze-sponsors">
          <NuxtLink
            v-for="bronzeSponsor in sponsors.bronzeSponsors"
            :key="bronzeSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${bronzeSponsor.id}`"
          >
            <SponsorCard :sponsor="bronzeSponsor" category="bronze" />
          </NuxtLink>
        </div>
      </li>
    </ul>
    <ul class="sponsor-list">
      <li>
        <SponsorCategoryTitle category="session-room-naming-rights" />
        <div class="sponsors options-sponsors">
          <NuxtLink
            v-for="namingRightSponsor in sponsors.namingRightSponsors"
            :key="namingRightSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${namingRightSponsor.id}`"
          >
            <SponsorCard :sponsor="namingRightSponsor" use-column-layout category="options" />
          </NuxtLink>
        </div>
      </li>
      <li>
        <SponsorCategoryTitle category="special-lunch" />
        <div class="sponsors options-sponsors">
          <NuxtLink
            v-for="specialLunchSponsor in sponsors.specialLunchSponsors"
            :key="specialLunchSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${specialLunchSponsor.id}`"
          >
            <SponsorCard :sponsor="specialLunchSponsor" use-column-layout category="options" />
          </NuxtLink>
        </div>
      </li>
    </ul>
    <ul class="sponsor-list -half">
      <li>
        <SponsorCategoryTitle category="lunch" />
        <div class="sponsors options-sponsors">
          <NuxtLink
            v-for="lunchSponsor in sponsors.lunchSponsors"
            :key="lunchSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${lunchSponsor.id}`"
          >
            <SponsorCard :sponsor="lunchSponsor" category="options" />
          </NuxtLink>
        </div>
      </li>
      <li>
        <SponsorCategoryTitle category="after-party" />
        <div class="sponsors options-sponsors">
          <NuxtLink
            v-for="afterPartySponsor in sponsors.afterPartySponsors"
            :key="afterPartySponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${afterPartySponsor.id}`"
          >
            <SponsorCard :sponsor="afterPartySponsor" category="options" />
          </NuxtLink>
        </div>
      </li>
      <li>
        <SponsorCategoryTitle category="name-card" />
        <div class="sponsors options-sponsors">
          <NuxtLink
            v-for="namecardSponsor in sponsors.namecardSponsors"
            :key="namecardSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${namecardSponsor.id}`"
          >
            <SponsorCard :sponsor="namecardSponsor" category="options" />
          </NuxtLink>
        </div>
      </li>
      <li>
        <SponsorCategoryTitle category="refreshment" />
        <div class="sponsors options-sponsors">
          <NuxtLink
            v-for="refreshmentSponsor in sponsors.refreshmentSponsors"
            :key="refreshmentSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${refreshmentSponsor.id}`"
          >
            <SponsorCard :sponsor="refreshmentSponsor" category="options" />
          </NuxtLink>
        </div>
      </li>
      <li>
        <SponsorCategoryTitle category="simultaneous-interpretation" />
        <div class="sponsors options-sponsors">
          <NuxtLink
            v-for="interpretationSponsor in sponsors.interpretationSponsors"
            :key="interpretationSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${interpretationSponsor.id}`"
          >
            <SponsorCard :sponsor="interpretationSponsor" category="options" />
          </NuxtLink>
        </div>
      </li>
      <li>
        <SponsorCategoryTitle category="handson" />
        <div class="sponsors options-sponsors">
          <NuxtLink
            v-for="handsonSponsor in sponsors.handsonSponsors"
            :key="handsonSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${handsonSponsor.id}`"
          >
            <SponsorCard :sponsor="handsonSponsor" category="options" />
          </NuxtLink>
        </div>
      </li>
    </ul>
    <ul class="sponsor-list">
      <li>
        <SponsorCategoryTitle category="media" />
        <div class="sponsors options-sponsors">
          <NuxtLink
            v-for="mediaSponsor in sponsors.mediaSponsors"
            :key="mediaSponsor.name"
            :to="`${locale === 'ja' ? '/' : `/${locale}/`}sponsors/${mediaSponsor.id}`"
          >
            <SponsorCard :sponsor="mediaSponsor" category="options" />
          </NuxtLink>
        </div>
      </li>
    </ul>
    <ul v-if="sponsors.individual.length !== 0" class="sponsor-list">
      <li>
        <SponsorCategoryTitle category="individual" />
        <div class="sponsors personal-sponsor-list">
          <span v-for="sponsor in sponsors.individual" :key="sponsor">
            {{ sponsor }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.sponsor-list-root': {
    maxWidth: '988px',
    margin: '0 auto',
  },
  '.sponsor-list': {
    margin: '40px auto 0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    'li': {
      width: '100%',
    },
    '&.-half': {
      gap: '40px 40px',
      'li': {
        width: 'calc(50% - 20px)',
      },
    },
  },

  '.sponsors': {
    marginTop: 'calc({space.8} * 4)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    'a': {
      display: 'block',
      textAlign: 'center',
      '& > div': {
        margin: '0 auto',
      },
    },
  },
  '.platinum-sponsors': {
    gap: '24px 24px',
  },
  '.gold-sponsors': {
    gap: '32px 32px',
  },
  '.silver-sponsors': {
    gap: '32px 32px',
  },
  '.bronze-sponsors': {
    gap: '32px 32px',
  },
  '.options-sponsors': {
    gap: '32px 32px',
  },
  '.personal-sponsor-list': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    color: '{color.sponsor.options}',
    fontSize: 'calc(24*{fontSize.base})',
    gap: 'calc({space.8} * 1) calc({space.8} * 2)',
  },
  '@tablet': {
    '.sponsor-list': {
      '&.-half': {
        gap: '40px 20px',
        'li': {
          width: 'calc(50% - 10px)',
        },
      },
    },
    '.gold-sponsors': {
      gap: '32px 24px',
      '& > a': {
        width: 'calc(50% - 12px)',
      },
    },
    '.silver-sponsors': {
      gap: '32px 24px',
      '& > a': {
        width: 'calc(31%)',
      },
    },
    '.bronze-sponsors': {
      gap: '32px 18px',
    },
    '.options-sponsors': {
      gap: '32px 18px',
    },
  },
  '@mobile': {
    '.gold-sponsors': {
      gap: '20px 20px',
    },
    '.silver-sponsors': {
      gap: '20px 20px',
      '& > a': {
        width: 'calc(50% - 10px)',
      },
    },
    '.bronze-sponsors': {
      gap: '20px 16px',
      '& > a': {
        width: 'calc(33% - 10px)',
      },
    },
    '.options-sponsors': {
      gap: '20px',
    },
  },
})
</style>

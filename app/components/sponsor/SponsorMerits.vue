<script setup lang="ts">
import CreditSvg from '~/assets/sponsor/credit.svg'
import TshirtSvg from '~/assets/sponsor/tshirt.svg'
import EntranceSvg from '~/assets/sponsor/entrance.svg'
import SeatSvg from '~/assets/sponsor/seat.svg'
import MeritCard from '~/components/sponsor/MeritCard.vue'
</script>

<template>
  <div class="merit-wrapper">
    <MeritCard
      :id="1"
      :title="$t('top.sponsors_merit1')"
      :detail="$t('top.sponsors_merit1_detail')"
    >
      <CreditSvg />
    </MeritCard>
    <MeritCard
      :id="2"
      :title="$t('top.sponsors_merit2')"
      :detail="$t('top.sponsors_merit2_detail')"
    >
      <TshirtSvg />
    </MeritCard>
    <MeritCard
      :id="3"
      :title="$t('top.sponsors_merit3')"
      :detail="$t('top.sponsors_merit3_detail')"
    >
      <EntranceSvg />
    </MeritCard>
    <MeritCard
      :id="4"
      :title="$t('top.sponsors_merit4')"
      :detail="$t('top.sponsors_merit4_detail')"
    >
      <SeatSvg />
    </MeritCard>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.merit-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    gap: 'calc({space.8} * 4)',
  },
})
</style>

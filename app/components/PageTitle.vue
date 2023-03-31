<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  yamatoTitle: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h1 :id="id" class="title">
    <span class="title-main">{{ title }}</span>
    <br />
    <span class="title-sub">{{ yamatoTitle }}</span>
  </h1>
</template>

<style lang="ts" scoped>
css({
  '.title': {
    textAlign: 'center',
    lineHeight: '1',
  },
  '.title-main': {
    color: '{color.vue.blue}',
    fontSize: 'calc(40*{fontSize.base})',
    fontWeight: 'bold',
    lineHeight: '1',
  },
  '.title-sub': {
    textAlign: 'center',
    color: '{color.vue.blue}',
    fontSize: 'calc(20*{fontSize.base})',
    lineHeight: '1',
    marginTop: '18px',
    display: 'grid',
    gridTemplateColumns: '96px max-content 96px',
    justifyContent: 'center',
    placeItems: 'center',
    columnGap: '16px',
    '&::before, &::after': {
      content: '""',
      display: 'inline-block',
      background: '{color.vue.blue}',
      width: '96px',
      height: '1px',
    },
  },
})
</style>

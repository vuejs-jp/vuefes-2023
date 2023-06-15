<template>
  <p class="copy-right-detail">
    © 2018-2023 Vue.js Japan User Group some rights reserved.
    <br />
    Vue.js artworks by
    <a href="https://github.com/yyx990803" target="_blank" rel="noreferrer">Evan You</a> is licensed
    under a
    <a
      href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"
      target="_blank"
      rel="noreferrer"
      >Creative Commons Attribution 4.0 International License</a
    >.
  </p>
</template>

<style lang="ts" scoped>
css({
  '.copy-right-detail': {
    textAlign: 'center',
    color: '{color.white}',
    fontSize: '12px',
    'a': {
      textDecoration: 'underline',
      '&:hover': {
        opacity: 0.4,
        transition: '.2s',
      },
    },
  },
  '@desktop': {
    '.copy-right-detail': {
      textAlign: 'right',
    },
  },
})
</style>

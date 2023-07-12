<script setup lang="ts">
import { useStore, storeKey } from '~/atoms/user'
provide(storeKey, useStore())
</script>

<template>
  <slot />
</template>
